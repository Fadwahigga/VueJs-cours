<template>
  <div>
    <p>{{ form }}</p>
    <ul>
      <li v-for="item in error" v-bind:key="item">{{ item }} is valid</li>
    </ul>
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
      <h1>Country :</h1>
      <select v-model="form.country">
        <option>Sudan</option>
        <option>USA</option>
      </select>
      <br /><br />
      <h1>Gender :</h1>
      <label>Female: </label>
      <input type="radio" name="gender" value="female" v-model="form.gender" />
      <br /><br />
      <label>Male : </label>
      <input type="radio" name="gender" value="male" v-model="form.gender" />
      <br /><br />
      <h1>Tecnology :</h1>
      <label>Dart: </label>
      <input type="checkbox" value="Dart" v-model="form.technology" />
      <br /><br />
      <label>Java : </label>
      <input type="checkbox" value="Java" v-model="form.technology" />
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
      error: [],
    };
  },
  methods: {
    Login() {
      console.warn(this.form);
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].lenght === 0) {
          this.error.push(item);
        }
      }
      if (this.error.length === 0) {
        alert("Data Has Been Submitted");
      }
      console.warn(this.error);
    },
  },
};
</script>