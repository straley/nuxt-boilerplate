<template>
  <div>
    <h1>Hello World</h1>
    <!-- external component goes here -->
  </div>
</template>

<script lang="ts">
import { Component } from 'vue'

// setup a type definition for your component
// type YourComponent = Component & {
//   $externalJsLib: any // | or some type def
// }

// use your type definition instead of Component
// const YourComponent:YourComponent = {

const YourComponent:Component = {
  name: 'YourComponent',

  // if you're using an external lib, use a $-variable to track it
  // $externalJsLib: null,

  // mounted() {
  //   if you're using an external lib, get it's refrence here
  //   if (!this.$externalJsLib) return
  //   const externalJsLib = this.$externalJsLib // localize this if needed
  // },
  methods: {
    // draw amazing stuff here with this.
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
