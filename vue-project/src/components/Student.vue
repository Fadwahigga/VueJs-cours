<template >
  <h1>Student Name is: {{ name }}</h1>
</template>
<script>
export default {
  name: "Student",
  props: {
    name: String,
  },
};
</script>