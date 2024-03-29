const { createApp } = Vue;

createApp({
    data() {
      return {
        // Creo un array vuoto
        emailList: [],
        visibility: false,
      }
      
    },

    created(){

        // Creo un ciclo
        for(let i = 0; i < 10; i++){
            // Trapite l'API faccio in modo che vengano generate 10 email casuali
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
    
                console.log(res.data.response);
                let newEmail = res.data.response;
                // Inserisco ogni email all'interno dell'array
                this.emailList.push(newEmail);

                if(this.emailList.length == 10){

                    this.visibility = true;

                }
                
            });  
        }
        console.log(this.emailList);

    }
  }).mount('#app')