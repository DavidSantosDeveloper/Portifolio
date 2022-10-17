const init=()=>{
    const validateEmail=(event)=>{
        const input=event.currentTarget;
        const regex=/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
        const emailTest=regex.test(input.value);

        if(!emailTest){
            inputButtonSubmit.setAttribute('disabled','disabled');
            input.nextElementSibling.classList.add('error');
        }
        else{
            inputButtonSubmit.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');

        }

    }

    const validatePassword=(event)=>{
        const input=event.currentTarget;

        if(input.value.length<8){
            inputButtonSubmit.setAttribute('disabled','disabled');
            input.nextElementSibling.classList.add('error');
        }
        else{
            inputButtonSubmit.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }   
    }


    const inputEmail=document.querySelector('input[type="email"]');
    const inputPassword=document.querySelector('input[type="Password"]');
    const inputButtonSubmit=document.querySelector('.login_submit'); 
    inputEmail.addEventListener('input',validateEmail);
    inputPassword.addEventListener('input',validatePassword);
    /*
         
    console.log(inputEmail,inputPassword,inputButtonSubmit);
    if(inputButtonSubmit){
        inputButtonSubmit.addEventListener('click',(event)=>{
            event.preventDefault();    

            fetch('https://reqres.in/api/login',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'    
                },
                body:JSON.stringify({
                    email:inputEmail.value,
                    password:inputPassword.value,   
                })                      
            })              
            .then((response)=>{
                    return response.json(); 
            })
            .then((data)=>{
                console.log(data);
            })  
        } ) 
    }
    */
}

window.onload=init;