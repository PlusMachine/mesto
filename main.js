(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__form-field",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},e=document.querySelector(".popup-edit"),n=document.querySelector(".popup-add"),r=document.querySelector(".popup-picture"),o=document.querySelector(".popup-confirm"),i=document.querySelector(".profile__edit-button"),u=document.querySelector(".profile__add-button"),c=e.querySelector(".popup__form-edit"),a=n.querySelector(".popup__form-add"),l=c.querySelector(".popup__form-field_input_name"),s=c.querySelector(".popup__form-field_input_about"),f=(a.querySelector(".popup__form-field_input_title"),a.querySelector(".popup__form-field_input_link"),document.querySelector(".profile__name")),p=document.querySelector(".profile__profession"),y=document.querySelector(".profile__avatar"),h=document.querySelector(".template-element").content;function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}document.querySelector(".elements__list");const m=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r,this._authorization=r.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"addCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"updateProfileInfo",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}const S=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._user=u,this._likes=e.likes,this._template=n,this._element=this._template.querySelector(".elements__element").cloneNode(!0),this._handleCardClick=r,this._handleConfirmPopupOpen=o,this._likeButton=this._element.querySelector(".elements__like-icon"),this._likeClick=i,this._likeCounter=this._element.querySelector(".elements__like-counter"),this._basketButton=this._element.querySelector(".elements__basket"),this._cardImage=this._element.querySelector(".elements__image"),this._cardTitle=this._element.querySelector(".elements__title")}var e,n;return e=t,(n=[{key:"getCard",value:function(){return this._setCardContent(),this._setEventListeners(),this._showBasketButton(),this._element}},{key:"isLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._user}))}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){return t._handleLikeButtonClick()})),this._basketButton.addEventListener("click",(function(){return t._handleConfirmPopupOpen({card:t,cardId:t._data._id})})),this._cardImage.addEventListener("click",(function(){return t._handleCardClick()}))}},{key:"_handleLikeButtonClick",value:function(){this._likeClick(this._data._id)}},{key:"toggleButtonLike",value:function(t){this._likeButton.classList.toggle("elements__like-icon_active"),this._likeCounter.textContent=t.length}},{key:"_setCardContent",value:function(){this._cardTitle.textContent=this._data.name,this._cardImage.src=this._data.link,this._cardImage.alt=this._data.name,this._likeCounter.textContent=this._likes.length}},{key:"_showBasketButton",value:function(){this._user===this._data.owner._id&&this._basketButton.classList.add("elements__basket-button_is-visible")}},{key:"removeCardElement",value:function(){this._element.remove(),this._element=null}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var w=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._form.querySelector(this._settings.submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){var t=this;this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableButton",value:function(){this._submitButton.classList.remove(this._settings.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"disableButton",value:function(){this._submitButton.classList.add(this._settings.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"resetValidation",value:function(){this._toggleButtonState(),this._inputList.forEach((function(t){document.querySelector(".".concat(t.id,"-error")).textContent=""}))}},{key:"_checkInputValidity",value:function(t){var e=document.querySelector(".".concat(t.id,"-error"));t.validity.valid?e.textContent="":e.textContent=t.validationMessage}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this.enableButton()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const j=w;function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var P=function(){function t(e,n,r){var o=e.items,i=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._user=r,this._items=o,this._renderer=i,this._container=document.querySelector(n)}var e,n;return e=t,n=[{key:"renderItems",value:function(t){var e=this;this._items.forEach((function(n){e._renderer(n,t,e._user)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}],n&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const C=P;function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}const I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._handleEscClose=this._handleEscClose.bind(this),this._closeButtonElement=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButtonElement.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target===t._popup&&t.close()}))}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}const z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__img"),e._popupImgTitle=e._popup.querySelector(".popup__photo-title"),e}return e=u,(n=[{key:"open",value:function(t){q(x(u.prototype),"open",this).call(this),this._popupImg.src=t.link,this._popupImgTitle.textContent=t.name,this._popupImg.alt=t.name}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(I);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},V.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=G(r);if(o){var n=G(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleSubmit=e,r._settings=n,r._form=r._popup.querySelector(r._settings.formSelector),r._inputList=r._popup.querySelectorAll(r._settings.inputSelector),r}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;V(G(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues())}))}},{key:"close",value:function(){V(G(u.prototype),"close",this).call(this),this._form.reset()}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(I);const M=J;function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,X(r.key),r)}}function F(t,e){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},F(t,e)}function K(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Q(){return Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=W(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},Q.apply(this,arguments)}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}function X(t){var e=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===H(e)?e:String(e)}const Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(r);if(o){var n=W(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===H(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return K(t)}(this,t)});function u(t,e){var n,r,o,c,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=K(r=i.call(this,t)),a=function(t){var e=t.card,o=t.cardId;Q((n=K(r),W(u.prototype)),"open",n).call(n),r._card=e,r._cardId=o},(c=X(c="open"))in o?Object.defineProperty(o,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[c]=a,r._button=document.querySelector(".popup-confirm__button"),r._handleButtonConfirm=e,r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;Q(W(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",(function(){t._handleButtonConfirm({card:t._card,cardId:t._cardId}),t.close()}))}}])&&$(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(I);function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function tt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Z(o)?o:String(o)),r)}var o}const et=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=n,this._aboutSelector=r,this._avatarSelector=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,about:this._aboutSelector.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;this._nameSelector.textContent=e,this._aboutSelector.textContent=n,r&&(this._avatarSelector.src=r)}}])&&tt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function nt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return rt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var ot,it=new m({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"2a145710-3bc0-4bda-81bf-8857fba682fa","Content-Type":"application/json"}}),ut=new z(r);ut.setEventListeners();var ct=new j(t,a);ct.enableValidation();var at=new j(t,c);at.enableValidation(),Promise.all([it.getInitialCards(),it.getUser()]).then((function(t){var e=nt(t,2),n=e[0],r=e[1],o=n.reverse();(ot=new C({items:o,renderer:yt},".elements__list",r._id)).renderItems(ot)})).catch((function(t){return console.error("Ошибка при получении массива карточек или информации о пользователе ".concat(t))}));var lt=new M(n,(function(t){Promise.all([it.addCard(t.title,t.link),it.getUser()]).then((function(t){var e=nt(t,2),n=e[0],r=e[1];yt({name:n.name,_id:n._id,link:n.link,likes:n.likes,owner:{_id:n.owner._id}},ot,r._id)})).catch((function(t){return console.error("Ошибка при попытке создать новую карточку ".concat(t))})),lt.close()}),t);lt.setEventListeners();var st=new M(e,(function(t){it.updateProfileInfo(t.name,t.about).then((function(t){return t.json()})).then((function(t){return pt.setUserInfo({name:t.name,about:t.about})})).catch((function(t){return console.error("Ошибка при попытке редактировать профиль ".concat(t))})),st.close()}),t);st.setEventListeners();var ft=new Y(o,(function(t){var e=t.card,n=t.cardId;it.deleteCard(n).then(e.removeCardElement())}));ft.setEventListeners();var pt=new et({nameSelector:f,aboutSelector:p,avatarSelector:y});function yt(t,e,n){var r=function(t,e){var n=new S(t,h,(function(){ut.open(t)}),ft.open,(function(t){n.isLiked(t)?(console.log("карта была лайкнута"),it.deleteLike(t).then((function(t){return n.toggleButtonLike(t.likes)}))):(console.log("карта не была лайкнута"),it.addLike(t).then((function(t){return n.toggleButtonLike(t.likes)})))}),e);return n.getCard()}(t,n);e.addItem(r)}i.addEventListener("click",(function(){l.value=pt.getUserInfo().name,s.value=pt.getUserInfo().about,at.resetValidation(),st.open()})),u.addEventListener("click",(function(){ct.resetValidation(),lt.open(),ct.disableButton()})),it.getUser().then((function(t){var e=t.name,n=t.about,r=t.avatar;pt.setUserInfo({name:e,about:n,avatar:r})}))})();