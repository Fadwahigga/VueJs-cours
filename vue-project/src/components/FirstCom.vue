<template>
  <div>
    <h1>New Component {{ "fadwaaaaaaaaaaaa".length }}</h1>
    <h1>Name {{ getName("fadwa ali") }}</h1>
    <button v-on:click="eventFun()">Click</button> 
     <button v-on:click="icreCount()">count</button>
     <h1>{{ count }}</h1>
  </div>
</template>
<script>
export default {
  data(){
     return {count:0}
  },

  methods: {
    getName(name) {
      return name;
    },
    eventFun() {
      alert("Event Called");
    },
    icreCount(){
        this.count=this.count+1

    }
  },
};
</script>
