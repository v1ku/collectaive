<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="w-11/12 h-9/10 bg-white shadow-lg rounded-md">
      <div class="flex h-full">
        <div class="bg-oxford-blue w-1/4 p-4 flex flex-col h-full">
          <ChatMenu />
          <ChatList />
        </div>
        <div class="flex-1 h-full flex flex-col">
          <ChatViewer />
          <ChatInput />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ChatMenu from './ChatMenu.vue';
import ChatList from './ChatList.vue';
import ChatViewer from './ChatViewer.vue';
import ChatInput from './ChatInput.vue';

export default {
  name: 'ChatRoom',
  components: {
    ChatMenu,
    ChatList,
    ChatViewer,
    ChatInput,
  },
  computed: {
    ...mapState(['isAuthenticated']),
  },
  watch: {
    isAuthenticated(newValue) {
      if (!newValue) {
        this.$router.push('/login');
      }
    },
  },
  created() {
    if (!this.isAuthenticated) {
      this.$router.push('/login');
    }
  },
};
</script>

