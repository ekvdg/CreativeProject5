<template>
<div>
  <div v-for="item in items" v-bind:key="item._id">
    <div id class="container menu padding-32 white">

      <h1><b>{{item.name}}</b>
        <span class="right tag dark-grey round">${{item.price * item.quantity}}</span>
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
  props: {
    items: Array
  },
  methods: {
    addToQuantity(id) {
      this.$emit('addOne', id);
    },
    removeFromQuantity(id) {
      this.$emit('removeOne', id);
    },
    deleteItem(id) {
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
  padding-right: 8px;
  text-align: center
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

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block
}

.container:after,
.container:before,
.panel:after,
.panel:before,
.row:after,
.row:before,
.row-padding:after,
.row-padding:before,
.cell-row:before,
.cell-row:after,
.clear:after,
.clear:before,
.bar:before,
.bar:after {
  content: "";
  display: table;
  clear: both
}

.display-container:hover .display-hover {
  display: block
}

.display-container:hover span.display-hover {
  display: inline-block
}

.right {
  float: right !important
}

.badge,
.tag {
  background-color: #000;
  color: #fff;
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  text-align: center
}

.dark-grey {
  color: #fff !important;
  background-color: #808080 !important
}

.round {
  border-radius: 4px
}

.text-grey {
  color: #757575 !important
}
</style>
