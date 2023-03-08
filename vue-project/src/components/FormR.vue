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
      <h1>Country : </h1>
      <select v-model="form.country">
        <option>Sudan</option>
        <option>USA</option>
      </select>
      <br /><br />
      <h1>Gender :</h1>
      <label>Female: </label>
      <input type="radio" name="gender" v-model="form.gender" />
      <br /><br />
      <label>Male : </label>
      <input type="radio" name="gender" v-model="form.gender" />
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