import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { GlobalWorkerOptions } from "pdfjs-dist";
import "./PDFViewer.css";

GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js2.11.338/pdf.worker.min.js`;

export default function PDFViewer({ url }) {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  return (
    <div className="pdf-viewer">
      <div className="toolbar">
        <Toolbar />
      </div>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js`}
      >
        <div className="viewer">
          <Viewer fileUrl={url} plugins={[toolbarPluginInstance]} />
        </div>
      </Worker>
    </div>
  );
}
