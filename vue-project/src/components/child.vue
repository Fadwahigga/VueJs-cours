<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ data.email }}</h1>
    <button v-on:click="getPassData()">Pass function to child component</button>
  </div>
</template>
<script>
export default {
  name: "child",
  props: { name: String, data: Object ,getPassData:Function},
};
</script>