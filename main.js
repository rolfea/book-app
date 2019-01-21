/* eslint-disable import/extensions */
import search from './js/search.js';
import enterSearch from './js/pageEvents.js';

const button = document.querySelector('button');
const searchInput = document.querySelector('input');

button.addEventListener('click', search);
searchInput.addEventListener('keyup', (e) => { enterSearch(e, button); });
