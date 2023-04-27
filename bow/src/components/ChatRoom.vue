<template>
  <div class="flex h-screen">
    <div class="bg-oxford-blue w-1/4 p-4 flex flex-col h-full">
      <ChatMenu />
      <ChatList />
    </div>
    <div class="flex-1 h-full flex flex-col">
      <ChatViewer />
      <ChatInput />
    </div>
  </div>
</template>

<script>
import ChatMenu from '@/components/ChatMenu.vue';
import ChatList from '@/components/ChatList.vue';
import ChatViewer from '@/components/ChatViewer.vue';
import ChatInput from '@/components/ChatInput.vue';

export default {
  name: 'ChatRoom',
  components: {
    ChatMenu,
    ChatList,
    ChatViewer,
    ChatInput,
  },
};
</script>
