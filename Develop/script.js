// setting variable for with time and moment format
var currentDay = moment().format('dddd, MMMM Do')
// calling that variable to be displayed on html id 'currentDay
$("#currentDay").text(currentDay)
var input1Con = document.querySelector('#input1area')

nineAm();



function nineAm () {
    var input9area = document.querySelector('#input9area');
    var output9area = document.querySelector('#input9area');
    var input9Btn = document.querySelector('#button9');

    input9Btn.addEventListener('click', storeInfo9);

    
    
    input9area.value = localStorage.getItem("UserInput9");
    output9area.textContent = localstorage.getItem("UserInput9");
    

    function storeInfo9() {
        localStorage.setItem("UserInput9", input9area.value);
        output9area.textContent = input9area.value
        

    }

}
function tenAm () {
    var input10area = document.querySelector('#input10area');
    var output10area = document.querySelector('#input10area');
    var input10Btn = document.querySelector('#button10');

    input10Btn.addEventListener('click', storeInfo10);

    
    
    input10area.value = localStorage.getItem("UserInput10");
    output10area.textContent = localstorage.getItem("UserInput10");
    

    function storeInfo10() {
        localStorage.setItem("UserInput10", input10area.value);
        output10area.textContent = input10area.value
        

    }

}



