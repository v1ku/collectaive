<template>
  <div class="flex-grow overflow-y-auto p-4">
    <div v-for="msg in messages" :key="msg.id" class="mb-4">
      <div class="font-bold">{{ msg.user }}</div>
      <div>{{ msg.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatViewer",
  data() {
    return {
      messages: [
        // Dummy data
        { id: 1, user: "User1", content: "Hello!" },
        { id: 2, user: "User2", content: "Hi there!" },
        { id: 3, user: "User1", content: "How are you?" },
      ],
    };
  },
};
</script>
