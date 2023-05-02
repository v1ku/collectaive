<template>
  <div class="chat-room">
    <user-info-card />
    <chat-viewer />
  </div>
</template>

<script>
import UserInfoCard from "./UserInfoCard.vue";
import ChatViewer from "./ChatViewer.vue";

export default {
  components: {
    UserInfoCard,
    ChatViewer,
  },
};
</script>
