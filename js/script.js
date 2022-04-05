// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates tax based on your hours worked and hourly salary
 */
function calculate () {
  // input
  let height = parseFloat(document.getElementById('height').value)
  let weight = parseFloat(document.getElementById('weight').value) 

  // process
  const CONVERSION_RATE = 0.01
  let heightConverted = height * CONVERSION_RATE
  let bmi = weight / heightConverted **2


   // //Dividing as per the bmi conditions
   //       if (bmi < 18.6) result.innerHTML =
   //          `Under Weight : <span>${bmi}</span>`;
  
   //       else if (bmi >= 18.6 && bmi < 24.9) 
   //      result.innerHTML = 
   //              `Normal : <span>${bmi}</span>`;
  
   //       else result.innerHTML =
   //        `Over Weight : <span>${bmi}</span>`;
   //   }

  // output
  document.getElementById('bmi').innerHTML = 'Your BMI is ' + bmi.toFixed(2)
  
}