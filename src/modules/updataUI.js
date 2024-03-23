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
  humadity.textContent = '23';

    const windspeed = document.querySelector("#wind")
    windspeed.textContent = '9.34';

    const windUnit = document.querySelector("#windSpeedUnit")
    windUnit.textContent = "km/h"

    const windDirection = document.querySelector("#windDirection")
    windDirection.textContent = "NWS"

}


// eslint-disable-next-line
export { updateUIwithCelsiusUnit };
