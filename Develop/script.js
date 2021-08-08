// setting variable for with time and moment format
var currentDay = moment().format('dddd, MMMM Do')
// calling that variable to be displayed on html id 'currentDay
$("#currentDay").text(currentDay)
var input1Con = document.querySelector('#input1area')
var clear = document.querySelector('#clear')

nineAm();
tenAm();
elevenAm();
twelvePm();
thirteenPm();
fourteenPm();
fifteenPm();
sixteenPm();
seventeenPm();



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
        localStorage.setItem("UserInput11", input11area.value);
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
function thirteenPm () {
    var input1area = document.querySelector('#input1area');
    var output1area = document.querySelector('#input1area');
    var input1Btn = document.querySelector('#button1');

    input1Btn.addEventListener('click', storeInfo1);

    
    
    input1area.value = localStorage.getItem("UserInput1");
    output1area.textContent = localstorage.getItem("UserInput1");
    

    function storeInfo1() {
        localStorage.setItem("UserInput1", input1area.value);
        output1area.textContent = input1area.value
        

    }

}

function fourteenPm () {
    var input2area = document.querySelector('#input2area');
    var output2area = document.querySelector('#input2area');
    var input2Btn = document.querySelector('#button2');

    input2Btn.addEventListener('click', storeInfo2);

    
    
    input2area.value = localStorage.getItem("UserInput2");
    output2area.textContent = localstorage.getItem("UserInput2");
    

    function storeInfo2() {
        localStorage.setItem("UserInput2", input2area.value);
        output2area.textContent = input2area.value
        

    }

}
function fifteenPm () {
    var input3area = document.querySelector('#input3area');
    var output3area = document.querySelector('#input3area');
    var input3Btn = document.querySelector('#button3');

    input3Btn.addEventListener('click', storeInfo3);

    
    
    input3area.value = localStorage.getItem("UserInput3");
    output3area.textContent = localstorage.getItem("UserInput3");
    

    function storeInfo3() {
        localStorage.setItem("UserInput3", input3area.value);
        output3area.textContent = input3area.value
        

    }

}
function sixteenPm () {
    var input4area = document.querySelector('#input4area');
    var output4area = document.querySelector('#input4area');
    var input4Btn = document.querySelector('#button4');

    input4Btn.addEventListener('click', storeInfo4);

    
    
    input4area.value = localStorage.getItem("UserInput4");
    output4area.textContent = localstorage.getItem("UserInput4");
    

    function storeInfo4() {
        localStorage.setItem("UserInput4", input4area.value);
        output4area.textContent = input4area.value
        

    }

}
function seventeenPm () {
    var input5area = document.querySelector('#input5area');
    var output5area = document.querySelector('#input5area');
    var input5Btn = document.querySelector('#button5');

    input5Btn.addEventListener('click', storeInfo5);

    
    
    input5area.value = localStorage.getItem("UserInput5");
    output5area.textContent = localstorage.getItem("UserInput5");
    

    function storeInfo5() {
        localStorage.setItem("UserInput5", input5area.value);
        output5area.textContent = input5area.value
        

    }

}




