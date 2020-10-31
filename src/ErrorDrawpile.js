/**
 * Module for the type ErrorDrawpile.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents an error case of when the draw pile gets empty of cards.
 *
 * @class
 * @augments Error
 */
export class ErrorDrawpile extends Error {
  /**
   * Creates an instance of an error case when the draw pile gets empty of cards.
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
    this.name = 'ErrorDrawpile'
  }
}
