/**
 * Module for the type ErrorPlayers.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents an error case of invalid number of players.
 *
 * @class
 * @augments Error
 */
export class ErrorPlayers extends Error {
  /**
   * Creates an instance of an invalid number of players error.
   *
   * @param {string} message - The error message.
   */
  constructor (message) {
    super(message)

    /**
     * The class name.
     *
     * @type {string}
     */
    this.name = 'ErrorPlayers'
  }
}
