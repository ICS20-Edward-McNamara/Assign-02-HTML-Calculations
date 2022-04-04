
  
'use strict'
/**
 * This function calculates tax based on your hours worked and hourly salary
 */
function calculate () {
  // input
  let height = parseFloat(document.getElementById('height').value)
  let weight = parseFloat(document.getElementById('weight').value) 

  // process
  const CONVERSION_RATE = 0.10
  let heightm = height * CONVERSION_RATE
  let bmi = weight / heightm ** 2

  

  // Dividing as per the bmi conditions
    //     if (bmi < 18.6) result.innerHTML =
    //         `Under Weight : <span>${bmi}</span>`;
  
    //     else if (bmi >= 18.6 && bmi < 24.9) 
    //         result.innerHTML = 
    //             `Normal : <span>${bmi}</span>`;
  
    //     else result.innerHTML =
    //         `Over Weight : <span>${bmi}</span>`;
    // }
        
 // output
  document.getElementById('bmi').innerHTML = 'The governement will take' + ' $' + bmi
   
 