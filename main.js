const convertBtn = document.querySelector('.convert');
const tempInput = document.querySelector('.num-input');
const unit1= document.querySelector('.from');
const unit2 = document.querySelector('.to');
const resultMsg = document.querySelector('.outcome-txt')

    //check for btn logic

function logic4Btn(){
    if(unit1 && unit2 && tempInput){
        convertBtn.disabled = false;
    }else{
        convertBtn.disabled = true;
    }
}



//CONVERSION FORMULAS
const C = 'Celcius';
const F = 'Farenheit';
const K = 'Kelvin';


function convert(from, to, tempValue){

    

    if(from === to){
        return tempValue;
    };

    //CONVERT CELCIUS

    if(from === C){
        if(to === F){
            return (tempValue * 1.8) + 32
        }else if(to === K){
                return tempValue + 273.15
            }
    };

    //CONVERT FARENHEIT

    if(from === F){
        if(to === C){
            return (tempValue - 32) * 5/9
        }else if(to === K){
               return (tempValue - 32) * 5/9 +273.15
            }
    };

    //CONVERT KELIVIN

    if(from === K){
        if(to === C){
            return tempValue - 273.15
        }else if(to === F){
                return (tempValue - 273.15) * 1.8 + 32
            }
    };
    return null;
}

//FUNCTION TO DISPLAY MSG

function display(results, tempValue, from, to){

    if(results !== null){
        resultMsg.textContent = `The temp ${tempValue} in ${from}, ${to} is ${results}`
    }else{
        resultMsg.textContent = `ERROR MISSING CONVERSION INPUT`
    }




}





convertBtn.addEventListener('click', ()=> {
    const from = unit1.value;
    const to = unit2.value;
    temperature = parseFloat(tempInput.value)

    if(unit1.value && unit2.value ) {   
        console.log('same')
    }

    if (!isNaN(temperature)) {
        const results = convert(from, to, temperature);
        display(results, temperature, from, to);
    } else {
        resultMsg.textContent = 'Please enter a valid number for the temperature.';
    }

});






