
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello",
      emailApi: "https://flynn.boolean.careers/exercises/api/random/mail",
      emailList: [],
    };
  },
  methods: {
    getTenEmails(){
      for(let i = 0; i < 10; i++) {
        axios
        .get(this.emailApi)
        .then((result)=> {
            this.email = result.data.response;
            this.emailList.push(this.email);
        });
      }
    },
    
  },
  mounted() {
    this.getTenEmails();
    console.log(this.emailList);
  },
}).mount("#app");


