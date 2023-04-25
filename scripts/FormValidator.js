class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
  }

  enableValidation() {
    const formInputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    const formButton = this._form.querySelector(this._settings.submitButtonSelector);

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    formInputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(formInputs, formButton);
      })
    })
  };

  enableButton(button) {
    button.classList.remove(this._settings.inactiveButtonClass);
    button.removeAttribute('disabled');
  };

  disableButton(button) {
    button.classList.add(this._settings.inactiveButtonClass);
    button.setAttribute('disabled', true);
  };

  _checkInputValidity(input) {
    const currentInputErrorContainer = document.querySelector(`.${input.id}-error`);
    if (input.validity.valid) {
      currentInputErrorContainer.textContent = ''
    } else {
      currentInputErrorContainer.textContent = input.validationMessage;
    }
  };

  _toggleButtonState(inputs, button) {
    if (this._hasInvalidInput(inputs)) {
      this.disableButton(button);
    } else {
      this.enableButton(button);
    };
  };

  _hasInvalidInput(formInputs) {
    return formInputs.some(input => !input.validity.valid);
  };

}

export default FormValidator;
