/**
 * Module for the type Dealer.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Player } from './Player.js'
import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a player.
 *
 * @class
 * @augments Player
 */
export class Dealer extends Player {
  /**
   * Creates an instance of a Dealer.
   *
   * @param {string} name -  The dealer's name.
   * @param {number} stopValue - The dealer's randomized stop value from 16 to 18.
   * @param {PlayingCard[]} hand - An array of playingcard objects.
   * @param {number} _handValue - The summed value of The dealer's cards.
   */
  constructor (name, stopValue, hand, _handValue) {
    super(name, stopValue, hand, _handValue)

    /**
     * The dealer's name.
     *
     * @type {string}
     */
    this.name = 'Dealer   '
  }
}
