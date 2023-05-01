<template>
  <div
    class="bg-white p-4 shadow-md h-full flex flex-col"
    :class="selectedChat ? 'w-1/3' : 'w-full'"
  >
    <div
      v-for="chat in chats"
      :key="chat.id"
      class="mb-4 p-2 rounded-lg hover:border-r-4 hover:border-green-400 cursor-pointer"
      @click="selectChat(chat)"
    >
      <div class="flex items-center">
        <div
          class="w-12 h-12 rounded-full"
          :style="getGradientBorder(chat.onlinePercentage)"
        ></div>
        <div class="ml-4">
          <h2 class="font-bold text-xl">{{ chat.name }}</h2>
          <p class="text-sm text-gray-500">
            {{ chat.lastMessage.user }}: {{ chat.lastMessage.content }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex-grow"></div>
    <button
      class="bg-green-500 text-white p-2 rounded-lg w-full hover:bg-green-600"
      @click="createNewGroupChat"
    >
      Create new group chat
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return {
        name: 'John Doe',
        token: 'dummy_token',
      };
    },
  },
  data() {
    return {
      chats: [
        {
          id: 1,
          name: 'Group Chat 1',
          onlinePercentage: 0.8,
          lastMessage: {
            user: 'Alice',
            content: 'Hello, everyone!',
          },
        },
        {
          id: 2,
          name: 'Group Chat 2',
          onlinePercentage: 0.6,
          lastMessage: {
            user: 'Bob',
            content: 'How are you all doing?',
          },
        },
      ],
      selectedChat: null,
    };
  },
  methods: {
  getGradientBorder(onlinePercentage) {
    return `border-2 bg-gradient-to-r from-green-500 via-green-${Math.floor(
      onlinePercentage * 10
    )}00 to-green-100`;
  },
  async fetchChats() {
    try {
      // Fake data for chats
      this.chats = [
        {
          id: 1,
          name: 'Group Chat 1',
          onlinePercentage: 0.8,
          lastMessage: {
            user: 'Alice',
            content: 'Hello, everyone!',
          },
        },
        {
          id: 2,
          name: 'Group Chat 2',
          onlinePercentage: 0.6,
          lastMessage: {
            user: 'Bob',
            content: 'How are you all doing?',
          },
        },
      ];
    } catch (error) {
      console.error(error);
    }
  },
  selectChat(chat) {
    this.selectedChat = chat;
    this.$emit("chatSelected", chat);
  },
  async createNewGroupChat() {
    try {
      // Fake data for new group chat
      const newGroupChat = {
        id: 3,
        name: 'New Group Chat',
        onlinePercentage: 0.5,
        lastMessage: {
          user: 'John',
          content: 'Welcome to the new group chat!',
        },
      };

      this.chats.unshift(newGroupChat);
    } catch (error) {
      console.error(error);
    }
  },
},
  mounted() {
    this.fetchChats();
  },
};
</script>