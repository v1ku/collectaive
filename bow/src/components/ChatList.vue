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
      return this.$store.state.user;
    },
  },
  data() {
    return {
      chats: [],
      selectedChat: null,
    };
  },
  created() {
    this.fetchChats();
  },
  methods: {
    getGradientBorder(onlinePercentage) {
      return `border-2 bg-gradient-to-r from-green-500 via-green-${onlinePercentage * 10}00 to-green-100`;
    },
    async fetchChats() {
      try {
        const response = await fetch("https://your-api-url-here.com/api/chats", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.currentUser.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch chats.");
        }

        this.chats = await response.json();
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
            const response = await fetch("https://your-api-url-here.com/api/create_group_chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.currentUser.token}`,
            },
            body: JSON.stringify({
                name: "New Group Chat", // Replace this with the actual group chat name
            }),
            });

            if (!response.ok) {
            throw new Error("Failed to create a new group chat.");
            }

            const newGroupChat = await response.json();
            this.chats.unshift(newGroupChat);
        } catch (error) {
            console.error(error);
        }
        },
  },
};
</script>

  