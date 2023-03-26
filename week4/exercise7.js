/*1) Create a new HTML page with the following elements:
– 1 text box ( <input type=”text” /> )
– 1 button ( <input type=”button” /> )
● 2) When the button is pressed display the value in the text box in an
alert
● 3) Add a <div> element to the page
● 4) When the button is pressed, instead of displaying the contents of
the input in the alert, display it in the created <div>
● 5) Remove the button from the page. There is a `keyup` event which
can be assigned to input elements, use this to update the div each
time the contents of the input box changes*/

function clickFunction() {
    var element = document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
   }
   function myLoadFunction() {
    var element = document.getElementById('mybutton');
    element.addEventListener('click', clickFunction);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);