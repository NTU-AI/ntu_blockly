/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Former goog.module ID: Blockly.dialog
const {Msg} = goog.require('Blockly.Msg');


/**
 * Dialog module.
 * @module dialog.js
 * @version 1.0.0
 * @summary 02-01-2022
 * @author Mads Stoumann
 * @description Custom versions of `alert`, `confirm` and `prompt`, using `<dialog>`
 */
class Dialog {
  constructor(settings = {}) {
    this.settings = Object.assign(
      {
        accept: Msg['DIALOG_OK'], // Adicionar DIALOG_CONFIRM em blockly/msg 
        bodyClass: 'dialog-open',
        cancel: Msg['DIALOG_CANCEL'],
        dialogClass: '',
        message: '',
        soundAccept: '',
        soundOpen: '',
        template: ''
      },
      settings
    )
    this.init()
  }

  collectFormData(formData) {
    const object = {};
    formData.forEach((value, key) => {
      if (!Reflect.has(object, key)) {
        object[key] = value
        return
      }
      if (!Array.isArray(object[key])) {
        object[key] = [object[key]]
      }
      object[key].push(value)
    })
    return object
  }

  getFocusable() {
    return [...this.dialog.querySelectorAll('button,[href],select,textarea,input:not([type="hidden"]),[tabindex]:not([tabindex="-1"])')]
  }

  init() {
    this.dialogSupported = typeof HTMLDialogElement === 'function'
    this.dialog = window.document.createElement('dialog')
    this.dialog.role = 'dialog'
    this.dialog.dataset.component = this.dialogSupported ? 'dialog' : 'no-dialog';
    this.dialog.innerHTML = `
    <form method="dialog" data-ref="form">
      <fieldset data-ref="fieldset" role="document">
        <legend data-ref="message" id="${(Math.round(Date.now())).toString(36)}"></legend>
        <div data-ref="template"></div>
      </fieldset>
      <menu>
        <button${this.dialogSupported ? '' : ` type="button"`} data-ref="accept" value="default"></button>
        <button${this.dialogSupported ? '' : ` type="button"`} data-ref="cancel" value="cancel"></button>
      </menu>
      <audio data-ref="soundAccept"></audio>
      <audio data-ref="soundOpen"></audio>
    </form>`
    window.document.body.appendChild(this.dialog)

    this.elements = {}
    this.focusable = []
    this.dialog.querySelectorAll('[data-ref]').forEach(el => this.elements[el.dataset.ref] = el)
    this.dialog.setAttribute('aria-labelledby', this.elements.message.id)
    this.elements.cancel.addEventListener('click', () => { this.dialog.dispatchEvent(new Event('cancel')) })
    this.dialog.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        if (!this.dialogSupported) e.preventDefault()
        this.elements.accept.dispatchEvent(new Event('click'))
      }
      if (e.key === 'Escape') this.dialog.dispatchEvent(new Event('cancel'))
      if (e.key === 'Tab') {
        e.preventDefault()
        const len =  this.focusable.length - 1;
        let index = this.focusable.indexOf(e.target);
        index = e.shiftKey ? index - 1 : index + 1;
        if (index < 0) index = len;
        if (index > len) index = 0;
        this.focusable[index].focus();
      }
    })
    this.toggle()
  }

  open(settings = {}) {
    const dialog = Object.assign({}, this.settings, settings)
    this.dialog.className = dialog.dialogClass || ''
    this.elements.accept.innerText = dialog.accept
    this.elements.cancel.innerText = dialog.cancel
    this.elements.cancel.hidden = dialog.cancel === ''
    this.elements.message.innerText = dialog.message
    this.elements.soundAccept.src = dialog.soundAccept || ''
    this.elements.soundOpen.src = dialog.soundOpen || ''
    this.elements.target = dialog.target || ''
    this.elements.template.innerHTML = dialog.template || ''

    this.focusable = this.getFocusable()
    this.hasFormData = this.elements.fieldset.elements.length > 0

    if (dialog.soundOpen) {
      this.elements.soundOpen.play()
    }

    this.toggle(true)

    if (this.hasFormData) {
      this.focusable[0].focus()
      this.focusable[0].select()
    }
    else {
      this.elements.accept.focus()
    }
  }

  toggle(open = false) {
    if (this.dialogSupported && open) this.dialog.showModal()
    if (!this.dialogSupported) {
      window.document.body.classList.toggle(this.settings.bodyClass, open)
      this.dialog.hidden = !open
      if (this.elements.target && !open) {
        this.elements.target.focus()
      }
    }
  }

  waitForUser() {
    return new Promise(resolve => {
      this.dialog.addEventListener('cancel', () => { 
        this.toggle()
        resolve(false)
      }, { once: true })
      this.elements.accept.addEventListener('click', () => {
        let value = this.hasFormData ? this.collectFormData(new FormData(this.elements.form)) : true;
        if (this.elements.soundAccept.getAttribute('src').length > 0) this.elements.soundAccept.play()
        this.toggle()
        resolve(value)
      }, { once: true })
    })
  }

  alert(message, config = { target: event.target }) {
    const settings = Object.assign({}, config, { cancel: '', message, template: '' })
    this.open(settings)
    return this.waitForUser()
  }

  confirm(message, config = { target: event.target }) {
    const settings = Object.assign({}, config, { message, template: '' })
    this.open(settings)
    return this.waitForUser()
  }

  prompt(message, value, config = { target: event.target }) {
    console.log(event.target);
    const template = `<label aria-label="${message}"><input type="text" name="prompt" value="${value}"></label>`
    const settings = Object.assign({}, config, { message, template })
    this.open(settings)
    return this.waitForUser()
  }
}

