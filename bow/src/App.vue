<template>
  <div id="app">
    <header>
      <button @click="toggleDarkMode" class="p-2 m-2 bg-oxford-blue text-white rounded">
        {{ darkModeEnabled ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </header>
    <main>
      <div class="container mx-auto">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      darkModeEnabled: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkModeEnabled = !this.darkModeEnabled;
      if (this.darkModeEnabled) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
