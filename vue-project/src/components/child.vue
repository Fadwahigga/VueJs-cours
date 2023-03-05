<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ data.email }}</h1>
  </div>
</template>
<script>
export default {
  name: "child",
  props: { name: String, data: Object },
};
</script>