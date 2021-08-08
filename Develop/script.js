// setting variable for with time and moment format
var currentDay = moment().format('dddd, MMMM Do')
// calling that variable to be displayed on html id 'currentDay
$("#currentDay").text(currentDay)
var input1Con = document.querySelector('#input1area')

nineAm();
tenAm();
elevenAm();
twelvePm();
thirteenAm();



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
function elevenAm () {
    var input11area = document.querySelector('#input11area');
    var output11area = document.querySelector('#input11area');
    var input11Btn = document.querySelector('#button11');

    input11Btn.addEventListener('click', storeInfo11);

    
    
    input11area.value = localStorage.getItem("UserInput11");
    output11area.textContent = localstorage.getItem("UserInput11");
    

    function storeInfo11() {
        localStorage.setItem("UserInput9", input11area.value);
        output11area.textContent = input11area.value
        

    }

}
function twelvePm () {
    var input12area = document.querySelector('#input12area');
    var output12area = document.querySelector('#input12area');
    var input12Btn = document.querySelector('#button12');

    input12Btn.addEventListener('click', storeInfo12);

    
    
    input12area.value = localStorage.getItem("UserInput12");
    output12area.textContent = localstorage.getItem("UserInput12");
    

    function storeInfo12() {
        localStorage.setItem("UserInput12", input12area.value);
        output12area.textContent = input12area.value
        

    }

}
function thirteenAm () {
    var input1area = document.querySelector('#input1area');
    var output1area = document.querySelector('#input1area');
    var input1Btn = document.querySelector('#button1');

    input9Btn.addEventListener('click', storeInfo9);

    
    
    input9area.value = localStorage.getItem("UserInput9");
    output9area.textContent = localstorage.getItem("UserInput9");
    

    function storeInfo9() {
        localStorage.setItem("UserInput9", input9area.value);
        output9area.textContent = input9area.value
        

    }

}


