// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { getMenu } from './sb-menu/menu'
window.onload = renderMainPage;
let urlCategory = "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/dogs";
const $mainContent = document.querySelector("#main-content");
const $sidebarMenu = document.querySelector("#sidebar-nav");
const $headerMenu = document.querySelector("#header-nav");
const $logo = document.querySelector("#logo__img"); // Лазерная указка на главной странице

class LaserRay {
  //selector, color
  constructor(options) {
    _defineProperty(this, "onTop", true);

    _defineProperty(this, "onLeft", true);

    this.$el = document.querySelector(options.selector);
    this.$colorPicker = document.querySelector(options.colorPickerSelector);
    this.color = "#f00";
    this.topPos = 0;
    this.leftPos = 0;
  }

  changeColor() {
    this.$colorPicker.addEventListener("change", () => {
      this.color = this.$colorPicker.value;
      this.$el.style.backgroundColor = this.color;
    });
  }

  changeTopPos() {
    setInterval(() => {
      const step = 10;

      if (this.topPos < 180 && this.onTop) {
        this.topPos += Math.floor(Math.random() * step);
        if (this.topPos > 180) this.onTop = false;
      } else {
        this.topPos -= Math.floor(Math.random() * step);
        if (this.topPos < 10) this.onTop = true;
      }

      this.$el.style.top = this.topPos + "px";
      this.$el.style.left = this.topPos + "px";

      if (this.leftPos < 400 && this.onleft) {
        this.leftPos += Math.floor(Math.random() * step);
        if (this.leftPos > 400) this.onleft = false;
      } else {
        this.leftPos -= Math.floor(Math.random() * step);
        if (this.leftPos < 10) this.onleft = true;
      }

      this.$el.style.top = this.topPos + "px";
      this.$el.style.left = this.leftPos + "px";
    }, 40);
  }

}

$logo.onclick = renderMainPage;

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
} // клик по элементам меню


$sidebarMenu.addEventListener("click", ev => {
  removeAllChildren($mainContent);

  if (ev.target.dataset.type) {
    urlCategory = "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/".concat(ev.target.dataset.type);
    getAnimalCards().then(resolve => {
      const $animalsList = document.createElement("div");
      $animalsList.classList.add("animals-list");
      $animalsList.insertAdjacentHTML("afterbegin", "\n    <h2 class=\"animals-list__heading\">".concat(resolve[1], "</h2>\n    <div class=\"animals-list__list\">\n      ").concat(resolve[0], "\n    </div>\n    <div class=\"animals-list__description\">\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis assumenda beatae, magni, natus, eos aliquid sit aperiam aspernatur placeat suscipit doloribus voluptate fuga quasi quaerat atque ex accusamus accusantium!</p>\n    </div>\n    "));
      const $tempAnimalInfo = document.createElement("div");
      $tempAnimalInfo.classList.add("animal-info");
      $mainContent.insertAdjacentElement("afterbegin", $tempAnimalInfo);
      $mainContent.appendChild($animalsList);
    });
  }
}); // клик по элементам в списке животных

$mainContent.addEventListener("click", ev => {
  if (ev.target.dataset.id) {
    renderAnimal(ev);
  }
}); // клик по хедер-меню

$headerMenu.addEventListener("click", ev => {
  if (ev.target.getAttribute("id") === "main-page-btn") renderMainPage(ev);
  if (ev.target.getAttribute("id") === "favorites-page-btn") renderFavoritesPage();
  if (ev.target.getAttribute("id") === "about-page-btn") renderAboutPage();
}); // рендер главной страницы

function renderMainPage(event) {
  removeAllChildren($mainContent);
  $mainContent.insertAdjacentHTML("afterbegin", "\n  <div class=\"main-page\">\n  <div class=\"main-page__heading\">\n    <h1>Animals</h1>\n    <span>\u041C\u0438\u043D\u0438-\u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0445 \u043F\u0438\u0442\u043E\u043C\u0446\u0435\u0432</span>\n    <div class=\"laser-container\">\n      <div id=\"laser-ray\" class=\"laser-ray\"></div>\n      <input id=\"color-picker\" type=\"color\">\n    </div>\n  </div>\n  </div>\n  ");
  const laserRay = new LaserRay({
    selector: "#laser-ray",
    colorPickerSelector: "#color-picker"
  });
  laserRay.changeTopPos();
  laserRay.changeColor();
} // рендер избранного


function renderFavoritesPage() {
  removeAllChildren($mainContent);
  $mainContent.insertAdjacentHTML("afterbegin", "\n  <div class=\"favorites-page\">\n    <h1>\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435</h1>\n    <img id=\"wrench\" src=\"/adjustable-wrench.ace2fdb4.svg\" alt=\"\">\n  </div>\n  ");
} // рендер информации о проекте


