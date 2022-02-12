const windChill = (temperature, speed) => {
    return (temperature >= 50 && speed > 3)
    ?
      Math.round(35.74 + 0.6215 * temperature - 35.75 *
        Math.pow(speed, 0.16) + 0.4275 * temperature
        * Math.pow(speed, 0.16))
    :
      "N/A";
  }
  
  const showWindChill = () => {
    let temperature = Number(document.getElementById("weatherF").textContent || 0);
    let windSpeed = Number(document.getElementById("windSpeed").textContent || 0);
    let result = windChill(temperature, windSpeed);
    document.getElementById("windC").innerHTML = result;
  }