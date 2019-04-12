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
        await context.commit('setUser', response.data);
        await context.dispatch('getTotalPrice');
        await context.dispatch('getTotalAmount');
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        await context.commit('setUser', null);
        context.commit('setPrice', 0);
        context.commit('setAmount', 0);
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
        await context.dispatch('getTotalPrice');
        await context.dispatch('getTotalAmount');
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async updateItem(context, data) {
      try {
        let response = await axios.put("/api/items/", data);
        if(response.data == false) {
          await axios.delete("/api/items/" + data.id)
        }
        await context.dispatch('getTotalPrice');
        await context.dispatch('getTotalAmount');
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async deleteItem(context, id) {
      try {
        let data = await axios.get("/api/items/" + id);
        await axios.delete("/api/items/" + id);
        if(data != null) {
          await context.dispatch('getTotalPrice');
          await context.dispatch('getTotalAmount');
        }
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
    async getTotalPrice(context) {
      await context.dispatch('getItems');
      if(context.state.items.length === 0) {
        context.commit('setPrice', 0);
      } else {
        let totalPrice = context.state.items.reduce((total,item) => {return total += (item.quantity * item.price)}, 0);
        context.commit('setPrice', Math.round(totalPrice * 100) / 100);
      }
    },
    async getTotalAmount(context) {
      await context.dispatch('getItems');
      if(context.state.items.length === 0) {
        context.commit('setAmount', 0);
      } else {
        let totalAmount = context.state.items.reduce((total,item) => {return total += item.quantity}, 0);
        context.commit('setAmount', totalAmount);
      }
    },
  }
})
