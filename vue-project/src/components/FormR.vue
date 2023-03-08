<template>
  <div>
    <p>{{ form }}</p>
    <h1>Form component</h1>
    <form>
      <label>Name : </label>
      <input type="text" placeholder="Enter Email" v-model="form.email" />

      <br /><br />

      <label>Password : </label>
      <input
        type="password"
        placeholder="Enter Password"
        v-model="form.password"
      />
      <br /><br />
      <select v-model="form.country">
        <option>Sudan</option>
        <option>USA</option>
      </select>
      <br /><br />
      <label>Name : </label>
      <input type="text" placeholder="Enter Email" v-model="form.email" />

      <br /><br />

      <label>Password : </label>
      <input
        type="password"
        placeholder="Enter Password"
        v-model="form.password"
      />
      <br /><br />
      <button type="button" v-on:click="Login">LogIn</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        country: "",
        gender: "",
        technology: [],
      },
    };
  },
  methods: {
    Login() {
      console.warn(this.form);
    },
  },
};
</script>