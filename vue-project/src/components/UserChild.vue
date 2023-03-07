<template>
  <div>
    <h2>User Child component</h2>
    <button v-on:click="getUserChildName(UserChildName)">
      Send User child name to parent
    </button>
  </div>
</template>
<script>
export default {
  name: "User Child",
  data() {
    return {
      UserChildName: "fadwa abdo",
    };
  },
  props: {
    getUserChildName: Function,
  },
};
</script>