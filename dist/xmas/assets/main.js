/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/index.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/index.js ***!
  \*************************************/
/***/ (() => {

const body = Array.from(document.getElementsByTagName('body'));
const objects = Array.from(document.getElementsByClassName('scene-object'));
const globe = Array.from(document.getElementsByClassName('globe'));
const stripes = Array.from(document.getElementsByClassName('strip'));
const logo = Array.from(document.getElementsByClassName('logo'));
const xmascardwrap = Array.from(document.getElementsByClassName('xmas-card-holder'));
const xmasperspective = Array.from(document.getElementsByClassName('xmas-perspective'));
const xmascardfront = Array.from(document.getElementsByClassName('xmas-card-front'));
const xmascardback = Array.from(document.getElementsByClassName('xmas-card-white-back'));
const button = document.getElementById('button');

const globeIn = () => {
  globe.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove('off');
    }, index);
  });
  setTimeout(() => {
    stripesOn();
  }, 5000);
};

const stripesOn = () => {
  stripes.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove('off');
    }, index);
  });
  setTimeout(() => {
    buildScene();
  }, 1000);
};

const buildScene = () => {
  objects.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove('off');
    }, index * 500);
    setTimeout(() => {
      element.classList.add('is-active');
    }, 4500);
  });
  setTimeout(() => {
    logoIn();
  }, 6000);
};

const logoIn = () => {
  logo.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove('off');
    }, index);
  });
  setTimeout(() => {
    xmasCardStart();
  }, 2000);
};

const xmasCardStart = () => {
  xmascardwrap.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove('is-starting');
    }, index);
  });
  setTimeout(() => {
    xmasPerspective();
  }, 2000);
};

const xmasPerspective = () => {
  xmasperspective.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('perspective-on');
    }, index);
  });
  setTimeout(() => {
    animateCard();
  }, 1000);
};

const animateCard = () => {
  body[0].classList.add('step-01');
  setTimeout(() => {
    xmascardback[0].classList.add('is-hidden');
  }, 2000);
  setTimeout(() => {
    body[0].classList.add('step-02');
  }, 3000);
  setTimeout(() => {
    body[0].classList.add('step-03');
  }, 5000);
  setTimeout(() => {
    animateCardOut();
  }, 15000);
};

const animateCardOut = () => {
  body[0].classList.remove('step-03');
  setTimeout(() => {
    xmascardback[0].classList.remove('is-hidden');
  }, 1000);
  setTimeout(() => {
    body[0].classList.remove('step-02');
  }, 2000);
  setTimeout(() => {
    body[0].classList.remove('step-01');
    spinCard();
  }, 5000);
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nametext = urlParams.get('name');
const nameholder = document.getElementById('clientname');
const nameholderMobile = document.getElementById('clientnamemobile');
nameholderMobile.innerHTML = nametext;
nameholder.innerHTML = nametext;

const spinCard = () => {
  let mouseOverContainer = document.getElementById('rotateWindow');
  let ex1Layer = xmascardwrap[0];

  function transforms(x, y, el) {
    const constraint = 90;
    let box = el.getBoundingClientRect();
    let calcY = x - box.x - box.width / 2 / constraint;
    return "rotateX(10deg) " + "   rotateY(" + calcY + "deg) scale(0.5)";
  }

  ;

  function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
  }

  mouseOverContainer.onmousemove = function (e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);
    window.requestAnimationFrame(function () {
      transformElement(ex1Layer, position);
    });
  };
};

if (window.innerWidth > 720) {
  globeIn();
}

button.addEventListener('click', function () {
  animateCard();
});

/***/ }),

/***/ "./src/assets/styles/index.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/assets/scripts/index.js");
/******/ 	__webpack_require__("./src/assets/styles/index.scss");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map