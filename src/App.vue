<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav>
      <!-- Logo -->
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </div>

      <!-- Navigation Links -->
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/about" exact>About</router-link></li>
        <li><router-link to="/note-app">Editor</router-link></li> <!-- Link to NoteApp -->
        <li><router-link to="/complete-code-editor" active-class="active-link">Complete</router-link></li> <!-- Link to CompleteCodeEditor page -->
      </ul>


    </nav>

    <!-- Render the matched route component here -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Styles for your navigation bar */
nav {
  display: flex;
  align-items: center; /* Align the logo and nav items vertically */
  justify-content: space-between; /* Space between logo and nav links */
  background-color: #42b983;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-grow: 1; /* This ensures the nav links are centered */
}

li {
  margin-right: 20px;
}

router-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

router-link.active {
  color: #ff6347;
}

/* Background color for the entire app */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f0f0f0; /* Grey background */
  min-height: 100vh; /* Ensure the grey covers the full viewport */
  padding: 20px;
}

/* Logo container */
.logo-container {
  display: flex;
  justify-content: flex-start; /* Align the logo to the left */
  margin-right: 20px; /* Space between logo and the nav links */
}

.logo {
  width: 70px; /* Adjust the size of the logo */
  height: auto;
}
@media (max-width: 768px) {

  li {
    margin: 10px 0; /* Space between items */
    font-size: 12px; /* Adjust font size to be smaller on mobile */
      margin-right: 10px;
  }

}


</style>
