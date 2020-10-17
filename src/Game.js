/**
 * Module for the type Game.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents the card game 21.
 *
 * @class
 */
export class Game {
  /**
   * Creates an instance of Game.
   *
   * @param {number} nrOfPlayers - The number of players in the game.
   * @class
   */
  constructor (nrOfPlayers = 3) {
    /**
     * The number of players in the game.
     *
     * @type {number}
     */
    this.nrOfPlayers = nrOfPlayers
  }

  get nrOfPlayers () {
    return this._nrOfPlayers
  }

  set nrOfPlayers (nrOfPlayers) {
    if (Number.isNaN(nrOfPlayers)) {
      this._nrOfPlayers = 3
    } else if (!Number.isInteger(nrOfPlayers) || nrOfPlayers < 1 || nrOfPlayers > 50) {
      throw new TypeError('Invalid number of players')
    } else {
      this._nrOfPlayers = nrOfPlayers
    }
  }

  run () {
    console.log('Running' + this._nrOfPlayers)
  }
}
