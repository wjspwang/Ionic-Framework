import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
operation_input = new String("");
formula_output = new String("0.0");
result; 
denominator = 0;
numerator = 0;


  addGrade(type){
    
    switch(type){
      case "A":{
        if(this.operation_input == null || this.operation_input == "" ){
          var operation_input_result = this.operation_input.concat("(A)");
          this.operation_input = operation_input_result
         // alert(operation_input_result)
        }else{
          var operation_input_result = this.operation_input.concat(" + (A)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }
        this.formula(type);
        break;
      }
      case "B+":{
        if(this.operation_input == null || this.operation_input == "" ){
          var operation_input_result = this.operation_input.concat("(B+)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }else{
          var operation_input_result = this.operation_input.concat(" + (B+)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }
        this.formula(type);
        break;
      }
      case "B":{
        if(this.operation_input == null || this.operation_input == "" ){
          var operation_input_result = this.operation_input.concat("(B)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }else{
          var operation_input_result = this.operation_input.concat(" + (B)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }
        this.formula(type);
        break;
      }
      case "C+":{
        if(this.operation_input == null || this.operation_input == "" ){
          var operation_input_result = this.operation_input.concat("(C+)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }else{
          var operation_input_result = this.operation_input.concat(" + (C+)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }
        this.formula(type);
        break;
      }
      case "C":{
        if(this.operation_input == null || this.operation_input == "" ){
          var operation_input_result = this.operation_input.concat("(C)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }else{
          var operation_input_result = this.operation_input.concat(" + (C)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }
        this.formula(type);
        break;
      }
      case "D":{
        if(this.operation_input == null || this.operation_input == "" ){
          var operation_input_result = this.operation_input.concat("(D)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }else{
          var operation_input_result = this.operation_input.concat(" + (D)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }
        this.formula(type);
        break;
      }
      case "F":{
        if(this.operation_input == null || this.operation_input == "" ){
          var operation_input_result = this.operation_input.concat("(F/FD)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }else{
          var operation_input_result = this.operation_input.concat(" + (F/FD)");
          this.operation_input = operation_input_result;
         // alert(operation_input_result)
        }
        this.formula(type);
        break;
      }
      case "clr":{
        this.operation_input = "";
        this.formula(type);
        break;
      }
      case "=":{
        this.formula(type);
        break;
      }
    }
  }
  
  formula(type){
    switch(type){
      case "A":{
        this.numerator = this.numerator + 12;
        this.denominator = this.denominator + 3;
       // alert (this.numerator + "/" + this.denominator);
        break;
      }
      case "B+":{
        this.numerator = this.numerator + 10.5;
        this.denominator = this.denominator + 3;
       // alert (this.numerator + "/" + this.denominator);
        break;
      }
      case "B":{
        this.numerator = this.numerator + 9;
        this.denominator = this.denominator + 3;
        //alert (this.numerator + "/" + this.denominator);
        break;
      }
      case "C+":{
        this.numerator = this.numerator + 7.5;
        this.denominator = this.denominator + 3;
        //alert (this.numerator + "/" + this.denominator);
        break;
      }
      case "C":{
        this.numerator = this.numerator + 6;
        this.denominator = this.denominator + 3;
        //alert (this.numerator + "/" + this.denominator);
        break;
      }
      case "D":{
        this.numerator = this.numerator + 3;
        this.denominator = this.denominator + 3;
        //alert (this.numerator + "/" + this.denominator);
        break;
      }
      case "F":{
        this.numerator = this.numerator + 0;
        this.denominator = this.denominator + 3;
        //alert (this.numerator + "/" + this.denominator);
        break;
      }
      case "clr":{
        this.denominator = 0;
        this.numerator = 0;
        this.formula_output = "0.0"
        break;
      }
      case "=":{
        
        this.formula_output = this.numerator + "/" + this.denominator + "=" + (this.numerator/this.denominator).toFixed(2);
        break;
      }
    }
  }
}
