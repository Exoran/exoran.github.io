/* User Story
 I can add, subtract, multiply and divide two numbers.
 I can clear the input field with a clear button.
 I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

 */

/* TODO :
- Set a max digits limit --> le résultat est affiché avec un maximum de 13 caractères (lignes 118-120)
- Round val */

$(function() {
 var buttonPushed = "";
 var entry = "";
 var answer = "";
 var memory = "";
 var operators = [];
 var operation = [];
 var initialized = true;
 var result = [];
 var x = 0;
 var y = 0;
 var num1 = 0;
 var num2 = 0;
 var count = 0;
 var multiOrDiv = false;
 var operator = [];

 //https://jsfiddle.net/KJ6Tv/1/


   function additionOrSubstraction() {
     for (var i=0;i<result.length;i++) {  //ta boucle '(var i in result)' ne fonctionne pas avec la suite telle que je l'ai modifiée
       if ((result[i] === "+")|| (result[i] === "-")) {
         num1 = Number(result[i-1]);  //parseFloat (que j'ai laissé tel quel ailleurs) est OK mais Number() suffit
         num2 = parseFloat(result[i+1]);
         var res;
         if (result[i] === "+") res = num1+num2;
         else res = num1 - num2;
         result.splice(0,3,res);  //élimine les 3 premiers éléments et place 'res' en position 0 dans 'result'
         console.log(result)
       }
     }
   }  //fin de la fonction additionOrSubstraction()

   function multiplicationOrDivision() {
     if (result.join('').search("/") + result.join('').search("x") >-1) {
       multiOrDiv = true;
     } else {
       multiOrDiv = false
       additionOrSubstraction();
     }
     for (var i=0;i<result.length;i++) {  //ta boucle '(var i in result)' ne fonctionne pas avec la suite telle que je l'ai modifiée
       if (result[i] === "/" || result[i] === "x" && multiOrDiv === true) {
         num1 = parseFloat(result[i-1]);
         num2 = parseFloat(result[i+1]);
         var res;
         if (result[i] === "x") res = num1 * num2;
         else res = num1 / num2;
         result.splice(0,3,res);  //élimine les 3 premiers éléments et place 'res' en position 0 dans 'result
         console.log(result)
        }
     }
   }  //fin de multiplicationOrDivision()

   function check() {
     if (result.length > 1) {
       multiplicationOrDivision()
       check();
     } else if (result.length > 1 && multiOrDiv === false) {
       additionOrSubstraction();
       check();
     } else if (result.length === 1) {
       answer = result;
     }
   }  //fin de check()

 function mathItUp() {
   // Début de la fonction MathItUp()
   // We need to create en array with numbers and operators separated, it will be stored in "result"
   var temp = entry
   entry = entry.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
   var numbers = temp.split(/[^0-9\.]+/);
   operators = entry.split("#").filter(function(n) {
     return n
   });
   result = [];
   for (var i in numbers) {
     result.push(numbers[i]);
     if (i < operators.length) result.push(operators[i]);
   }
   console.log(result)
   multiplicationOrDivision();
   check();
 }    //fin de MathItUp()

 $("button").click(function() {
   buttonPushed = $(this).attr("value");

   if (initialized === true) {
     if (buttonPushed === "0" || buttonPushed === "1" || buttonPushed === "2" || buttonPushed === "3" || buttonPushed === "4" || buttonPushed === "5" || buttonPushed === "6" || buttonPushed === "7" || buttonPushed === "8" || buttonPushed === "9" || buttonPushed === ".") {

       entry += buttonPushed;
       $("#result").html(entry);
       console.log(entry);

     }
   }
   if (buttonPushed === "/" || buttonPushed === "+" || buttonPushed === "-" || buttonPushed === "x") {
     memory = entry;
     operator = buttonPushed;
     operators.push(operator);
     console.log(operators);
     entry += operator;
     $('#result').html(entry);
     initialized = true;
   }
   if (memory != "0" && buttonPushed === "=") {
     mathItUp();
     var s_answer = String(answer[0]).substr(0,13); // 's_answer' est la version String de la première valeur du tableau 'answer'
     $('#result').html(s_answer);
     entry = Number(s_answer); //pour que 'entry' corresponde bien à la valeur numérique de l'affichage
     operators = [];
     initialized = false;
   }
   if (buttonPushed === "ac") {
     entry = "";
     operator = "";
     memory = "";
     answer = "";
     operators = [];
     operation = [];
     initialized = true;
     $('#result').html("0");
   }
   if (buttonPushed === "ce") {
     entry = memory;
     $('#result').html(entry);
   }
 }) //fin de la fonction JQuery '$("button").click'
});  //fin de la fonction JQuery globale '$(function()'
