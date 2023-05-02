<template>
  <div class="chat-viewer">
    <chat-list />
  </div>
</template>

<script>
import ChatList from "./ChatList.vue";

export default {
  components: {
    ChatList,
  },
};
</script>
