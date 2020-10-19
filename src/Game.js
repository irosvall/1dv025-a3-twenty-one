/**
 * Module for the type Game.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Players } from './Players.js'

/**
 * Represents the card game 21.
 *
 * @class
 */
export class Game {
  /**
   * Runs the game.
   *
   * @param {number} nrOfPlayers - The number of players in the game.
   * @returns {string} A string that represents the outcome of the game.
   */
  static run (nrOfPlayers) {
    const players = new Players(nrOfPlayers)

    return console.log('Running' + players.nrOfPlayers)
  }
}
