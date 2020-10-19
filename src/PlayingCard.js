/**
 * Module for the type PlayingCard.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Ranks } from './Ranks.js'
import { Suits } from './Suits.js'

/**
 * Represents playingcards.
 *
 * @class PlayingCard
 */
export class PlayingCard {
  /**
   * Creates an instance of PlayingCard.
   *
   * @param {Ranks} rank - The playing card's rank.
   * @param {Suits} suit - The playing card's suit.
   * @class
   */
  constructor (rank, suit) {
    /**
     * The playing card's rank.
     *
     * @type {Ranks}
     */
    this.rank = rank

    /**
     * The playing card's suit.
     *
     * @type {Suits}
     */
    this.suit = suit

    // Make the object immutable.
    Object.freeze(this)
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} A string that represents the current object.
   */
  toString () {
    // If Ace, Jack, Queen, or King use the first character; otherwise the rank.
    return (this.rank < 2 || this.rank > 10
      ? (Object.keys(Ranks)[this.rank - 1]).substr(0, 1)
      : this.rank) +
      this.suit
  }

  /**
   * Returns the primitive value of the specified object.
   *
   * @returns {number} The primitive value of the specified object.
   */
  valueOf () {
    return Number(this.rank)
  }
}
