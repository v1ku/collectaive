<template>
  <v-container class="login">
    <h1>Login</h1>
    <v-form>
      <v-text-field label="Email" v-model="email" type="email" />
      <v-text-field label="Password" v-model="password" type="password" />
      <v-btn color="primary" @click="submit">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      // Handle login here
    },
  },
};
</script>
