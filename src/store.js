import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    items: [],
    totalPrice: 0,
    totalAmount: 0,
    productList: [{
      id: '0',
      name: 'Atom Shirt',
      price: 19.99,
      quantity: 0
    }, {
      id: '1',
      name: 'Git Shirt',
      price: 24.99,
      quantity: 0
    }, {
      id: '2',
      name: 'Function Shirt',
      price: 14.99,
      quantity: 0
    }, {
      id: '3',
      name: 'Binary Shirt',
      price: 24.99,
      quantity: 0
    }, {
      id: '4',
      name: 'Algebra Shirt',
      price: 14.99,
      quantity: 0
    }, {
      id: '5',
      name: 'Programming Languages Shirt',
      price: 19.99,
      quantity: 0
    }, {
      id: '6',
      name: 'HTML Shirt',
      price: 14.99,
      quantity: 0
    }, {
      id: '7',
      name: 'CSS Shirt',
      price: 19.99,
      quantity: 0
    }, {
      id: '8',
      name: 'Pi Shirt',
      price: 14.99,
      quantity: 0
    }]
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setItems(state, items) {
      state.items = items;
    },
    setPrice(state, price) {
      state.totalPrice = price;
    },
    setAmount(state, amount) {
      state.totalAmount = amount;
    }
  },
  actions: {
    async register(context, data) {
      try {
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async addItem(context, data) {
      try {
        await axios.post("/api/items", data);
        increasePrice(data);
        increaseAmount(data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async deleteItem(context, id) {
      try {
        await axios.delete("/api/items" + id);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getItem(context, id) {
      console.log("MANGO");
      try {
        return productList[id];
      } catch (error) {
        return null;
      }
    },
    async getItems(context) {
      try {
        let response = await axios.get("/api/items");
        context.commit('setItems', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    increasePrice(data) {
      let price = (data.price * data.quantity);
      price = this.$store.state.totalPrice + price;
      this.$store.commit('setPrice', price);
    },
    increaseAmount(data) {
      let amount = data.quantity;
      amount = this.$store.state.totalAmount + amount;
      this.$store.commit('setAmount', amount);
    },
  }
})