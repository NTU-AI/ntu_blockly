/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Wrapper functions around JS functions for showing
 * alert/confirmation dialogs.
 */

'use strict';

/**
 * Wrapper functions around JS functions for showing alert/confirmation dialogs.
 * @namespace Blockly.dialog
 */
goog.module('Blockly.dialog');


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
        accept: 'OK',
        bodyClass: 'dialog-open',
        cancel: 'Cancel',
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
        <button${this.dialogSupported ? '' : ` type="button"`} data-ref="cancel" value="cancel"></button>
        <button${this.dialogSupported ? '' : ` type="button"`} data-ref="accept" value="default"></button>
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

let alertImplementation = function(message, opt_callback) {
  window.alert(message);
  if (opt_callback) {
    opt_callback();
  }
};

let confirmImplementation = function(message, callback) {
  callback(window.confirm(message));
};

let promptImplementation = async function(message, defaultValue, callback) {
  let drops_dialog = new Dialog();
  let r = undefined;
  await drops_dialog.prompt(message, defaultValue).then( (res) => {r = res.prompt});
  callback(r);
};

/**
 * Wrapper to window.alert() that app developers may override via setAlert to
 * provide alternatives to the modal browser window.
 * @param {string} message The message to display to the user.
 * @param {function()=} opt_callback The callback when the alert is dismissed.
 * @alias Blockly.dialog.alert
 */
const alert = function(message, opt_callback) {
  alertImplementation(message, opt_callback);
};
exports.alert = alert;

/**
 * Sets the function to be run when Blockly.dialog.alert() is called.
 * @param {!function(string, function()=)} alertFunction The function to be run.
 * @see Blockly.dialog.alert
 * @alias Blockly.dialog.setAlert
 */
const setAlert = function(alertFunction) {
  alertImplementation = alertFunction;
};
exports.setAlert = setAlert;

/**
 * Wrapper to window.confirm() that app developers may override via setConfirm
 * to provide alternatives to the modal browser window.
 * @param {string} message The message to display to the user.
 * @param {!function(boolean)} callback The callback for handling user response.
 * @alias Blockly.dialog.confirm
 */
const confirm = function(message, callback) {
  confirmImplementation(message, callback);
};
exports.confirm = confirm;

/**
 * Sets the function to be run when Blockly.dialog.confirm() is called.
 * @param {!function(string, !function(boolean))} confirmFunction The function
 *    to be run.
 * @see Blockly.dialog.confirm
 * @alias Blockly.dialog.setConfirm
 */
const setConfirm = function(confirmFunction) {
  confirmImplementation = confirmFunction;
};
exports.setConfirm = setConfirm;

/**
 * Wrapper to window.prompt() that app developers may override via setPrompt to
 * provide alternatives to the modal browser window. Built-in browser prompts
 * are often used for better text input experience on mobile device. We strongly
 * recommend testing mobile when overriding this.
 * @param {string} message The message to display to the user.
 * @param {string} defaultValue The value to initialize the prompt with.
 * @param {!function(?string)} callback The callback for handling user response.
 * @alias Blockly.dialog.prompt
 */
const prompt = function(message, defaultValue, callback) {
  promptImplementation(message, defaultValue, callback);
};
exports.prompt = prompt;

/**
 * Sets the function to be run when Blockly.dialog.prompt() is called.
 * @param {!function(string, string, !function(?string))} promptFunction The
 *    function to be run.
 * @see Blockly.dialog.prompt
 * @alias Blockly.dialog.setPrompt
 */
const setPrompt = function(promptFunction) {
  promptImplementation = promptFunction;
};
exports.setPrompt = setPrompt;
