<template>
  <div class="home-container">
    <h1>Welcome to the Code Editor Platform!</h1>
    <p class="intro-text">
      Create and test your HTML, CSS, and JavaScript code in real-time with our powerful and user-friendly code editor.
      Whether you're learning, experimenting, or building something new, this platform has everything you need!
    </p>

    <div class="features">
      <h2>Key Features:</h2>
      <ul>
        <li>Write and edit HTML, CSS, and JavaScript code</li>
        <li>Instantly preview your code in a live environment</li>
        <li>Export your code as individual files for easy sharing</li>
        <li>Save your projects and come back later</li>
      </ul>
    </div>

    <div class="cta">
      <router-link to="/complete-code-editor" class="cta-btn">Start Coding Now</router-link>
    </div>

    <div class="benefits">
      <h2>Why Use Our Code Editor?</h2>
      <p>
        This platform is designed for developers, students, and anyone looking to practice or build web projects.
        Whether you're just starting or you're a seasoned pro, you'll find our intuitive code editor and live preview functionality useful and powerful.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
/* Home Page Styles */
.home-container {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 40px;
  background-color: #f7f7f7;
  min-height: 100vh;
}

h1 {
  font-size: 2.5rem;
  color: #42b983;
  margin-bottom: 20px;
}

.intro-text {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;
}

.features {
  margin-bottom: 40px;
}

.features h2 {
  font-size: 1.8rem;
  color: #42b983;
}

.features ul {
  list-style-type: none;
  padding: 0;
}

.features li {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
}

.cta {
  margin-bottom: 30px;
}

.cta-btn {
  padding: 15px 30px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  font-size: 1.2rem;
}

.cta-btn:hover {
  background-color: #358f60;
}

.benefits {
  margin-top: 40px;
}

.benefits h2 {
  font-size: 1.8rem;
  color: #42b983;
}

.benefits p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .home-container {
    padding: 20px;
  }

  .cta-btn {
    width: 100%;
    font-size: 1.1rem;
  }
}
</style>
