// $(document).ready(function(){
//     $("#submit-form").validate({
//         rules:{
//             name:{
//                 required:true,

//             },
//             email:{
//                 required:true,
//                 email:true,

//             },
//             subject:{
//                 required:true,
//                 minlength:4
//             }
//         }
//     })
// })


const form=document.getElementById("submit-form");
const name=document.getElementById("name");
const email=document.getElementById("email");
const subject=document.getElementById("subject");
const message=document.getElementById("message");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    username();
    emailValue();
    subjectValue();
    messageValue();
});

// function checkInputs(){
//     const namevalue=name.value.trim();
//     const emailvalue=email.value.trim();
//     const subjectvalue=subject.value.trim();
    

//     if(namevalue===''){
//         setErrorFor(name,'name cannot be blank');
//     }else if(namevalue.length<4){
//         setErrorFor(name,'min 5 characters');
//     }else{
//         setSuccessFor(name)
//     }

//     if(emailvalue===''){
//         setErrorFor(email,"Email cannot be blank");
//     }else{
//         setSuccessFor(email);
//     }

//     if(subjectvalue==''){
//         setErrorFor(subject,'Subject Cannot be blank');
//     }else{
//         setSuccessFor(subject);
//     }
// }

function username(){
    const nameValue=name.value.trim();

    if(nameValue===""){
        setErrorFor(name,"Name cannot be blank")
    }else if(nameValue.length<3){
        setErrorFor(name,"Minimum 3 characters")
    }else{
        setSuccessFor(name);
    }
}


function emailValue(){
    const emailValue=email.value.trim();
    const pattern= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if(emailValue===""){
        setErrorFor(email,"email cannot be blank")
    }else if(emailValue.match(pattern)){
        setSuccessFor(email)
    }

    else{
        setErrorFor(email,"Enter valid email address");
    }
}


function subjectValue(){
    const subjectValue=subject.value.trim();

    if(subjectValue===""){
        setErrorFor(subject,"subject cannot be blank")
    }else{
        setSuccessFor(subject);
    }
}


function messageValue(){
    const messageValue=message.value.trim();

    if(messageValue===""){
        setErrorFor(message,"message cannot be blank")
    }else{
        setSuccessFor(message);
    }
}


function setErrorFor(input,message){
    const formGroup=input.parentElement;
    const small=formGroup.querySelector('small')

    small.innerText=message;

    formGroup.className="form-group error"
}



function setSuccessFor(input){
    const formGroup=input.parentElement;
    formGroup.className="form-group success"
}


$(document).ready(function(){
    $("#name").focusout(function(){
        username();
    }),
    $("#email").focusout(function(){
        emailValue();
    })

    $("#subject").focusout(function(){
        subjectValue();
    })

    $("#message").focusout(function(){
        messageValue();
    })
})