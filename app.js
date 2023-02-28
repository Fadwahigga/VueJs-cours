new Vue ({
    el:'#app',
    data:{
    firstname: 'Fadwa',
    lastname:'Ali',
    age:24,
    salary:3000,
    },
    methods:{
        myName(){
            return "My Name Is Fadwa"
        },
        mySalary(){
            return this.salary
        },
        putYourName(name){
            return name
        }
    }
})