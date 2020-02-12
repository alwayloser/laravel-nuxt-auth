<template>
  <div class="container">
    <v-text-field text label="email" v-model="user.username"></v-text-field>
    <v-text-field text label="password" v-model="user.password"></v-text-field>
    <v-btn @click="passwordGrantLogin">Login</v-btn>
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  data() {
    return {
      user: {
        username: 'admin@admin.com',
        password: '123'
      }
    }
  },
  mounted() {},
  methods: {
    async passwordGrantLogin() {
      await this.$auth.loginWith('password_grant', {
        data: {
          grant_type: 'password',
          client_id: process.env.GRANT_ID,
          client_secret: process.env.GRANT_PASSWORD,
          scope: '*',
          username: this.user.username,
          password: this.user.password
        }
      })
    }
  }
}
</script>