<template>
    <div class="chat-input p-4">
      <input
        type="text"
        v-model="message"
        placeholder="Type a message..."
        class="border rounded w-full p-2 mr-2"
      />
      <button class="bg-blue-500 text-white rounded p-2" @click="sendMessage">Send</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatInput',
    data() {
      return {
        message: '',
      };
    },
    methods: {
      sendMessage() {
        console.log('Sending message:', this.message);
        this.message = '';
      },
    },
  };
  </script>
  