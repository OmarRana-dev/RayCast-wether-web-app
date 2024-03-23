const wetherImg = document.querySelector('.imgContainer');

function updateUIwithCelsiusUnit(data) {
  const child = document.querySelector('#currentWetherImg');
  wetherImg.removeChild(child);

  const img = document.createElement('img');
  img.src = data.current.condition.icon;
  img.setAttribute('id', 'currentWetherImg');

  wetherImg.appendChild(img);

  const temperature = document.querySelector('.temperature');
  temperature.textContent = data.current.temp_c;

  const text = document.querySelector('.wetherCondition');
  text.textContent = data.current.condition.text;

  const fulldate = document.querySelector('#fullDate');
  fulldate.textContent = '21-july-2024';

  const dayWithTime = document.querySelector('#dayWithTime');
  dayWithTime.textContent = 'Friday, 12:44 PM';

  const dayORnight = document.querySelector('#dayORnight');
  dayORnight.textContent = 'Day';

  const location = document.querySelector('.location > p');
  location.textContent = data.location.name;

  const realFeel = document.querySelector('#feelLike');
  realFeel.textContent = data.current.feelslike_c;

  const humadity = document.querySelector('#humadity');
  humadity.textContent = data.current.humidity;

  const windspeed = document.querySelector('#wind');
  windspeed.textContent = data.current.wind_kph;

  const windUnit = document.querySelector('#windSpeedUnit');
  windUnit.textContent = 'km/h';

  const windDirection = document.querySelector('#windDirection');
  windDirection.textContent = data.current.wind_dir;

  const uvIndex = document.querySelector('#uvIndex');
  uvIndex.textContent = data.current.uv;

  const pressure = document.querySelector('#pressure');
  pressure.textContent = data.current.pressure_mb;

  const mbUnit = document.querySelector('#mbUnit');
  mbUnit.textContent = 'mb';

  // Hold data from destructuring
  const [dataHolder] = data.forecast.forecastday;

  const tempUP = document.querySelector('#tempUp');
  tempUP.textContent = dataHolder.day.maxtemp_c;

  const tempDown = document.querySelector('#tempDown');
  tempDown.textContent = dataHolder.day.mintemp_c;

  const sunRise = document.querySelector('#sunRiseTime');
  sunRise.textContent = dataHolder.astro.sunrise;

  const sunSet = document.querySelector('#sunSetTime');
  sunSet.textContent = dataHolder.astro.sunset;

  const moonRise = document.querySelector('#moonRiseTime');
  moonRise.textContent = dataHolder.astro.moonrise;

  const moonSet = document.querySelector('#moonSetTime');
  moonSet.textContent = dataHolder.astro.moonset;
}

function updateUIwithfahrenheitUnit(data) {
  const child = document.querySelector('#currentWetherImg');
  wetherImg.removeChild(child);

  const img = document.createElement('img');
  img.src = data.current.condition.icon;
  img.setAttribute('id', 'currentWetherImg');

  wetherImg.appendChild(img);

  const temperature = document.querySelector('.temperature');
  temperature.textContent = data.current.temp_f;

  const text = document.querySelector('.wetherCondition');
  text.textContent = data.current.condition.text;

  const fulldate = document.querySelector('#fullDate');
  fulldate.textContent = '21-july-2024';

  const dayWithTime = document.querySelector('#dayWithTime');
  dayWithTime.textContent = 'Friday, 12:44 PM';

  const dayORnight = document.querySelector('#dayORnight');
  dayORnight.textContent = 'Day';

  const location = document.querySelector('.location > p');
  location.textContent = data.location.name;

  const realFeel = document.querySelector('#feelLike');
  realFeel.textContent = data.current.feelslike_f;

  const humadity = document.querySelector('#humadity');
  humadity.textContent = data.current.humidity;

  const windspeed = document.querySelector('#wind');
  windspeed.textContent = data.current.wind_mph;

  const windUnit = document.querySelector('#windSpeedUnit');
  windUnit.textContent = 'mp/h';

  const windDirection = document.querySelector('#windDirection');
  windDirection.textContent = data.current.wind_dir;

  const uvIndex = document.querySelector('#uvIndex');
  uvIndex.textContent = data.current.uv;

  const pressure = document.querySelector('#pressure');
  pressure.textContent = data.current.pressure_in;

  const mbUnit = document.querySelector('#mbUnit');
  mbUnit.textContent = 'in';

  // Hold data from destructuring
  const [dataHolder] = data.forecast.forecastday;

  const tempUP = document.querySelector('#tempUp');
  tempUP.textContent = dataHolder.day.maxtemp_f;

  const tempDown = document.querySelector('#tempDown');
  tempDown.textContent = dataHolder.day.mintemp_f;

  const sunRise = document.querySelector('#sunRiseTime');
  sunRise.textContent = dataHolder.astro.sunrise;

  const sunSet = document.querySelector('#sunSetTime');
  sunSet.textContent = dataHolder.astro.sunset;

  const moonRise = document.querySelector('#moonRiseTime');
  moonRise.textContent = dataHolder.astro.moonrise;

  const moonSet = document.querySelector('#moonSetTime');
  moonSet.textContent = dataHolder.astro.moonset;
}

export { updateUIwithCelsiusUnit, updateUIwithfahrenheitUnit };
