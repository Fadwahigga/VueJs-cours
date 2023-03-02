<template>
<div><h1>New Component {{ "fadwaaaaaaaaaaaa".length }}</h1>
<h1>Name {{ getName("fadwa ali") }}</h1><button v-on:click="eventFun()">Click</button></div>

</template>
<script>
export default {
    name : "Newwww",
    methods: {
        getName(name){
            return name
        },
        eventFun(){
            alert("Event Called")
        }
    }
}
</script>
