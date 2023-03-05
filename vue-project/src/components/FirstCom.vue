<template>
  <div>
    <h1>New Component {{ "fadwaaaaaaaaaaaa".length }}</h1>
    <h1>Name {{ getName("fadwa ali") }}</h1>
    <button v-on:click="eventFun()">Click</button>
    <button v-on:click="icreCount()">count</button>
    <h1>{{ count }}</h1>
    <input type="text" v-model="data" />
    <h1>{{ data }}</h1>
    <br /><br />
    <input type="text" placeholder="Enter email" v-model="email" />
    <br /><br />
    <input type="text" placeholder="Password" v-model="password"/>
    <br /><br />
    <button type="button" v-on:click="GetData()">Get Data</button>
    <h1>Get checkbox value</h1>
    <h1>Tecnology</h1>
    <label for="java">java</label>
    <input type="checkbox" value="java" id="java">
    <label for="python">python</label>
    <input type="checkbox" value="python" id="python">
    <label for="dart">dart</label>
    <input type="checkbox" value="dart" id="dart">

  </div>
</template>
<script>
export default {
  data() {
    return { count: 0, data: 100, email: null, password: null };
  },

  methods: {
    getName(name) {
      return name;
    },
    eventFun() {
      alert("Event Called");
    },
    icreCount() {
      this.count = this.count + 1;
    },
    GetData() { console.warn("values:",this.email,this.password)},
  },
};
</script>
