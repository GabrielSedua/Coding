<template>
  <div class="app-container">
    <div class="editor-container">
      <h1>Complete Code Editor</h1>

      <!-- Combined HTML, CSS, JS Input -->
      <div class="editor">
        <h3>Write HTML, CSS, and JavaScript</h3>
        <textarea v-model="completeCode" placeholder="Write your HTML, CSS, and JavaScript here in a single input" class="editor-textarea"></textarea>
      </div>

      <button @click="runCode" class="run-btn">Run Code</button>
      <button @click="exportFiles" class="export-btn">Export Files</button>
    </div>

    <div class="preview-container">
    <h1>Complete Code Preview</h1>
      <h2>Preview</h2>
      <iframe ref="previewIframe" class="preview-iframe"></iframe>
    </div>
  </div>
</template>

<script>
// Import the methods from the external file
import codeEditorCompleteMethods from '../mixins/codeEditorCompleteMethods.js';

export default {
  data() {
    return {
      completeCode: '', // Holds the combined HTML, CSS, and JS input
    };
  },

  mixins: [codeEditorCompleteMethods], // Use the imported methods as a mixin

};
</script>

<style scoped>
/* Global Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #f0f0f0;
}

.app-container {
  display: flex;
  width: -webkit-fill-available;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  text-align: center; /* Center the title */
  margin-top: 20px;
  color: #333;
}

/* Editor Section */
.editor-container {
  width: 45%;
  display: flex;
  flex-direction: column;
}

.editor {
  margin-bottom: 15px;
}

.editor h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.editor-textarea {
  width: 100%;
  height: 500px;
  margin-bottom: 10px;
  resize: vertical;
  font-family: monospace;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.run-btn, .export-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.run-btn {
  background-color: #42b983;
  color: white;
}

.run-btn:hover {
  background-color: #358f60;
}

.export-btn {
  background-color: #007bff;
  color: white;
}

.export-btn:hover {
  background-color: #0056b3;
}

/* Preview Section */
.preview-container {
  width: 45%;
  padding: 10px;
}

.preview-iframe {
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Media Query for Mobile Devices */
@media (max-width: 768px) {
  .app-container {
    flex-direction: column; /* Stack elements vertically on smaller screens */
    align-items: center;
  }

  .editor-container {
    width: 90%; /* Adjust width for mobile */
  }

  .preview-container {
    width: 90%; /* Adjust width for mobile */
    margin-top: 20px; /* Add space between editor and preview */
  }

  .run-btn, .export-btn {
    width: 100%; /* Make buttons full width on mobile */
  }
}
</style>
