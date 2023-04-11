const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach(form => {
    setEventListeners(form, config)
  })
};

const toggleButtonState = function (inputs, button, config) {
  if (hasInvalidInput(inputs)) {
    disableButton(button, config);
  } else {
    enableButton(button, config);
  };
};

const setEventListeners = (formToValidate, config) => {
  const formInputs = Array.from(formToValidate.querySelectorAll(config.inputSelector));
  const formButton = formToValidate.querySelector(config.submitButtonSelector);

  formToValidate.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input);
      toggleButtonState(formInputs, formButton, config);
    })
  })
};

const checkInputValidity = (input) => {
  const currentInputErrorContainer = document.querySelector(`.${input.id}-error`);
  if (input.validity.valid) {
    currentInputErrorContainer.textContent = ''
  } else {
    currentInputErrorContainer.textContent = input.validationMessage;
  }
};

const hasInvalidInput = (formInputs) => {
  return formInputs.some(input => !input.validity.valid);
};

const enableButton = (button, config) => {
  button.classList.remove(config.inactiveButtonClass);
  button.removeAttribute('disabled');
};

const disableButton = (button, config) => {
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', true);
};

enableValidation(config);
