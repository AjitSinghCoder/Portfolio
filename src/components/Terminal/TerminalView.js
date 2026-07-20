import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ABOUT_DATA, EXPERIENCES, PROJECTS, SKILL_GROUPS } from "../../config/data";

const Banner = () => (
  <div className="terminal-banner">
    <pre style={{ margin: 0 }}>
{`   _____    _ _ _      ____  _____ 
  /  _  \\  (_) (_)    / __ \\/ ____|
 |  _  | | | | | |   | |  | \\___ \\ 
 | | | | | | | | |   | |  | |___) |
 |_| |_|_| |_|_|_|    \\____/_____/ 
                                   `}
    </pre>
  </div>
);

const COMMANDS = {
  help: (
    <div>
      <span style={{color: '#a9dc76'}}>Available commands:</span><br/>
      <span style={{color: '#78dce8'}}>whoami</span>      - display about me<br/>
      <span style={{color: '#78dce8'}}>experience</span>  - display my work experience<br/>
      <span style={{color: '#78dce8'}}>projects</span>    - list my projects<br/>
      <span style={{color: '#78dce8'}}>skills</span>      - list my technical skills<br/>
      <span style={{color: '#78dce8'}}>education</span>   - view my educational background<br/>
      <span style={{color: '#78dce8'}}>contact</span>     - get my contact info and links<br/>
      <span style={{color: '#78dce8'}}>clear</span>       - clear terminal output<br/>
      <span style={{color: '#78dce8'}}>date</span>        - show current system date<br/>
      <span style={{color: '#78dce8'}}>exit</span>        - return to GUI portfolio
    </div>
  ),
  
  whoami: (
    <div>
      <span style={{color: '#ab9df2', fontWeight: 'bold', fontSize: '1.2rem'}}>Ajit Kumar Singh</span><br/>
      <span style={{color: '#ffd866'}}>Senior Software Developer</span><br/>
      <span style={{color: '#fc9867'}}>{ABOUT_DATA.location}</span><br/><br/>
      <span dangerouslySetInnerHTML={{ __html: ABOUT_DATA.bio1 }} /><br/><br/>
      <span dangerouslySetInnerHTML={{ __html: ABOUT_DATA.bio2 }} /><br/><br/>
      <span dangerouslySetInnerHTML={{ __html: ABOUT_DATA.bio3 }} /><br/><br/>
      <span dangerouslySetInnerHTML={{ __html: ABOUT_DATA.bio4 }} />
    </div>
  ),
  
  experience: (
    <div>
      {EXPERIENCES.map((exp, index) => (
        <React.Fragment key={exp.id}>
          <span style={{color: '#ab9df2', fontWeight: 'bold'}}>[{index + 1}] {exp.company}</span> <span style={{color: '#78dce8'}}>({exp.period})</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Role:</span> {exp.role}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Location:</span> {exp.location}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Impact & Responsibilities:</span><br/>
          {exp.bullets.map((bullet, i) => (
            <React.Fragment key={i}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> {bullet}<br/>
            </React.Fragment>
          ))}
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Tech Stack:</span> <span style={{color: '#ffd866'}}>{exp.tech.join(', ')}</span><br/><br/>
        </React.Fragment>
      ))}
    </div>
  ),
    
  projects: (
    <div>
      {PROJECTS.map((proj, index) => (
        <React.Fragment key={index}>
          <span style={{color: '#ab9df2', fontWeight: 'bold'}}>[{index + 1}] {proj.title}</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{proj.subtitle || proj.description}<br/>
          {proj.bullets ? proj.bullets.map((bullet, i) => (
            <React.Fragment key={i}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> {bullet}<br/>
            </React.Fragment>
          )) : (
            <React.Fragment>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> {proj.description}<br/>
            </React.Fragment>
          )}
          <br/>
        </React.Fragment>
      ))}
    </div>
  ),

  skills: (
    <div>
      {SKILL_GROUPS.map((group, index) => (
        <React.Fragment key={index}>
          <span style={{color: '#fc9867', width: '140px', display: 'inline-block'}}>{group.label}:</span> <span style={{color: '#a9dc76'}}>{group.items.map(i => i.name).join(', ')}</span><br/>
        </React.Fragment>
      ))}
    </div>
  ),
  
  education: (
    <div>
      <span style={{color: '#ab9df2', fontWeight: 'bold'}}>[ {ABOUT_DATA.education} ]</span><br/>
      <span style={{color: '#fc9867'}}>IES Institute Of Technology and Management</span> | <span style={{color: '#78dce8'}}>2019 - 2023</span><br/>
      <span style={{color: '#a9dc76'}}>CGPA: 8.6</span>
    </div>
  ),

  contact: (
    <div>
      <span style={{color: '#fc9867', width: '90px', display: 'inline-block'}}>Email:</span> <a style={{color: '#78dce8', textDecoration: 'underline'}} href={`mailto:${ABOUT_DATA.email}`}>{ABOUT_DATA.email}</a><br/>
      <span style={{color: '#fc9867', width: '90px', display: 'inline-block'}}>Phone:</span> <a style={{color: '#78dce8', textDecoration: 'underline'}} href={`tel:${ABOUT_DATA.phone.replace(/\s+/g, '')}`}>{ABOUT_DATA.phone}</a><br/>
      <span style={{color: '#fc9867', width: '90px', display: 'inline-block'}}>GitHub:</span> <a style={{color: '#78dce8', textDecoration: 'underline'}} target="_blank" rel="noreferrer" href="https://github.com/AjitSinghCoder">github.com/AjitSinghCoder</a><br/>
      <span style={{color: '#fc9867', width: '90px', display: 'inline-block'}}>LinkedIn:</span> <a style={{color: '#78dce8', textDecoration: 'underline'}} target="_blank" rel="noreferrer" href="https://linkedin.com/in/ajitsinghcoder">linkedin.com/in/ajitsinghcoder</a>
    </div>
  )
};

