// src/utils/codeEditorMethods.js

import DOMPurify from 'dompurify';

export const runCode = (htmlCode, cssCode, jsCode, iframeRef) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlCode);

  const iframe = iframeRef;
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  if (iframeDoc) {
    const iframeContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${sanitizedHtml}
          <script>
            ${jsCode.replace(/<\/script>/g, "<\\/script>")}
          </script>
        </body>
      </html>
    `;

    iframeDoc.open();
    iframeDoc.write(iframeContent);
    iframeDoc.close();
  } else {
    console.error("Iframe document not available.");
  }
};

export const exportFiles = (htmlCode, cssCode, jsCode) => {
  downloadFile('index.html', htmlCode);
  downloadFile('styles.css', cssCode);
  downloadFile('script.js', jsCode);
};

const downloadFile = (filename, content) => {
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
};
