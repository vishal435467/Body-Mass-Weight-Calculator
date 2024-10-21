const form = document.querySelector('form');

// this use case give you empty value
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const message = document.querySelector('#msg');
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please enter a valid height';
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight';
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi} </span>`;
        if(bmi<18.6){
            msg.innerHTML = 'You are in Under Weight range';
        }
        if(bmi>18.6 && bmi < 24.9){
            msg.innerHTML = 'You are in Normal range';
        }
        if(bmi>24.9){
            msg.innerHTML = 'You are in Overweight range';
        }

    }
})
    
