const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach(form => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(form, config)
  })
};

const setEventListeners = (formToValidate, config) => {
  const formInputs = Array.from(formToValidate.querySelectorAll(config.inputSelector));
  const formButton = formToValidate.querySelector(config.submitButtonSelector);

  if (hasInvalidInput(formInputs)) {
    disableButton(formButton, config);
  } else {
    enableButton(formButton, config);
  };

  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input);
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, config);
      } else {
        enableButton(formButton, config);
      }
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
  button.setAttribute('disabled', true);
};

const disableButton = (button, config) => {
  button.classList.add(config.inactiveButtonClass);
  button.removeAttribute('disabled');
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
