// codeEditorCompleteMethods.js

export default {
  methods: {
    // Method to extract HTML from completeCode
    extractHTMLFromCompleteCode() {
      const htmlRegex = /<body[^>]*>([\s\S]*?)<\/body>/i;
      const match = this.completeCode.match(htmlRegex);
      return match ? match[1] : '';
    },

    // Method to extract CSS from completeCode
    extractCSSFromCompleteCode() {
      const cssRegex = /<style[^>]*>([\s\S]*?)<\/style>/i;
      const match = this.completeCode.match(cssRegex);
      return match ? match[1] : '';
    },

    // Method to extract JavaScript from completeCode
    extractJSFromCompleteCode() {
      // Match all <script> blocks in the complete code
      const jsRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
      const matches = [...this.completeCode.matchAll(jsRegex)];

      // Concatenate all JavaScript matches from <script> blocks
      const jsCode = matches.map(match => match[1]).join('\n');
      return jsCode;
    },

    // Method to run the code inside the iframe
    runCode() {
      const iframe = this.$refs.previewIframe;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      // Create the iframe content with HTML, CSS, and JS
      const iframeContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>${this.extractCSSFromCompleteCode()}</style>
          </head>
          <body>
            ${this.extractHTMLFromCompleteCode()}
            <script>
              ${this.extractJSFromCompleteCode()}
            </script>
          </body>
        </html>
      `;

      // Write the content to the iframe document
      iframeDoc.open();
      iframeDoc.write(iframeContent);
      iframeDoc.close();
    },

    // Export the code as files (HTML, CSS, JS)
    exportFiles() {
      const htmlBlob = new Blob([this.extractHTMLFromCompleteCode()], { type: 'text/html' });
      const cssBlob = new Blob([this.extractCSSFromCompleteCode()], { type: 'text/css' });
      const jsBlob = new Blob([this.extractJSFromCompleteCode()], { type: 'application/javascript' });

      const htmlUrl = URL.createObjectURL(htmlBlob);
      const cssUrl = URL.createObjectURL(cssBlob);
      const jsUrl = URL.createObjectURL(jsBlob);

      // Create links to download the blobs
      const downloadHtml = document.createElement('a');
      downloadHtml.href = htmlUrl;
      downloadHtml.download = 'index.html';

      const downloadCss = document.createElement('a');
      downloadCss.href = cssUrl;
      downloadCss.download = 'styles.css';

      const downloadJs = document.createElement('a');
      downloadJs.href = jsUrl;
      downloadJs.download = 'script.js';

      // Trigger the download
      downloadHtml.click();
      downloadCss.click();
      downloadJs.click();
    },
  },
};
