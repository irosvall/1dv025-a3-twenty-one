/**
 * Module for the type Dealer.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Player } from './Player.js'

/**
 * Represents a dealer.
 *
 * @class
 * @augments Player
 */
export class Dealer extends Player {
  /**
   * Creates an instance of a Dealer.
   *
   * @param {string} name -  The dealer's name.
   */
  constructor (name = 'Dealer') {
    super(name)

    /**
     * The dealer's name.
     *
     * @type {string}
     */
    this.name = `${name}   `
  }
}
