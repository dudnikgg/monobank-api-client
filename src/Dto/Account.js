'use strict';

const cc = require('currency-codes');

class Account {
  /**
   * @param {string} id
   * @param {int} balance
   * @param {int} creditLimit
   * @param {int} currencyCode
   * @param {string} type
   * @param {string} cashbackType
   */
  constructor({ id, balance, creditLimit, currencyCode, type, cashbackType }) {
    this._id = id;
    this._balance = balance;
    this._creditLimit = creditLimit;
    this._type = type;
    this._currencyCode = cc.number(currencyCode);

    if (typeof this._currencyCode === 'undefined') {
      throw new Error(`Invalid currencyCode value "${currencyCode}"`);
    }

    this._cashbackType = cashbackType;
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
   * @returns {int}
   */
  get creditLimit() {
    return this._creditLimit;
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
   get type() {
    return this._type;
  }

  /**
   * @returns {string}
   */
  get cashbackType() {
    return this._cashbackType;
  }
}

module.exports = Account;
