import './style.css';
import updateUI from './modules/updataUI';
import { addToLocalStorage, getToLoclStorage } from './modules/localStorage';

const fahrenheitAndCelsiusUnitBtns = document.querySelectorAll('.unitsBtn');

let location;
async function makeFetchRequest(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    location = data.location.name;
    addToLocalStorage(data.location);
    updateUI(data);
  } catch (error) {
    console.log(error.status);
  }
}

function URLmaker(city) {
  // console.log(city);
  const url = `https://api.weatherapi.com/v1/forecast.json?key=989e8d4d83124f15a0772835241603&q=${city}&days=3`;

  makeFetchRequest(url);
}

if (getToLoclStorage() === null) {
  URLmaker('Hafizabad');
} else {
  const data = getToLoclStorage();
  URLmaker(data.name);
}

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
