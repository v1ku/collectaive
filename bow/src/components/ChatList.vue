<template>
  <div class="chat-list">
    <div v-for="(message, index) in messages" :key="index" class="message">
      <p>{{ message.sender }}: {{ message.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { sender: "User A", text: "Hello, everyone!" },
        { sender: "User B", text: "Hi there!" },
      ],
    };
  },
};
</script>
