const convertedValue = document.querySelector("#convertedValue");
const inputTemp = document.querySelector("#degree");
const convertButton = document.querySelector("#convertButton");
const inputTempUnit = document.querySelector("#inputTempUnit");
const outputTempUnit = document.querySelector("#outputTempUnit");

window.addEventListener("load", () =>{
    inputTemp.value = "";
    convertedValue.innerHTML = "";
})

convertButton.addEventListener("click", (e) =>{
    e.preventDefault();
    conversion();
})

function conversion() {
    let inputValue = parseFloat(inputTemp.value); 

    if (inputTempUnit.value === "fahrenheit") {
        if (outputTempUnit.value === "fahrenheit") {
            const ftoa = inputValue * 1;
            convertedValue.innerHTML = `${ftoa.toFixed(2)} &deg;F`;
        }
        if (outputTempUnit.value === "celcius") {
            const ftoa = (inputValue - 32) * (5 / 9);
            convertedValue.innerHTML = `${ftoa.toFixed(2)} &deg;C`;
        }
        if (outputTempUnit.value === "kelvin") {
            const ftoa = (inputValue + 459.67) * (5 / 9);
            convertedValue.innerHTML = `${ftoa.toFixed(2)} K`;
        }
        if (outputTempUnit.value === "rankine") {
            const ftoa = (inputValue + 459.67) ;
            convertedValue.innerHTML = `${ftoa.toFixed(2)} &deg;R`;
        }
    }
    
    else if (inputTempUnit.value === "celcius") {
        if (outputTempUnit.value === "fahrenheit") {
            const ctoa = (inputValue * (9 / 5)) + 32 ;
            convertedValue.innerHTML = `${ctoa.toFixed(2)} &deg;F`;
        }
        if (outputTempUnit.value === "celcius") {
            const ctoa = inputValue * 1;
            convertedValue.innerHTML = `${ctoa.toFixed(2)} &deg;C`;
        }
        if (outputTempUnit.value === "kelvin") {
            const ctoa = (inputValue + 273.15) ;
            convertedValue.innerHTML = `${ctoa.toFixed(2)} K`;
        }
        if (outputTempUnit.value === "rankine") {
            const ctoa = (inputValue + 273.15) * ( 9 / 5 ) ;
            convertedValue.innerHTML = `${ctoa.toFixed(2)} &deg;R`;
        }
    }

    else if (inputTempUnit.value === "kelvin") {
        if (outputTempUnit.value === "fahrenheit") {
            const ktoa = (inputValue * (9 / 5)) - 459.67 ;
            convertedValue.innerHTML = `${ktoa.toFixed(2)} &deg;F`;
        }
        if (outputTempUnit.value === "celcius") {
            const ktoa = inputValue - 273.15;
            convertedValue.innerHTML = `${ktoa.toFixed(2)} &deg;C`;
        }
        if (outputTempUnit.value === "kelvin") {
            const ktoa = inputValue * 1 ;
            convertedValue.innerHTML = `${ktoa.toFixed(2)} K`;
        }
        if (outputTempUnit.value === "rankine") {
            const ktoa = (inputValue * (9 / 5)) ;
            convertedValue.innerHTML = `${ktoa.toFixed(2)} &deg;R`;
        }
    }

    else if (inputTempUnit.value === "rankine") {
        if (outputTempUnit.value === "fahrenheit") {
            const rtoa = inputValue - 459.67;
            convertedValue.innerHTML = `${rtoa.toFixed(2)} &deg;F`;
        }
        if (outputTempUnit.value === "celcius") {
            const rtoa = (inputValue - 491.67) * (5 / 9);
            convertedValue.innerHTML = `${rtoa.toFixed(2)} &deg;C`;
        }
        if (outputTempUnit.value === "kelvin") {
            const rtoa = (inputValue) * (5 / 9);
            convertedValue.innerHTML = `${rtoa.toFixed(2)} K`;
        }
        if (outputTempUnit.value === "rankine") {
            const rtoa = (inputValue * 1 ) ;
            convertedValue.innerHTML = `${rtoa.toFixed(2)} &deg;R`;
        }
    }
    
}