const COMMAND_NAMES = Object.keys(COMMANDS);

function TerminalView() {
  const [history, setHistory] = useState([
    { type: "system", content: <Banner /> },
    { type: "system", content: "Welcome to AjitOS v2.0.0 (Linux 5.15.0-x86_64)" },
    { type: "system", content: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  
  // For Up/Down arrow command history
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      
      const newHistory = [...history, { type: "command", content: `ajit@portfolio:~$ ${input}` }];
      
      if (cmd !== "") {
        setCmdHistory(prev => [...prev, cmd]);
        setHistoryIndex(-1);
      }
      
      if (cmd === "") {
        // Do nothing
      } else if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      } else if (cmd === "exit") {
        navigate("/");
        return;
      } else if (cmd === "date") {
        newHistory.push({ type: "output", content: new Date().toString() });
      } else if (COMMANDS[cmd]) {
        newHistory.push({ type: "output", content: COMMANDS[cmd] });
      } else {
        newHistory.push({ type: "error", content: `bash: ${cmd}: command not found` });
      }
      
      setHistory(newHistory);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= cmdHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIndex);
          setInput(cmdHistory[nextIndex]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMAND_NAMES.find(c => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  return (
    <div 
      className="terminal-container" 
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      <div className="terminal-window">
        <div className="terminal-header">
          <button 
            className="terminal-back-btn" 
            onClick={(e) => { e.stopPropagation(); navigate("/"); }}
          >
            ← Back to Portfolio
          </button>
          <div className="terminal-title">ajit@portfolio: ~</div>
        </div>
        
        <div className="terminal-body scanlines">
          {history.map((line, i) => (
            <div key={i} className={`terminal-line ${line.type}`}>
              {typeof line.content === 'string' ? (
                line.content.split('\n').map((str, j) => (
                  <div key={j} style={{ paddingLeft: line.type === 'output' ? '1rem' : '0' }}>
                    {str === "" ? "\u00A0" : str}
                  </div>
                ))
              ) : (
                <div style={{ paddingLeft: line.type === 'output' ? '1rem' : '0' }}>
                  {line.content}
                </div>
              )}
            </div>
          ))}
          
          <div className="terminal-input-row">
            <span className="terminal-prompt">ajit@portfolio:~$ </span>
            <div className="terminal-input-wrapper">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                spellCheck="false"
                autoComplete="off"
                autoFocus
              />
            </div>
          </div>
          <div ref={bottomRef} style={{ height: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default TerminalView;
