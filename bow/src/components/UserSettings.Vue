<template>
    <div class="user-settings container mx-auto p-4">
      <h1 class="text-xl font-semibold mb-4">User Settings</h1>
      <div class="settings-form">
        <div class="mb-4">
          <label class="block mb-2" for="username">Username:</label>
          <input
            id="username"
            type="text"
            v-model="settings.username"
            class="border rounded w-full p-2"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2" for="email">Email:</label>
          <input
            id="email"
            type="email"
            v-model="settings.email"
            class="border rounded w-full p-2"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2" for="password">Password:</label>
          <input
            id="password"
            type="password"
            v-model="settings.password"
            class="border rounded w-full p-2"
          />
        </div>
        <button class="bg-blue-500 text-white rounded p-2" @click="saveSettings">Save Settings</button>
      </div>
    </div>
  </template>
  
  <script>
    import axios from 'axios';
    
    export default {
        name: 'UserSettings',
        data() {
        return {
            settings: {
            username: '',
            email: '',
            password: '',
            },
        };
        },
        created() {
        this.fetchSettings();
        },
        methods: {
        async fetchSettings() {
            try {
            const response = await axios.get('/api/user/settings'); // Replace with your API endpoint
            this.settings = response.data;
            } catch (error) {
            console.error('Error fetching user settings:', error);
            }
        },
        async saveSettings() {
            try {
            await axios.put('/api/user/settings', this.settings); // Replace with your API endpoint
            console.log('Settings saved successfully');
            } catch (error) {
            console.error('Error saving user settings:', error);
            }
        },
        },
    };
  </script>
  