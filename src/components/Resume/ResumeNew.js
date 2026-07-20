import React, { useState, useEffect } from "react";
import pdf from "../../Assets/resume1.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  const scale = width > 960 ? 1.4 : width > 600 ? 1.0 : 0.55;

  return (
    <main className="resume-page">
      <div className="bg-grid" aria-hidden="true" />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <span className="section-label">Resume</span>
        <h1 className="section-title" style={{ marginBottom: "2rem" }}>My resume.</h1>

        <div className="resume-actions">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="btn-primary-custom"
          >
            <AiOutlineDownload /> Download PDF
          </a>
        </div>

        <div className="resume-viewer">
          <Document file={pdf} className="d-flex flex-column align-items-center" style={{ gap: "1.5rem" }}>
            <Page pageNumber={1} scale={scale} />
            <Page pageNumber={2} scale={scale} />
          </Document>
        </div>
      </div>
    </main>
  );
}

export default ResumeNew;