function renderAboutPage() {
  removeAllChildren($mainContent);
  $mainContent.insertAdjacentHTML("afterbegin", "\n  <div class=\"about-page\">\n  <div class=\"desc\">\n    <h2>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</h2>\n    <p>\u041F\u0440\u043E\u0435\u043A\u0442 \"Animals\" \u0441\u043E\u0437\u0434\u0430\u043D \u0434\u043B\u044F \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0432\u0451\u0440\u0441\u0442\u043A\u0438, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0441\u0442\u0438\u043B\u0435\u0439 \u0438 \u043F\u0440\u0438\u0434\u0430\u043D\u0438\u044F \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043C\u0438 JS. <br>\n      <span class=\"desc__hidden\">\u0422\u0430\u043A\u0436\u0435 \u043F\u0440\u043E\u0435\u043A\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0438 \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u043A\u043E\u0441\u0442\u044B\u043B\u0435\u0439( <strong>\u0438 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E &#9888; </strong>) \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 JS.</span>\n    </p>\n  </div>\n  <div class=\"target\">\n    <h2>\u0426\u0435\u043B\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430</h2>\n    <ul>\n      <li>&#9989; \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 REST API \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 JSON (<a href=\"https://my-json-server.typicode.com/\">My-JSON-Server</a>) . \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0432\u044B\u0432\u043E\u0434 \u0438\u0445 \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0435</li>\n      <li>&#9989; \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F Git \u0438 GitHub</li>\n      <li>&#9989; \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 Parcel</li>\n      <li>&#9989; \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0439 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043C\u0438 JavaScript \u0438 CSS/CSS3</li>\n      <li>&#9989; \u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0432\u0451\u0440\u0441\u0442\u043A\u0438 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u044B\u0432\u0430\u043D\u0438\u0435\u043C CSS Grid</li>\n      <li>&#9989; \u0412\u0451\u0440\u0441\u0442\u043A\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0439</li>\n      <li>&#9989; \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F JavaScript \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</li>\n    </ul>\n  </div>\n  <div class=\"tech-stack\">\n    <h2>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438</h2>\n    <div class=\"tech-stack__list\">\n      <img src=\"/html-5.c1f14b10.svg\" alt=\"html5\">\n      <img src=\"/css.ab4050fe.svg\" alt=\"css3\">\n      <img src=\"/javascript.8a013844.svg\" alt=\"js\">\n      <img src=\"/sass.b2b3f6c8.svg\" alt=\"js\">\n      <img src=\"/github.9146623e.svg\" alt=\"js\">\n      <img src=\"/git.fed523d4.svg\" alt=\"js\">\n    </div> \n  </div>\n</div>\n  ");
} // получение списка животных


async function getAnimalCards() {
  try {
    const response = await fetch(urlCategory);
    const data = await response.json();
    let categoryName = "";

    switch (response.url) {
      case "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/dogs":
        categoryName = "Собаки";
        break;

      case "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/cats":
        categoryName = "Кошки";
        break;

      case "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/birds":
        categoryName = "Птицы";
        break;

      case "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/fishes":
        categoryName = "Рыбки";
        break;

      default:
        categoryName = "Животные";
    }

    const animalsCard = data.map(obj => {
      return "\n      <div class=\"animals-list__list__item\" >\n        <img src=\"".concat(obj.imgURL, "\" data-id=").concat(obj.id, "  data-name=\"").concat(obj.name, "\" data-breed=\"").concat(obj.breed, "\"alt=\"\">\n      </div>\n      ");
    }).join('');
    return [animalsCard, categoryName];
  } catch (err) {
    console.error("Error! : " + err);
  }
} // рендер инфо-карточки отдельного животного


function renderAnimal(event) {
  const imgURL = event.target.getAttribute("src");
  const name = event.target.dataset.name;
  const breed = event.target.dataset.breed;
  const $animalInfo = document.createElement("div");
  $animalInfo.classList.add("animal-info");
  $animalInfo.insertAdjacentHTML("afterbegin", "\n    <img class=\"animal-info__img\" src=\"".concat(imgURL, "\" alt=\"\">\n    <div class=\"animal-info__data\">\n      <h2 class=\"animal-info_data__name\">").concat(name, "</h2>\n      <span class=\"animal-info__data__breed\">").concat(breed, "</span>\n    </div>\n    <p class=\"animal-info__description\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit explicabo similique voluptas, fuga commodi cumque ullam ipsum consequuntur autem sequi laboriosam velit eligendi vel, quos dolores inventore obcaecati laborum.</p>\n    "));
  $mainContent.removeChild($mainContent.firstChild);
  $mainContent.insertAdjacentElement("afterbegin", $animalInfo);
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59500" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map