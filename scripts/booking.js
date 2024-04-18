/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dayCounter = 0;
let rate = 35;
let typeOfDay = ["full","half"];
let days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (let i = 0; i < days.length; i++) {
    document.getElementById(days[i]).addEventListener("click", function(){
        clickedDay(days[i]);
    });
}
function clickedDay(day){
    let daySelect = document.getElementById(day);
    daySelect.classList.toggle("clicked");
    if (daySelect.classList.contains("clicked")) {
        dayCounter++;
    } else {
        dayCounter--;
    }
    recalculate(rate,dayCounter);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.getElementById("clear-button").addEventListener("click", clearDays);
function clearDays() {
    for (let i = 0; i < days.length; i++) {
        document.getElementById(days[i]).classList.remove("clicked");
        }
    dayCounter = 0;
    document.getElementById("calculated-cost").innerHTML = "0";
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
for (let i = 0; i < typeOfDay.length; i++) {
    document.getElementById(typeOfDay[i]).addEventListener("click", function(){
        clickedType(typeOfDay[i]);
    });
}
function clickedType(type){
    let typeSelect = document.getElementById(type);
    if (type == "full" && (typeSelect.classList.contains("clicked")) == false){
        document.getElementById("half").classList.remove("clicked");
        typeSelect.classList.add("clicked");
        rate = 35;
        recalculate(rate,dayCounter);
    } else if (type == "half" && (typeSelect.classList.contains("clicked")) == false){
        document.getElementById("full").classList.remove("clicked");
        typeSelect.classList.add("clicked");
        rate = 20;
        recalculate(rate,dayCounter);
    }
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate (rate,dayCounter){
    let calculatedCost = rate * dayCounter
    document.getElementById("calculated-cost").innerHTML = calculatedCost;
}