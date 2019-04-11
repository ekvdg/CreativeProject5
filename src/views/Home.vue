<template>
<div>
  <div v-if="user">
    <escape-event @escape="escape"></escape-event>
    <item-gallery />
  </div>
  <div v-else>
    <p>If you would like to browse and add items to your cart, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>
import EscapeEvent from '@/components/EscapeEvent.vue'
import ItemGallery from '@/components/ItemGallery.vue'

export default {
  name: 'mypage',
  components: {
    EscapeEvent,
    ItemGallery
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  async created() {
    await this.$store.dispatch("getUser");
  },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
    escape() {
      this.show = false;
    },
  }
}
</script>

<style scoped>
.header {
  display: flex;
}

.header a {
  padding-left: 50px;
  color: #222;
  font-size: 2em;
}

.header svg {
  margin-top: 12px;
}
</style>
