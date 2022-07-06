'use strict';

class UserInfo {
  /**
   * @param {string} name
   * @param {Account[]} accounts
   */
  constructor({ name, accounts, clientId, jars }) {
    this._clientId = clientId;
    this._jars = jars;
    this._name = name;
    this._accounts = accounts;
  }

  /**
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {Account[]}
   */
  get accounts() {
    return this._accounts;
  }

  /**
   * @returns {Account[]}
   */
   get clientId() {
    return this._clientId;
  }

  /**
   * @returns {Account[]}
   */
   get jars() {
    return this._jars;
  }
}

module.exports = UserInfo;
