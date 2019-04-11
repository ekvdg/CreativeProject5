<template>
  <div>
    <div class="row-padding">
      <div class="third display-container margin-bottom">
        <img src="images/shirt1.jpg" style="width:100%">
        <div class="display-upper-middle display-hover">
          <button v-on:click="addItem(0)" class="button black extra_padding">Add to cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="display-lower-middle display-hover">
          <button v-on:click="deleteItem(0)" class="button black margin-top">Delete from cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="container white">
          <p><b>Atom Shirt</b></p>
          <p>$19.99</p>
        </div>
      </div>

      <div class="third display-container margin-bottom">
        <img src="images/shirt2.png" style="width:100%">
        <div class="display-upper-middle display-hover">
          <button v-on:click="addItem(1)" class="button black extra_padding">Add to cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="display-lower-middle display-hover">
          <button v-on:click="deleteItem(1)" class="button black margin-top">Delete from cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="container white">
          <p><b>Git Shirt</b></p>
          <p>$24.99</p>
        </div>
      </div>

      <div class="third display-container margin-bottom">
        <img src="images/shirt3.jpg" style="width:100%">
        <div class="display-upper-middle display-hover">
          <button v-on:click="addItem(2)" class="button black extra_padding">Add to cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="display-lower-middle display-hover">
          <button v-on:click="deleteItem(2)" class="button black margin-top">Delete from cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="container white">
          <p><b>Function shirt</b></p>
          <p>$14.99</p>
        </div>
      </div>
    </div>

    <div class="row-padding">
      <div class="third display-container margin-bottom">
        <img src="images/shirt4.png" style="width:100%">
        <div class="display-upper-middle display-hover">
          <button v-on:click="addItem(3)" class="button black extra_padding">Add to cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="display-lower-middle display-hover">
          <button v-on:click="deleteItem(3)" class="button black margin-top">Delete from cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="container white">
          <p><b>Binary shirt</b></p>
          <p>$29.99</p>
        </div>
      </div>

      <div class="third display-container margin-bottom">
        <img src="images/shirt5.jpg" style="width:100%">
        <div class="display-upper-middle display-hover">
          <button v-on:click="addItem(4)" class="button black extra_padding">Add to cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="display-lower-middle display-hover">
          <button v-on:click="deleteItem(4)" class="button black margin-top">Delete from cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="container white">
          <p><b>Algebra Shirt</b></p>
          <p>$14.99</p>
        </div>
      </div>

      <div class="third display-container margin-bottom">
        <img src="images/shirt6.jpg" style="width:100%">
        <div class="display-upper-middle display-hover">
          <button v-on:click="addItem(5)" class="button black extra_padding">Add to cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="display-lower-middle display-hover">
          <button v-on:click="deleteItem(5)" class="button black margin-top">Delete from cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="container white">
          <p><b>Programming Languages Shirt</b></p>
          <p>$19.99</p>
        </div>
      </div>
    </div>

    <div class="row-padding">
      <div class="third display-container margin-bottom">
        <img src="images/shirt7.jpg" style="width:100%">
        <div class="display-upper-middle display-hover">
          <button v-on:click="addItem(6)" class="button black extra_padding">Add to cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="display-lower-middle display-hover">
          <button v-on:click="deleteItem(6)" class="button black margin-top">Delete from cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="container white">
          <p><b>HTML Shirt</b></p>
          <p>$14.99</p>
        </div>
      </div>

      <div class="third display-container margin-bottom">
        <img src="images/shirt8.jpg" style="width:100%">
        <div class="display-upper-middle display-hover">
          <button v-on:click="addItem(7)" class="button black extra_padding">Add to cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="display-lower-middle display-hover">
          <button v-on:click="deleteItem(7)" class="button black margin-top">Delete from cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="container white">
          <p><b>CSS Shirt</b></p>
          <p>$19.99</p>
        </div>
      </div>

      <div class="third display-container margin-bottom">
        <img src="images/shirt9.jpg" style="width:100%">
        <div class="display-upper-middle display-hover">
          <button v-on:click="addItem(8)" class="button black extra_padding">Add to cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="display-lower-middle display-hover">
          <button v-on:click="deleteItem(8)" class="button black margin-top">Delete from cart <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="container white">
          <p><b>Pi Shirt</b></p>
          <p>$14.99</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemGallery',
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    addItem(id) {
      this.$emit('addItem', id);
    }
  }
}
</script>

<style scoped>
.third {
  width: 33.33333%
}

.white, .hover-white:hover {
  color: #000 !important;
  background-color: #fff !important
}

.container, .panel {
  padding: 0.01em 16px
}

.extra_padding {
  padding-left: 36px;
  padding-right: 36px;
}

.display-container:hover .display-hover {
  display: block
}

.display-container:hover span.display-hover {
  display: inline-block
}

.tooltip, .display-container {
  position: relative
}

.margin-top {
  margin-top: 16px !important
}

.margin-bottom {
  margin-bottom: 16px !important
}

.display-hover {
  display: none
}

.display-upper-middle{
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%)
}

.display-lower-middle{
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%)
}

.display-middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%)
}

.button:hover {
  color: #000 !important;
  background-color: #fff !important
}

button, input, select, textarea {
  font: inherit;
  margin: 0
}

button, input {
  overflow: visible
}

button, select {
  text-transform: none
}

.btn, .button {
  border: none;
  display: inline-block;
  outline: 0;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap
}

.container:after, .container:before, .panel:after, .panel:before, .row:after, .row:before, .row-padding:after, .row-padding:before,
.cell-row:before, .cell-row:after, .clear:after, .clear:before, .bar:before, .bar:after {
  content: "";
  display: table;
  clear: both
}

.bar-block .dropdown-hover .button, .bar-block .dropdown-click .button {
  width: 100%;
  text-align: left;
  padding: 8px 16px
}

.row-padding, .row-padding > .half, .row-padding > .third, .row-padding > .twothird, .row-padding > .threequarter, .row-padding > .quarter, .row-padding > .col {
  padding: 0 32px
}

.bar .button {
  white-space: normal
}

.black, .hover-black:hover {
  color: #fff !important;
  background-color: #000 !important
}

</style>
