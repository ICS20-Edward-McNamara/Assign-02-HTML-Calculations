// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates your bmi based on your height in cm and weight in kg
 */
function calculate () {
  // Entering height and weight
  let height = parseFloat(document.getElementById('height').value)
  let weight = parseFloat(document.getElementById('weight').value) 

  // Calculating with bmi formula 
  const CONVERSION_RATE = 0.01
  let heightConverted = height * CONVERSION_RATE
  let bmi = weight / heightConverted **2
  let result;


   //Dividing as per the bmi conditions
  if (bmi < 18.6)
    result = "<br>You're Underweight!";
  
  else if (bmi >= 18.6 && bmi < 24.9)
     result = "<br> You're Normal Weight!!";
  
  else if (24.9 < bmi)
    result = "<br> You're Overweight!!!";
  else
    result = "<br> Invalid Answers"



  // Displaying results 
  document.getElementById('bmi').innerHTML = 'Your BMI is ' + bmi.toFixed(2) + result
  
}