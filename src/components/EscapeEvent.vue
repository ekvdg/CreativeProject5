<template>
  <div></div>
</template>

<script>
export default {
  name: 'EscapeEvent',
  created() {
    window.addEventListener('keyup', this.handler);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handler);
  },
  methods: {
    handler(event) {
      if (event.keyCode == 27)
      this.$emit('escape');
    }
  }
}
</script>

<style scoped>
div {
  display: none;
}
</style>
