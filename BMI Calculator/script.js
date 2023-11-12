const result = document.querySelector('.result');
const form = document.querySelector('form');


form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)/100;
    const weight = parseInt(document.querySelector('#weight').value);

    if(height=='' || height<0 || isNaN(height)){
        result.innerHTML = `Please Enter a Valid Height`;
    }
    else if(weight=='' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please Enter a Valid Weight`;
    }
    else{
        const bmi =Math.round(weight/(height*height));
        let sometext = '';
        const p = document.createElement('p');
        if(bmi < 18.5){
            sometext+=`Seem like you are Under Weight, just gain some weight.`;
            p.style.color = 'red';
        }
        else if(bmi > 24.9){
            sometext+=`Seem like you are Over Weight, just loose some weight.`;
            p.style.color = 'red';
        }
        else{
            sometext+='Seems like You are perfectly fine. Good Job:)';
            p.style.color = 'green';
        }

        result.innerHTML = `Your BMI is ${bmi}.`;
        p.innerHTML = sometext;
        result.appendChild(p);
        result.style.margin = '30px 1px';
    }

    
    
    



})