let alertImplementation = function (
  message: string,
  opt_callback?: () => void,
) {
  window.alert(message);
  if (opt_callback) {
    opt_callback();
  }
};

let confirmImplementation = function (
  message: string,
  callback: (result: boolean) => void,
) {
  callback(window.confirm(message));
};

let promptImplementation = async function (
  message: string,
  defaultValue: string,
  callback: (result: string | null) => void,
) {
  //callback(window.prompt(message, defaultValue));
  let drops_dialog = new Dialog();
  let r = undefined;
  await drops_dialog.prompt(message, defaultValue).then( (res) => {r = res.prompt});
  //console.log(r);
  callback(r);
};

/**
 * Wrapper to window.alert() that app developers may override via setAlert to
 * provide alternatives to the modal browser window.
 *
 * @param message The message to display to the user.
 * @param opt_callback The callback when the alert is dismissed.
 */
export function alert(message: string, opt_callback?: () => void) {
  alertImplementation(message, opt_callback);
}

/**
 * Sets the function to be run when Blockly.dialog.alert() is called.
 *
 * @param alertFunction The function to be run.
 * @see Blockly.dialog.alert
 */
export function setAlert(alertFunction: (p1: string, p2?: () => void) => void) {
  alertImplementation = alertFunction;
}

/**
 * Wrapper to window.confirm() that app developers may override via setConfirm
 * to provide alternatives to the modal browser window.
 *
 * @param message The message to display to the user.
 * @param callback The callback for handling user response.
 */
export function confirm(message: string, callback: (p1: boolean) => void) {
  TEST_ONLY.confirmInternal(message, callback);
}

/**
 * Private version of confirm for stubbing in tests.
 */
function confirmInternal(message: string, callback: (p1: boolean) => void) {
  confirmImplementation(message, callback);
}

/**
 * Sets the function to be run when Blockly.dialog.confirm() is called.
 *
 * @param confirmFunction The function to be run.
 * @see Blockly.dialog.confirm
 */
export function setConfirm(
  confirmFunction: (p1: string, p2: (p1: boolean) => void) => void,
) {
  confirmImplementation = confirmFunction;
}

/**
 * Wrapper to window.prompt() that app developers may override via setPrompt to
 * provide alternatives to the modal browser window. Built-in browser prompts
 * are often used for better text input experience on mobile device. We strongly
 * recommend testing mobile when overriding this.
 *
 * @param message The message to display to the user.
 * @param defaultValue The value to initialize the prompt with.
 * @param callback The callback for handling user response.
 */
export function prompt(
  message: string,
  defaultValue: string,
  callback: (p1: string | null) => void,
) {
  promptImplementation(message, defaultValue, callback);
}

/**
 * Sets the function to be run when Blockly.dialog.prompt() is called.
 *
 * @param promptFunction The function to be run.
 * @see Blockly.dialog.prompt
 */
export function setPrompt(
  promptFunction: (
    p1: string,
    p2: string,
    p3: (p1: string | null) => void,
  ) => void,
) {
  promptImplementation = promptFunction;
}

export const TEST_ONLY = {
  confirmInternal,
};
