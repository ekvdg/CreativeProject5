<template>
<<<<<<< HEAD
<div>
  <div v-if="user">
    <div class="header">
      <div>
        <h1>{{user.name}}</h1>
      </div>
      <div>
        <a href="#" @click="logout"><i class="fas fa-sign-out-alt"></i></a>
      </div>
=======
  <div>
    <div v-if="user">
      <div class="header">
        <div>
          <h1>{{user.name}}</h1>
        </div>
        <div>
          <a href="#" @click="logout"><i class="fas fa-sign-out-alt"></i></a>
        </div>
      </div>
      <escape-event @escape="escape"></escape-event>
      <shopping-cart @addOne="addToQuantity" @removeOne="removeFromQuantity" @deleteItem="deleteItem"></shopping-cart>
    </div>
    <div v-else>
      <p>If you would like to view or update your cart, please register for an account or login.</p>
      <router-link to="/register" class="pure-button">Register</router-link> or
      <router-link to="/login" class="pure-button">Login</router-link>
>>>>>>> 846916bf3030e30a9e00fb385e45f744afee891d
    </div>
    <escape-event @escape="escape"></escape-event>
    <shopping-cart :items="items"></shopping-cart>
  </div>
  <div v-else>
    <p>If you would like to upload photos, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>
import EscapeEvent from '@/components/EscapeEvent.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: 'cartpage',
  components: {
    EscapeEvent,
    ShoppingCart,
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
    items() {
      return this.$store.state.items;
    }
  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getItems");
  },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
    async addToQuantity(id) {
      this.$store.dispatch("updateItem", {
        quantity: 1,
        id: id
      });
      await this.$store.dispatch("getItems");
    },
    async removeFromQuantity(id) {
      this.$store.dispatch("updateItem", {
        quantity: -1,
        id: id
      });
      await this.$store.dispatch("getItems");
    },
    async deleteItem(id) {
      await this.$store.dispatch("deleteItem", id);
      await this.$store.dispatch("getItems");
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
