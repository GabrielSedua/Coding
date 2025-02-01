// src/mixins/codeEditorMixin.js

import DOMPurify from 'dompurify';

export const codeEditorMixin = {
  data() {
    return {
      htmlCode: '',
      cssCode: '',
      jsCode: '',
    };
  },
  methods: {
    runCode() {
      const sanitizedHtml = DOMPurify.sanitize(this.htmlCode);

      const iframe = this.$refs.previewIframe;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      if (iframeDoc) {
        const iframeContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>${this.cssCode}</style>
            </head>
            <body>
              ${sanitizedHtml}
              <script>
                ${this.jsCode.replace(/<\/script>/g, "<\\/script>")}
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
    },
    exportFiles() {
      this.downloadFile('index.html', this.htmlCode);
      this.downloadFile('styles.css', this.cssCode);
      this.downloadFile('script.js', this.jsCode);
    },
    downloadFile(filename, content) {
      const blob = new Blob([content], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
    },
  },
};
