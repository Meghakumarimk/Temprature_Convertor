const changeTemp = () => {
  const inputTemp = parseFloat(document.getElementById("temp").value);
  const tempSelected = document.getElementById("temperatures1");
  const selectedUnit = tempSelected.options[tempSelected.selectedIndex].value;

  if (isNaN(inputTemp)) {
    warning1();
    return;
  }

  if (selectedUnit === "kel") {
    clearWarning();
    const celToKel = (cel) => (cel + 273.15).toFixed(3);
    const fahToKel = (fah) => ((fah - 32) / 1.8 + 273.15).toFixed(3);

    document.getElementById("result").innerHTML = `${inputTemp} &#176;Celsius = ${celToKel(inputTemp)} Kelvin`;
    document.getElementById("result2").innerHTML = `${inputTemp} &#176;Fahrenheit = ${fahToKel(inputTemp)} Kelvin`;
  } else if (selectedUnit === "cel") {
    clearWarning();
    const fahToCel = (fah) => ((fah - 32) / 1.8).toFixed(3);
    const kelToCel = (kel) => (kel - 273.15).toFixed(3);

    document.getElementById("result").innerHTML = `${inputTemp} &#176;Fahrenheit = ${fahToCel(inputTemp)} &#176;Celsius`;
    document.getElementById("result2").innerHTML = `${inputTemp} Kelvin = ${kelToCel(inputTemp)} &#176;Celsius`;
  } else if (selectedUnit === "fah") {
    clearWarning();
    const celToFah = (cel) => ((cel * 9) / 5 + 32).toFixed(3);
    const kelToFah = (kel) => ((kel - 273.15) * 1.8 + 32).toFixed(3);

    document.getElementById("result").innerHTML = `${inputTemp} &#176;Celsius = ${celToFah(inputTemp)} &#176;Fahrenheit`;
    document.getElementById("result2").innerHTML = `${inputTemp} Kelvin = ${kelToFah(inputTemp)} &#176;Fahrenheit`;
  } else {
    warning2();
    return;
  }
};

const clearValue = () => {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result2").innerHTML = "";
  document.getElementById("temp").value = "";
 
};

const warning1 = () => {
  document.getElementById("warning").innerHTML = "&#x26A0; &nbsp;Input Temperature value";
  setTimeout(()=>{document.getElementById("warning").innerHTML = ""}, 4000);
  clearValue();
  
};

const warning2 = () => {
  document.getElementById("warning").innerHTML = "&#x26A0; &nbsp;Not a Valid Temperture Unit!";
  setTimeout(()=>{document.getElementById("warning").innerHTML = ""}, 4000);
  clearValue();
  
};

// clear warning before showing the result 
const clearWarning = () => {
  document.getElementById("warning").innerHTML = "";
}
