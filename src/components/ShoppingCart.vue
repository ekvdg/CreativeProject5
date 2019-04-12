<template>
<div>
  <div v-for="item in items" v-bind:key="item._id">
    <div id class="container menu padding-32 white">

      <h1><b>{{item.name}}</b>
        <span class="right tag dark-grey round">${{Math.round((item.price * item.quantity) * 100) / 100}}</span>
        <br><br>
        <span class="right">
          <button class="smallButton" v-on:click="addToQuantity(item.id)"><i class="fa fa-arrow-circle-up"></i></button>
          <button class="smallButton" v-on:click="removeFromQuantity(item.id)"><i class="fa fa-arrow-circle-down"></i></button>
          <button class="smallButton" v-on:click="deleteItem(item.id)"><i class="fa fa-trash"></i></button>
        </span>
      </h1>
      <p class="text-grey">Quantity: {{item.quantity}}</p>
    </div>
    <br>
  </div>


  <br>
  <div class="container menu padding-32 white">
    <h1><b>Total Price: ${{totalPrice}}</b></h1>
  </div>
  <br><br><br><br>
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
    },
    totalPrice() {
      return this.$store.state.totalPrice;
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
.text-grey,
.hover-text-grey:hover,
.text-gray,
.hover-text-gray:hover {
  color: #757575 !important
}

.round,
.round-medium {
  border-radius: 4px
}

.badge,
.tag {
  background-color: #000;
  color: #fff;
  display: inline-block;
  padding-left: 8px;
  margin-left: 36px;
  padding-right: 8px;
  text-align: center
}

.smallButton {
  margin-left: 4px;
  margin-right: 4px;
}

article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
  display: block
}

.container, .panel {
  padding: 0.01em 16px;
}

.dark-grey,
.hover-dark-grey:hover,
.dark-gray,
.hover-dark-gray:hover {
  color: #fff !important;
  background-color: #808080 !important
}

.right {
  float: right !important
}

.padding-32 {
  padding-top: 32px !important;
  padding-bottom: 32px !important
}

.white,
.hover-white:hover {
  color: #000 !important;
  background-color: #fff !important
}

.text-white,
.hover-text-white:hover {
  color: #fff !important
}

.border-white,
.hover-border-white:hover {
  border-color: #fff !important
}

.right {
  float: right !important
}

</style>
