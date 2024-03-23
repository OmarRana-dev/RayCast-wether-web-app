import './style.css';
import { updateUIwithCelsiusUnit } from './modules/updataUI';

async function makeFetchRequest(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    updateUIwithCelsiusUnit(data);
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

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('input').value;
  const city = input.trim();

  if (city) {
    URLmaker(city);
  }

  // console.log();
});
