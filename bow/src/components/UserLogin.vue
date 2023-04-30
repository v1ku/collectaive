<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="w-full max-w-sm bg-white p-6 rounded-md shadow-md">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <button @click="loginWithGoogle" class="w-full bg-blue-600 text-white py-2 rounded-md">
        Login with Google
      </button>
    </div>
  </div>
</template>

<script>
import VueAuthenticate from 'vue-authenticate';
import axios from 'axios';

const vueAuth = new VueAuthenticate(axios, {
  baseUrl: process.env.VUE_APP_API_BASE_URL,
  providers: {
    google: {
      clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
      redirectUri: process.env.VUE_APP_GOOGLE_REDIRECT_URI,
    },
  },
});

export default {
  name: 'UserLogin',
  methods: {
    async loginWithGoogle() {
      try {
        const response = await vueAuth.authenticate('google');
        // Handle successful authentication and set user data in Vuex store
        console.log(response);
      } catch (error) {
        console.error('Authentication failed', error);
      }
    },
  },
};
</script>