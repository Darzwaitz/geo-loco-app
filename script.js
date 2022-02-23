'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //   console.log(position);
      const { latitude } = position.coords; // destructured, as same name of variable exists on coords
      //   const { longitude } = position.coords;
      const { longitude } = position.coords;
      //   console.log(`lat: ${latitude}, long: ${longitude}`);
    },
    function () {
      alert('Could not grab your position');
    }
  );
