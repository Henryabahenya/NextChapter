/*==================================================
JOIN FORM TEMP HANDLER
==================================================*/


const joinForm = document.querySelector(

    ".aijamii-form"

);



if(joinForm){


    joinForm.addEventListener(

        "submit",

        (e)=>{


            e.preventDefault();



            alert(

                "Thank you for joining AIJAMII SAFARI! We will connect with you soon."

            );



            joinForm.reset();



        }


    );


}