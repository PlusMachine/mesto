(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__form-field",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},e=document.querySelector(".popup-edit"),n=document.querySelector(".popup-add"),r=document.querySelector(".popup-picture"),o=document.querySelector(".popup-confirm"),i=document.querySelector(".popup-edit-avatar"),u=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),c=document.querySelector(".profile__button"),l=e.querySelector(".popup__form-edit"),s=n.querySelector(".popup__form-add"),f=i.querySelector(".popup__form-edit-avatar"),p=l.querySelector(".popup__form-field_input_name"),y=l.querySelector(".popup__form-field_input_about"),h=f.querySelector(".popup__form-field_input_avatar"),b=(s.querySelector(".popup__form-field_input_title"),s.querySelector(".popup__form-field_input_link"),document.querySelector(".profile__name")),d=document.querySelector(".profile__profession"),m=document.querySelector(".profile__image"),_=document.querySelector(".template-element").content;function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}document.querySelector(".elements__list");const g=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r,this._authorization=r.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"addCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"updateProfileInfo",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"updateAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkResponse)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}const O=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._user=u,this._likes=e.likes,this._template=n,this._element=this._template.querySelector(".elements__element").cloneNode(!0),this._handleCardClick=r,this._handleConfirmPopupOpen=o,this._likeButton=this._element.querySelector(".elements__like-icon"),this._likeSet=i,this._likeCounter=this._element.querySelector(".elements__like-counter"),this._basketButton=this._element.querySelector(".elements__basket"),this._cardImage=this._element.querySelector(".elements__image"),this._cardTitle=this._element.querySelector(".elements__title")}var e,n;return e=t,(n=[{key:"getCard",value:function(){return this._setCardContent(),this._setEventListeners(),this._showBasketButton(),this._checkLikeStatus(),this._element}},{key:"isLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._user}))}},{key:"_checkLikeStatus",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._user||t._likeButton.classList.add("elements__like-icon_active")})),this._likeCounter.textContent=this._likes.length}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){return t._handleLikeButtonClick()})),this._basketButton.addEventListener("click",(function(){return t._handleConfirmPopupOpen({card:t,cardId:t._data._id})})),this._cardImage.addEventListener("click",(function(){return t._handleCardClick()}))}},{key:"_handleLikeButtonClick",value:function(){this._likeSet(this._data._id)}},{key:"toggleButtonLike",value:function(t){this._likeCounter.textContent=t.length,this._likes=t,this._likeButton.classList.toggle("elements__like-icon_active")}},{key:"_setCardContent",value:function(){this._cardTitle.textContent=this._data.name,this._cardImage.src=this._data.link,this._cardImage.alt=this._data.name}},{key:"_showBasketButton",value:function(){this._user===this._data.owner._id&&this._basketButton.classList.add("elements__basket-button_is-visible")}},{key:"removeCardElement",value:function(){this._element.remove(),this._element=null}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var P=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._form.querySelector(this._settings.submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){var t=this;this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableButton",value:function(){this._submitButton.classList.remove(this._settings.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"disableButton",value:function(){this._submitButton.classList.add(this._settings.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"resetValidation",value:function(){this._toggleButtonState(),this._inputList.forEach((function(t){document.querySelector(".".concat(t.id,"-error")).textContent=""}))}},{key:"_checkInputValidity",value:function(t){var e=document.querySelector(".".concat(t.id,"-error"));t.validity.valid?e.textContent="":e.textContent=t.validationMessage}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this.enableButton()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const C=P;function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var T=function(){function t(e,n,r){var o=e.items,i=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._user=r,this._items=o,this._renderer=i,this._container=document.querySelector(n)}var e,n;return e=t,n=[{key:"renderItems",value:function(t){var e=this;this._items.forEach((function(n){e._renderer(n,t,e._user)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}],n&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const I=T;function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}const R=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._handleEscClose=this._handleEscClose.bind(this),this._closeButtonElement=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButtonElement.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target===t._popup&&t.close()}))}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},z(t,e)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}const N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__img"),e._popupImgTitle=e._popup.querySelector(".popup__photo-title"),e}return e=u,(n=[{key:"open",value:function(t){A(V(u.prototype),"open",this).call(this),this._popupImg.src=t.link,this._popupImgTitle.textContent=t.name,this._popupImg.alt=t.name}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(R);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},H.apply(this,arguments)}function M(t,e){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},M(t,e)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(r);if(o){var n=$(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===J(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleSubmit=e,r._settings=n,r._form=r._popup.querySelector(r._settings.formSelector),r._inputList=r._popup.querySelectorAll(r._settings.inputSelector),r._submitButton=r._form.querySelector(".popup__button"),r._buttonDefaultText=r._submitButton.textContent,r}return e=u,(n=[{key:"getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;H($(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="".concat(t._submitButton.textContent,"..."),t._handleSubmit(t.getInputValues())}))}},{key:"setDefaultButtonText",value:function(){this._submitButton.textContent=this._buttonDefaultText}},{key:"close",value:function(){H($(u.prototype),"close",this).call(this),this._form.reset()}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(R);const K=F;function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,et(r.key),r)}}function X(t,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},X(t,e)}function Y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z(){return Z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=tt(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},Z.apply(this,arguments)}function tt(t){return tt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},tt(t)}function et(t){var e=function(t,e){if("object"!==Q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===Q(e)?e:String(e)}const nt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&X(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=tt(r);if(o){var n=tt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Y(t)}(this,t)});function u(t,e){var n,r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=Y(r=i.call(this,t)),c=function(t){var e=t.card,o=t.cardId;Z((n=Y(r),tt(u.prototype)),"open",n).call(n),r._card=e,r._cardId=o},(a=et(a="open"))in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r._button=document.querySelector(".popup-confirm__button"),r._handleButtonConfirm=e,r._buttonDefaultText=r._button.textContent,r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;Z(tt(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",(function(){t._handleButtonConfirm({card:t._card,cardId:t._cardId}),t._button.textContent="".concat(t._button.textContent,"...")}))}},{key:"setDefaultButtonText",value:function(){this._button.textContent=this._buttonDefaultText}}])&&W(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(R);function rt(t){return rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(t)}function ot(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==rt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==rt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===rt(o)?o:String(o)),r)}var o}const it=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=n,this._aboutSelector=r,this._avatarSelector=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,about:this._aboutSelector.textContent,avatar:this._avatarSelector.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;this._nameSelector.textContent=e,this._aboutSelector.textContent=n,this._avatarSelector.src=r}}])&&ot(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function ut(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return at(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?at(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function at(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var ct,lt=new g({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"2a145710-3bc0-4bda-81bf-8857fba682fa","Content-Type":"application/json"}}),st=new N(r);st.setEventListeners();var ft=new C(t,s);ft.enableValidation();var pt=new C(t,l);pt.enableValidation();var yt=new C(t,f);yt.enableValidation(),Promise.all([lt.getInitialCards(),lt.getUser()]).then((function(t){var e=ut(t,2),n=e[0],r=e[1],o=n.reverse();(ct=new I({items:o,renderer:vt},".elements__list",r._id)).renderItems(ct)})).catch((function(t){return console.error("Ошибка при получении массива карточек или информации о пользователе ".concat(t))}));var ht=new K(n,(function(t){Promise.all([lt.addCard(t.title,t.link),lt.getUser()]).then((function(t){var e=ut(t,2),n=e[0],r=e[1];vt({name:n.name,_id:n._id,link:n.link,likes:n.likes,owner:{_id:n.owner._id}},ct,r._id),ht.setDefaultButtonText(),ht.close()})).catch((function(t){return console.error("Ошибка при попытке создать новую карточку ".concat(t))}))}),t);ht.setEventListeners();var bt=new K(e,(function(t){lt.updateProfileInfo(t.name,t.about).then((function(t){_t.setUserInfo({name:t.name,about:t.about,avatar:t.avatar}),bt.setDefaultButtonText(),bt.close()})).catch((function(t){return console.error("Ошибка при попытке редактировать профиль ".concat(t))}))}),t);bt.setEventListeners();var dt=new K(i,(function(t){lt.updateAvatar(t.avatar).then((function(t){_t.setUserInfo({name:t.name,about:t.about,avatar:t.avatar}),dt.setDefaultButtonText(),dt.close()})).catch((function(t){return console.error("Ошибка при попытке сменить аватар ".concat(t))}))}),t);dt.setEventListeners();var mt=new nt(o,(function(t){var e=t.card,n=t.cardId;lt.deleteCard(n).then((function(){e.removeCardElement(),mt.close(),mt.setDefaultButtonText()}))}));mt.setEventListeners();var _t=new it({nameSelector:b,aboutSelector:d,avatarSelector:m});function vt(t,e,n){var r=function(t,e){var n=new O(t,_,(function(){st.open(t)}),mt.open,(function(t){n.isLiked(t)?lt.deleteLike(t).then((function(t){return n.toggleButtonLike(t.likes)})).catch((function(t){return console.error("Ошибка при снятии лайка ".concat(t))})):lt.addLike(t).then((function(t){return n.toggleButtonLike(t.likes)})).catch((function(t){return console.error("Ошибка при попытке поставить лайк ".concat(t))}))}),e);return n.getCard()}(t,n);e.addItem(r)}lt.getUser().then((function(t){_t.setUserInfo({name:t.name,about:t.about,avatar:t.avatar})})).catch((function(t){return console.error("Ошибка при загрузке данных ".concat(t))})),u.addEventListener("click",(function(){p.value=_t.getUserInfo().name,y.value=_t.getUserInfo().about,pt.resetValidation(),bt.open()})),a.addEventListener("click",(function(){ft.resetValidation(),ht.open(),ft.disableButton()})),c.addEventListener("click",(function(){h.value=_t.getUserInfo().avatar,yt.resetValidation(),dt.open()}))})();