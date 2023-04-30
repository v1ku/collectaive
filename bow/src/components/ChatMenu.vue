<template>
    <div class="bg-white p-4 shadow-md">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div
            class="w-12 h-12 rounded-full border-2 border-green-500 bg-green-100"
            v-if="currentUser && currentUser.isOnline"
          ></div>
          <div
            class="w-12 h-12 rounded-full border-2 border-gray-300"
            v-if="currentUser && !currentUser.isOnline"
          ></div>
          <div class="ml-4">
            <h2 class="font-bold text-xl">{{ currentUser && currentUser.name }}</h2>
            <p class="text-sm text-gray-500">{{ currentUser && currentUser.status }}</p>
          </div>
        </div>
        <div class="flex items-center">
          <button @click="toggleNotifications" class="mr-4">
            <i
              class="text-xl fas"
              :class="{
                'fa-bell': !notifications,
                'fa-bell-slash': notifications,
              }"
            ></i>
          </button>
          <div class="relative">
            <button @click="toggleDropdown" class="text-xl fas fa-cog"></button>
            <div v-if="showDropdown" class="absolute right-0 mt-2 w-64">
              <user-settings></user-settings>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import UserSettings from './UserSettings';
  
  export default {
    components: {
      UserSettings,
    },
    computed: {
      currentUser() {
        return this.$store.state.user;
      },
    },
    data() {
      return {
        notifications: true,
        showDropdown: false,
      };
    },
    methods: {
      toggleNotifications() {
        this.notifications = !this.notifications;
      },
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
    },
  };
  </script>
  