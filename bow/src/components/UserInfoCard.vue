<template>
  <div class="user-info-card">
    <h2>{{ currentUser.name }}</h2>
    <p>{{ currentUser.email }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
