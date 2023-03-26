/*1) Make it so that when the h1 is clicked, the contents of the h1 element is update (and not
the contents of the paragraph)
2) Make it so that when the p element is clicked, the contents of the p element is update (and
not the contents of the h1)
3) Test out other event types to see how they work:
● mouseenter
● mouseleave
4) Multiple event listeners can be applied to the same element, amend the program so that
the text is changed when you mouse over the element and it reverts to the original text when
the mouse exits the element*/

function updateParagraph() {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Heading';
   }
   function updateH1() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New paragraph contents';
   }
   function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('click', updateH1);
    var element = document.getElementById('paragraph');
    element.addEventListener('click', updateParagraph);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);