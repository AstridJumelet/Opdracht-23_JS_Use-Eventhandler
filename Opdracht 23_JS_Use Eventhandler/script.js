console.log("***"); //check of node loopt

/* opdracht deel 1: Use a click event and "attach" the click event to the button.
When the button is clicked, give an alert: "button clicked" (just like you saw in the video).
<button id="mybutton" type="button" class="btn-alert">Alert Me!</button>
 */
const alertButton = document.getElementById('mybutton');
alertButton.addEventListener('click', function () {  //NOTE TO SELF: ik kreeg eerst foutmelding: Uncaught TypeError: 
    alert("button clicked!");                        //Cannot read properties of null (reading 'addEventListener'). 
});                                                  //wat bleek: Ik had dubbele haakjes gebruikt ipv enkele bij click en mybutton

/* opdracht deel 2: 2e button aanmaken en functie schrijven om achtergrond van kleur te doen veranderen
<button id="mybutton2" type="button" class="blue-background">Change Background</button>
functie: als je button aanklikt, dan toevoegen: class red-background 
*/
/* const changeBackgroundButton = document.querySelector('.blue-background');
function changeBackgroundToRed() {
    mybutton2.classList.add('red-background');
};
changeBackgroundButton.addEventListener('click', changeBackgroundToRed); */

// opdracht deel 3: toggle. Verander de naam van de functie van changeColor naar toggleColor. 
// Voeg géén extra class toe aan de classlist, maar toggle de class.
const toggleBackgroundButton = document.querySelector('blue-background');
function toggleBackground() {
    mybutton2.classList.toggle('red-background');
};
mybutton2.addEventListener('click', toggleBackground);