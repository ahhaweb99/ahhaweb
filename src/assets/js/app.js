import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$(document).ready(function(){


  var elem = document.querySelector('.main-carousel');
  if(elem) {
    var flkty = new Flickity(elem, {
      // options
      cellAlign: 'center',
      wrapAround: true,
      arrowShape: {
        x0: 30,
        x1: 45, y1: 10,
        x2: 60, y2: 20,
        x3: 60
      }
    });
  }
 

  var elem = document.querySelector('.hero-carousel');
  if (elem) {
    var flkty = new Flickity(elem, {
      // options
      cellAlign: 'center',
      wrapAround: true,
      prevNextButtons: false
    });

    $('.hero-carousel .button').on('click', function () {
      flkty.next();
    });
  }

  var d = new Date();
  var n = d.getFullYear();
  var elem = document.querySelector('.js-date');
  elem.innerHTML += n;


});
