import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';

var _ = require('lodash');
import fetchCountries from './fetchCountries';

const input = document.querySelector('.js-input');
input.addEventListener(
  'input',
  _.debounce(() => {
    fetchCountries(input.value);
  }, 300),
);
