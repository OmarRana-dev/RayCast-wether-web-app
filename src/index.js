import './style.css';

const wetherImg = document.querySelector('.imgContainer img');

fetch(
  'https://api.weatherapi.com/v1/current.json?key=989e8d4d83124f15a0772835241603&q=london',
)
  .then((resolve) => resolve.json())
  .then((data) => {
    console.log(data);
    wetherImg.setAttribute('src', `${data.current.condition.icon}`);
  })
  .catch((reject) => {
    console.log(reject);
  });
