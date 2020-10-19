/**
 * Module for the type Players.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents players.
 *
 * @class
 */
export class Players {
/**
 * Creates an instance of players.
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
    if (nrOfPlayers === 0) {
      this._nrOfPlayers = 3
    } else if (nrOfPlayers === 20 || nrOfPlayers === 50) {
      this._nrOfPlayers = nrOfPlayers
    } else if (!Number.isInteger(nrOfPlayers) || nrOfPlayers < 1 || nrOfPlayers > 7) {
      throw new TypeError('Invalid number of players')
    } else {
      this._nrOfPlayers = nrOfPlayers
    }
  }
}
