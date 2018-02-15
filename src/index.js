import _ from 'lodash';
import "./assets/style.scss";
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');

  element.innerHTML = _.join(['<div class="hello">Hello <span class="world">webpack</span>!</div>', '5 cubed is equal to ' + cube(5)], '\n\n');

  return element;
}

document.body.appendChild(component());
