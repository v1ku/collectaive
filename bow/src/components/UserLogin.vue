<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="w-full max-w-sm bg-white p-6 rounded-md shadow-md">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block mb-2" for="email">Email:</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="border rounded w-full p-2"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2" for="password">Password:</label>
          <input
            id="password"
            type="password"
            v-model="password"
            class="border rounded w-full p-2"
          />
        </div>
        <button class="w-full bg-blue-600 text-white py-2 rounded-md" type="submit">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
  async login() {
    console.log('Logged in successfully');
    this.$store.commit('setIsAuthenticated', true);
    try {
      await this.$router.push('/chatroom');
    } catch (error) {
      console.error('Error while navigating:', error);
    }
  },
},

};
</script>
