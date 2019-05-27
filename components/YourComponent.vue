<template>
  <div>
    <!-- component goes here -->
  </div>
</template>

<script lang="ts">
import { Component } from 'vue'

type YourComponent = Component & {
  $externalJsLib: any // | or some type def
}

const YourComponent:YourComponent = {
  name: 'YourComponent',
  $externalJsLib: null,

  mounted() {
    if (!this.$externalJsLib) return
    const externalJsLib = this.$externalJsLib // localize this if needed
    console.log(externalJsLib) // do something with this var
  },
  methods: {
    // draw amazing stuff here with this.s
  }
}
export default YourComponent
</script>

<style scoped>
  #your-component {
    display: block;
    width: 1000px;
    height: 800px;
    border: 1px solid purple;
  }
</style>
