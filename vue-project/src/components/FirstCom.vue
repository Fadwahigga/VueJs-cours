<template>
  <div>
    <!-- <h1>New Component {{ "fadwaaaaaaaaaaaa".length }}</h1>
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
    <button type="button" v-on:click="GetData()">Get Data</button> -->
    <!------------------------------------------------------------------------->
    <!-- <h1>Get checkbox value</h1>
    <h1>Tecnology</h1>
    <label for="java">java</label>
    <input type="checkbox" value="java" id="java" v-model="technology" />
    <label for="python">python</label>
    <input type="checkbox" value="python" id="python" v-model="technology" />
    <label for="dart">dart</label>
    <input type="checkbox" value="dart" id="dart" v-model="technology" /> -->
    <!------------------------------------------------------------------------->
    <!-- <h1>Radio</h1>
    <label for="dart">dart</label>
    <input type="radio" value="dart" id="dart" v-model="technology" />
    <label for="java">java</label>
    <input type="radio" value="java" id="java" v-model="technology" />
    <label for="python">python</label>
    <input type="radio" value="python" id="python" v-model="technology" />
    <h1>Technology:{{ technology }}</h1> -->
    <!------------------------------------------------------------------------->
    <!-- <h1>If-else condition</h1>
    <h1 v-if="show">Condition in Vue Js</h1>
    <button v-on:click="show = !show">Show And Hide</button> -->
    <!------------------------------------------------------------------------->
    <!-- <h1>For loop</h1>
    <ul>
      <li v-for="item in technology" :key="item">{{ item }}</li>
    </ul> -->
    <!------------------------------------------------------------------------->
    <!-- <h1>Pass data to child component</h1>
    <child :name="name" :data="user" :getPassData="getPassData"></child> -->
    <!------------------------------------------------------------------------->
    <!-- <h1>Reuse component</h1>
    <users /> -->
    <!------------------------------------------------------------------------->
    <h1>CSS binding</h1>
    <h1 :class="{green :CSSbinding }">Hello from CSS style</h1>
    <button v-on:click="CSSbinding=!CSSbinding">CSS binding</button>
    <!------------------------------------------------------------------------->
    <!------------------------------------------------------------------------->
    <!------------------------------------------------------------------------->
    <!------------------------------------------------------------------------->
    <!------------------------------------------------------------------------->
  </div>
</template>
<script>
import child from "./child.vue";
import users from "./users.vue";
export default {
  components: {
    // child,
    users,
  },
  data() {
    return {
      // name: "fadwa",
      // user:{
      //   name:"fadwa ali",
      //   email:"fadwa.ali20@gmail.com"
      // }
      // count: 0,
      // data: 100,
      // email: null,
      // password: null,
      // technology: [],
      // show: true,
      // technology: ["java", "python", "dart", "flutter", "c++"],
      CSSbinding:true,
    };
  },

  methods: {
    // getName(name) {
    //   return name;
    // },
    // eventFun() {
    //   alert("Event Called");
    // },
    // icreCount() {
    //   this.count = this.count + 1;
    // },
    // GetData() {
    //   console.warn("values:", this.email, this.password);
    // },
    // getPassData(){
    //   alert("pass function")
    // }
  },
};
</script>
<style scoped>
.green {
  background-color: royalblue;
  width: 200;
  padding: 10;
  color: white;
}
</style>
