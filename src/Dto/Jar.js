'use strict';

const cc = require('currency-codes');

class Account {
  /**
   * @param {string} id
   * @param {int} balance
   * @param {string} title
   * @param {int} currencyCode
   * @param {string} description
   * @param {string} goal
   */
  constructor({ id, balance, title, currencyCode, description, goal }) {
    this._id = id;
    this._balance = balance;
    this._title = title;
    this._currencyCode = cc.number(currencyCode);

    if (typeof this._currencyCode === 'undefined') {
      throw new Error(`Invalid currencyCode value "${currencyCode}"`);
    }

    this._description = description;
    this._goal = goal;
  }

  /**
   * @returns {string}
   */
  get id() {
    return this._id;
  }

  /**
   * @returns {int}
   */
  get balance() {
    return this._balance;
  }

  /**
   * @returns {string}
   */
  get title() {
    return this._title;
  }

  /**
   * @returns {CurrencyCodeRecord}
   */
  get currencyCode() {
    return this._currencyCode;
  }

  /**
   * @returns {string}
   */
  get description() {
    return this._description;
  }

  /**
   * @returns {string}
   */
   get goal() {
    return this._goal;
  }
}

module.exports = Account;
