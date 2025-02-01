<template>
  <div class="about-container">
    <h1>About the Code Editor</h1>

    <!-- Card 1 -->
    <div class="card">
      <h2>Designing the Interface</h2>
      <p>
        The user interface of this code editor was designed with simplicity and ease of use in mind. I wanted to ensure that developers, beginners or experienced, could immediately start writing code without distraction.
        The layout consists of two main sections: one for the editor itself and another for previewing the results. The editor is clean and responsive, providing a comfortable coding environment.
        I used a basic yet functional approach, ensuring the experience is fluid, even for mobile users.
      </p>
    </div>

    <!-- Card 2 -->
    <div class="card">
      <h2>Integrating HTML, CSS, and JavaScript</h2>
      <p>
        The challenge of this project was ensuring that HTML, CSS, and JavaScript could all be edited and previewed in one place seamlessly. I implemented the functionality to parse the code and render it dynamically in the preview window.
        This required extracting the relevant content from the input (HTML, CSS, and JS) and injecting it into an iframe. Using JavaScript, I was able to execute the user's code in real time and update the preview as the user typed.
      </p>
    </div>

    <!-- Card 3 -->
    <div class="card">
      <h2>Making It Extensible</h2>
      <p>
        I kept extensibility in mind when building this editor. I wanted it to be easy to add new features or update the existing ones. The code is modular, with components for each part of the editor, making it easy to modify.
        Additionally, I added a file export option so users could save their projects. The backend logic was kept lightweight and simple, which allowed for rapid testing and adjustments during development.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
/* About Page Styles */
.about-container {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
}

/* Styling for the card container and content */
.card {
  background-color: white;
  width: 80%;
  max-width: 600px;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center the text in each card */
}

.card h2 {
  font-size: 1.8rem;
  color: #42b983;
  margin-bottom: 15px;
}

.card p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  text-align: center; /* Ensure the paragraph text is centered */
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .card {
    width: 90%;
  }
}
</style>
