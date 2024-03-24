/* eslint-disable import/no-extraneous-dependencies */
import { format, getHours } from 'date-fns';

const wetherImg = document.querySelector('.imgContainer');

function updateHighlights(data, hours) {
  const imgContainer = document.querySelectorAll('.highlightBoxImgContainer');

  let num = 0;
  if (hours < 13) {
    let hour = hours;
    hour += 1;
    num += hour;
  } else if (hours >= 13) {
    num += 14;
  }

  imgContainer.forEach((element) => {
    element.removeChild(element.firstElementChild);

    const hourData = data[num];
    const img = document.createElement('img');
    img.src = hourData.condition.icon;
    img.setAttribute('class', 'highlightBoxImg');
    element.appendChild(img);

    const time = format(hourData.time, 'h:mm a');
    const timeElement = element.previousSibling;
    timeElement.textContent = time;

    const temp = element.nextSibling;
    temp.firstChild.innerHTML = `${Math.round(hourData.temp_c)}&deg;c/${Math.round(hourData.temp_f)}&deg;f`;

    num += 1;
  });
}

function getTimePeriod(hours) {
  let timePeriod;
  if (hours === 12) {
    timePeriod = 'Noon';
  } else if (hours < 12) {
    timePeriod = 'Morning';
  } else if (hours === 17) {
    timePeriod = 'Afternoon';
  } else if (hours >= 18 && hours < 22) {
    timePeriod = 'Evening';
  } else if (hours >= 22 || hours < 5) {
    timePeriod = 'Night';
  } else {
    timePeriod = 'After noon';
  }

  return timePeriod;
}

function nextDayUpdate(data) {
  const container = document.querySelectorAll('.DayForecastBox');

  const activeBtn = document.querySelector('.activeUnit');
  const unit = activeBtn.textContent;

  let num = 0;
  container.forEach((box) => {
    const { date, day } = data[num];

    const formatedDate = format(date, 'EEEE');
    const dayElement = box.firstChild;
    dayElement.textContent = formatedDate;

    const nextDayWetherIMG = box.lastChild.firstChild.nextSibling;
    const deleteIMG = document.querySelector('#nextDayWetherImg');
    nextDayWetherIMG.removeChild(deleteIMG);

    const img = document.createElement('img');
    img.src = day.condition.icon;
    img.setAttribute('id', 'nextDayWetherImg');

    nextDayWetherIMG.appendChild(img);

    const dayTempElement = box.lastChild.firstChild.firstChild.firstChild;
    const highTempElement = box.lastChild.firstChild.lastChild.firstChild;
    const lowTempElement = highTempElement.nextSibling;

    // console.log();
    if (unit.includes('C')) {
      dayTempElement.textContent = day.avgtemp_c;
      highTempElement.innerHTML = `High:${Math.round(day.maxtemp_c)}&deg;`;
      lowTempElement.innerHTML = `Low:${Math.round(day.mintemp_c)}&deg;`;
    } else if (unit.includes('F')) {
      dayTempElement.textContent = day.avgtemp_f;
      highTempElement.innerHTML = `High:${Math.round(day.maxtemp_f)}`;
      lowTempElement.innerHTML = `Low:${Math.round(day.mintemp_f)}&deg;`;
    }

    num += 1;
  });
}

function updateUI(data) {
  const child = document.querySelector('#currentWetherImg');
  wetherImg.removeChild(child);

  const img = document.createElement('img');
  img.src = data.current.condition.icon;
  img.setAttribute('id', 'currentWetherImg');

  wetherImg.appendChild(img);

  const text = document.querySelector('.wetherCondition');
  text.textContent = data.current.condition.text;

  const localTime = data.location.localtime;
  const hours = getHours(localTime);
  // console.log(hours);

  const fulldate = document.querySelector('#fullDate');
  const formatedDate = format(localTime, 'dd-MMM-yyyy');
  fulldate.textContent = formatedDate;

  const dayWithTime = document.querySelector('#dayWithTime');
  const foramtedTimeDate = format(localTime, 'EEEE, h:mm a');
  dayWithTime.textContent = foramtedTimeDate;

  const dayORnight = document.querySelector('#dayORnight');
  dayORnight.textContent = getTimePeriod(hours);

  const location = document.querySelector('.location > p');
  location.textContent = data.location.name;

  const humadity = document.querySelector('#humadity');
  humadity.textContent = data.current.humidity;

  const windDirection = document.querySelector('#windDirection');
  windDirection.textContent = data.current.wind_dir;

  const uvIndex = document.querySelector('#uvIndex');
  uvIndex.textContent = data.current.uv;

  // Hold data from destructuring
  const [day1, day2, day3] = data.forecast.forecastday;

  const sunRise = document.querySelector('#sunRiseTime');
  sunRise.textContent = day1.astro.sunrise;

  const sunSet = document.querySelector('#sunSetTime');
  sunSet.textContent = day1.astro.sunset;

  const moonRise = document.querySelector('#moonRiseTime');
  moonRise.textContent = day1.astro.moonrise;

  const moonSet = document.querySelector('#moonSetTime');
  moonSet.textContent = day1.astro.moonset;

  // All of the Values Who will change with unit
  const temperature = document.querySelector('.temperature');
  const realFeel = document.querySelector('#feelLike');
  const windspeed = document.querySelector('#wind');
  const windUnit = document.querySelector('#windSpeedUnit');
  const pressure = document.querySelector('#pressure');
  const mbUnit = document.querySelector('#mbUnit');
  const tempUP = document.querySelector('#tempUp');
  const tempDown = document.querySelector('#tempDown');

  const activeBtn = document.querySelector('.activeUnit');
  const unit = activeBtn.textContent;

  // console.log(unit.includes('C'));
  if (unit.includes('C')) {
    temperature.textContent = data.current.temp_c;
    realFeel.textContent = data.current.feelslike_c;
    windspeed.textContent = data.current.wind_kph;
    windUnit.textContent = 'km/h';
    pressure.textContent = data.current.pressure_mb;
    mbUnit.textContent = 'mb';
    tempUP.textContent = day1.day.maxtemp_c;
    tempDown.textContent = day1.day.mintemp_c;
  } else if (unit.includes('F')) {
    temperature.textContent = data.current.temp_f;
    tempUP.textContent = day1.day.maxtemp_f;
    tempDown.textContent = day1.day.mintemp_f;
    pressure.textContent = data.current.pressure_in;
    mbUnit.textContent = 'in';
    windUnit.textContent = 'mp/h';
    windspeed.textContent = data.current.wind_mph;
    realFeel.textContent = data.current.feelslike_f;
  }

  updateHighlights(day1.hour, hours);
  const nextDaysForecastsHolder = [day2, day3];
  nextDayUpdate(nextDaysForecastsHolder);
}

export default updateUI;
