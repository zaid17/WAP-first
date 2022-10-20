const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });


   function getNumber(total){
    readline.question('enter a number? ', val => {
            if(val==="stop"){
             
                console.log(total);
                return;
            }

            total+=parseInt(val);
            getNumber(total);
       });
  
   }

   getNumber(0);