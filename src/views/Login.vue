<template>
  <div>
    <h1>Login to your account</h1>
    <form @submit.prevent="login" class="pure-form pure-form-aligned">
      <fieldset>
        <p class="pure-form-message-inline">All fields are required.</p>

        <div class="pure-control-group">
          <label for="username">Username</label>
          <input v-model="username" type="text" placeholder="Username">
        </div>

        <div class="pure-control-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" placeholder="Password">
        </div>

        <div class="pure-controls">
          <button type="submit" class="pure-button pure-button-primary">Submit</button>
        </div>
      </fieldset>
    </form>
    <p v-if="error" class="error">{{error}}</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async login() {
      try {
        this.error = await this.$store.dispatch("login", {
          username: this.username,
          password: this.password
        });
        if (this.error === "")
        this.$router.push('mypage');
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
form {
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 4px;
  padding: 20px;
}

.pure-controls {
  display: flex;
}

.pure-controls button {
  margin-left: auto;
}
</style>
