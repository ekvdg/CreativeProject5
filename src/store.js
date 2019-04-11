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
        context.dispatch('increasePrice', data);
        context.dispatch('increaseAmount', data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async updateItem(context, data) {
      try {
        await axios.put("/api/items/", data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async deleteItem(context, id) {
      try {
        await axios.delete("/api/items/" + id);
        let data = context.state.productList[id];
        context.dispatch('decreasePrice', data);
        context.dispatch('decreaseAmount', data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getItem(context, id) {
      try {
        return context.state.productList[id];
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
    increasePrice(context, data) {
      let price = (data.price * data.quantity);
      price = context.state.totalPrice + price;
      context.commit('setPrice', price);
    },
    increaseAmount(context, data) {
      let amount = data.quantity;
      amount = context.state.totalAmount + amount;
      context.commit('setAmount', amount);
    },
    decreasePrice(context, data) {
      let price = (data.price * data.quantity);
      price = context.state.totalPrice - price;
      if (price < 0) {
        context.commit('setPrice', 0);
      } else {
        context.commit('setPrice', price);
      }
    },
    decreaseAmount(context, data) {
      let amount = data.quantity;
      amount = context.state.totalAmount - amount;
      if (amount < 0) {
        context.commit('setAmount', 0);
      } else {
        context.commit('setAmount', amount);
      }
    }
  }
})
