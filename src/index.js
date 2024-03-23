import './style.css';
import {
  updateUIwithCelsiusUnit,
  updateUIwithfahrenheitUnit,
} from './modules/updataUI';

const fahrenheitAndCelsiusUnitBtns = document.querySelectorAll('.unitsBtn');

function updateUI(data) {
  const activeBtn = document.querySelector('.activeUnit');
  const unit = activeBtn.textContent;
  console.log(unit);

  if (unit.includes('C')) {
    updateUIwithCelsiusUnit(data);
    console.log(unit.includes('C'), 'Form: C');
  } else {
    updateUIwithfahrenheitUnit(data);
    console.log(unit.includes('F'), 'From: F');
  }
}

let location;
async function makeFetchRequest(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    location = data.location.name;
    updateUI(data);
  } catch (error) {
    console.log(error.status);
  }
}

function URLmaker(city) {
  console.log(city);
  const url = `https://api.weatherapi.com/v1/forecast.json?key=989e8d4d83124f15a0772835241603&q=${city}&days=3`;

  makeFetchRequest(url);
}

URLmaker('Hafizabad');

fahrenheitAndCelsiusUnitBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const activebtn = document.querySelector('.activeUnit');
    activebtn.classList.remove('activeUnit');

    btn.classList.add('activeUnit');
    URLmaker(location);
  });
});

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('input').value;
  const city = input.trim();

  if (city) {
    location = city;
    URLmaker(city);
  }
});
