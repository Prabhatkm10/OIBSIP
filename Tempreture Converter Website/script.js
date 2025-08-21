function convertTemp() {
      const temp = parseFloat(document.getElementById('temperature').value);
      const from = document.getElementById('unit').value;
      const to = document.getElementById('toUnit').value;
      const errorDiv = document.getElementById('error');
      const resultDiv = document.getElementById('result');
      errorDiv.innerHTML = '';
      resultDiv.innerHTML = '';

      if (from === to) {
        resultDiv.innerHTML = `Temperature is the same: ${temp}°`;
        return;
      }
      if (isNaN(temp)) {
        errorDiv.innerHTML = "Please enter a valid numeric temperature.";
        return;
      }

      let celsius;
      // Convert input to Celsius first
      if (from === "celsius") {
        celsius = temp;
      } else if (from === "fahrenheit") {
        celsius = (temp - 32) * 5/9;
      } else if (from === "kelvin") {
        celsius = temp - 273.15;
      }
      let finalTemp;
      if (to === "celsius") {
        finalTemp = celsius;
      } else if (to === "fahrenheit") {
        finalTemp = celsius * 9/5 + 32;
      } else if (to === "kelvin") {
        finalTemp = celsius + 273.15;
      }
      // Formatting
      let toLabel = to === 'celsius' ? '°C' : to === 'fahrenheit' ? '°F' : 'K';
      resultDiv.innerHTML = `Converted Temperature: ${finalTemp.toFixed(2)} ${toLabel}`;
    }