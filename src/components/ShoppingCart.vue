<template>
  <div>
    <div v-for="item in items" v-bind:key="item._id">
      <div id class="container menu padding-32 white">

          <h1><b>{{item.name}}</b>
            <span class="right tag dark-grey round">${{Math.round((item.price * item.quantity) * 100) / 100}}</span>
            <br><br>
            <span class="right">
              <button v-on:click="addToQuantity(item.id)"><i class="fa fa-arrow-circle-up"></i></button>
              <button v-on:click="removeFromQuantity(item.id)"><i class="fa fa-arrow-circle-down"></i></button>
              <button v-on:click="deleteItem(item.id)"><i class="fa fa-trash"></i></button>
            </span>
          </h1>
          <p class="text-grey">Quantity: {{item.quantity}}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'shoppingcart',
  async created() {
    await this.$store.dispatch("getItems");
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  methods: {
    async addToQuantity(id) {
      this.$emit('addOne', id);
    },
    async removeFromQuantity(id) {
      this.$emit('removeOne', id);
    },
    async deleteItem(id) {
      this.$emit('deleteItem', id);
    }
  }
}
</script>

<style scoped>
.right {
  float: right !important
}

.badge, .tag {
  background-color: #000;
  color: #fff;
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  text-align: center
}

.dark-grey {
  color: #fff !important;
  background-color:  #808080 !important
}

.round {
  border-radius: 4px
}

.text-grey {
  color: #757575 !important
}
</style>
