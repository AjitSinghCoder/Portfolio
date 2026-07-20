import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

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
      <span style={{color: '#fc9867'}}>Ahmedabad, India</span><br/><br/>
      I am a Senior Software Engineer specializing in architecting and deploying scalable, high-performance backend systems.<br/>
      Over the last few years, I have successfully scaled APIs to handle millions of requests, optimized database query latencies by over 30%, and built complex microservice architectures from scratch.<br/><br/>
      My expertise lies in <span style={{color: '#a9dc76'}}>Python, Django, FastAPI, and GoLang</span>, combined with robust Cloud infrastructure (AWS/GCP), event-driven messaging (Kafka/RabbitMQ), and AI/LLM integrations (RASA/OpenAI).<br/><br/>
      Whether it's building GW-scale renewable energy forecasting pipelines or developing low-latency crypto trading engines, I thrive on solving hard engineering problems.
    </div>
  ),
  
  experience: (
    <div>
      <span style={{color: '#ab9df2', fontWeight: 'bold'}}>[1] Adani Green Energy Ltd</span> <span style={{color: '#78dce8'}}>(Aug 2025 - Present)</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Role:</span> Sr Software Developer<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Location:</span> Ahmedabad, India<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Impact & Responsibilities:</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Designed and developed scalable backend services with Django for a renewable energy power forecasting platform used to manage GW-scale solar assets.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Built interactive dashboards for comparing forecast vs. actual generation across multiple ML models, enabling faster operational decisions.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Integrated satellite imagery and real-time/historical weather data (WMS APIs) to significantly improve forecasting accuracy.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Developed a Deviation Settlement Mechanism (DSM) penalty calculation dashboard to reduce regulatory compliance time.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Automated ~60% of manual workflows via Python automation scripts for data processing and scheduled report generation.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Maintained high-availability services using Redis for caching, Celery + RabbitMQ for async processing, and GitLab CI/CD.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Tech Stack:</span> <span style={{color: '#ffd866'}}>Python, Django, Redis, Celery, PostgreSQL, GitLab CI/CD, GCP</span><br/><br/>
      
      <span style={{color: '#ab9df2', fontWeight: 'bold'}}>[2] Urbano Infotech</span> <span style={{color: '#78dce8'}}>(Sep 2023 - Aug 2025)</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Role:</span> Software Development Engineer II<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Location:</span> Ahmedabad, India<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Impact & Responsibilities:</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Developed and maintained scalable backend services using Django REST Framework (DRF), consistently maintaining high API availability.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Built an intelligent B2B chatbot with the RASA framework, automating customer interactions and reducing manual support volume.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Designed and implemented RESTful APIs with FastAPI, achieving ~30% improvement in response times through query optimization.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Managed multi-database environments spanning PostgreSQL, DynamoDB, and MongoDB, ensuring data integrity and performant queries.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Contributed to core microservices architecture for the Book You Pandit platform.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#fc9867'}}>Tech Stack:</span> <span style={{color: '#ffd866'}}>FastAPI, Django, RASA, PostgreSQL, DynamoDB, MongoDB, Next.js</span>
    </div>
  ),
    
  projects: (
    <div>
      <span style={{color: '#ab9df2', fontWeight: 'bold'}}>[1] Book You Pandit</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;A comprehensive booking platform for pandit services.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Designed a highly concurrent API Gateway handling core business logic.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Integrated <span style={{color: '#78dce8'}}>FastAPI</span> for low-latency endpoints.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Implemented <span style={{color: '#78dce8'}}>Redis</span> caching and <span style={{color: '#78dce8'}}>Celery</span> for background async tasks (notifications, billing).<br/><br/>
      
      <span style={{color: '#ab9df2', fontWeight: 'bold'}}>[2] Crypto Trading Platform Backend</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;A high-frequency cryptocurrency trading and analytics engine.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Architected using distributed microservices built in <span style={{color: '#78dce8'}}>GoLang</span>.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Utilized <span style={{color: '#78dce8'}}>Kafka</span> for real-time market data streaming and order execution pipelines.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Leveraged <span style={{color: '#78dce8'}}>gRPC</span> for blazingly fast inter-service communication.<br/><br/>
      
      <span style={{color: '#ab9df2', fontWeight: 'bold'}}>[3] Morsmiles</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;A medical directory and dental care booking system.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Built the frontend UI with <span style={{color: '#78dce8'}}>Next.js</span> for high SEO scores and SSR capabilities.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Developed a secure, robust backend using <span style={{color: '#78dce8'}}>Django</span> to manage patient records and appointment scheduling.<br/><br/>
      
      <span style={{color: '#ab9df2', fontWeight: 'bold'}}>[4] Dylog AI Chatbot</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;An intelligent, context-aware AI customer support assistant.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Leveraged the <span style={{color: '#78dce8'}}>RASA</span> framework for intent classification and entity extraction.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Integrated <span style={{color: '#78dce8'}}>OpenAI LLMs</span> for dynamic, human-like fallback responses.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#a9dc76'}}>*</span> Successfully reduced manual customer support load by over 40%.
    </div>
  ),

  skills: (
    <div>
      <span style={{color: '#fc9867', width: '140px', display: 'inline-block'}}>Languages:</span> <span style={{color: '#a9dc76'}}>Python, GoLang, SQL, C++, JavaScript</span><br/>
      <span style={{color: '#fc9867', width: '140px', display: 'inline-block'}}>Backend Frameworks:</span> <span style={{color: '#a9dc76'}}>FastAPI, Django, Django REST Framework (DRF), gRPC</span><br/>
      <span style={{color: '#fc9867', width: '140px', display: 'inline-block'}}>Frontend/Web:</span> <span style={{color: '#a9dc76'}}>React.js, Next.js, HTML/CSS</span><br/>
      <span style={{color: '#fc9867', width: '140px', display: 'inline-block'}}>Databases:</span> <span style={{color: '#a9dc76'}}>PostgreSQL, MySQL, MongoDB, DynamoDB, Redis</span><br/>
      <span style={{color: '#fc9867', width: '140px', display: 'inline-block'}}>DevOps & Cloud:</span> <span style={{color: '#a9dc76'}}>GCP, AWS, Docker, GitLab CI/CD</span><br/>
      <span style={{color: '#fc9867', width: '140px', display: 'inline-block'}}>Architecture:</span> <span style={{color: '#a9dc76'}}>Microservices, Event-Driven (Kafka, RabbitMQ), REST APIs</span><br/>
      <span style={{color: '#fc9867', width: '140px', display: 'inline-block'}}>AI / ML:</span> <span style={{color: '#a9dc76'}}>RASA, OpenAI API Integrations</span>
    </div>
  ),
  
  education: (
    <div>
      <span style={{color: '#ab9df2', fontWeight: 'bold'}}>[ B.Tech in Information Technology ]</span><br/>
      <span style={{color: '#fc9867'}}>Gujarat Technological University</span> | <span style={{color: '#78dce8'}}>2019 - 2023</span><br/>
      <span style={{color: '#a9dc76'}}>CGPA: 8.6</span>
    </div>
  ),

  contact: (
    <div>
      <span style={{color: '#fc9867', width: '90px', display: 'inline-block'}}>Email:</span> <a style={{color: '#78dce8', textDecoration: 'underline'}} href="mailto:ajit.singh@example.com">ajit.singh@example.com</a><br/>
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
