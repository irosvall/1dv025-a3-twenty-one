/**
 * Module for the type Players.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { PlayingCard } from './PlayingCard.js'
import { DiscardPile } from './DiscardPile.js'

/**
 * Represents a player.
 *
 * @class
 */
export class Player {
  /**
   * Creates an instance of a player.
   *
   * @param {number} playerIndex - The number of a player.
   */
  constructor (playerIndex) {
    /**
     * A player's name.
     *
     * @type {string}
     */
    this.playerName = `Player #${playerIndex}`

    /**
     * A player's randomized stop value from 16 to 18.
     *
     * @type {number}
     */
    this.stopValue = Math.floor(Math.random() * 3) + 16

    /**
     * The playingcard objects on the player's hand.
     *
     * @type {PlayingCard[]} An array of playingcard objects.
     */
    this.hand = []

    /**
     * The summed value of the player's cards.
     *
     * @type {number}
     */
    this._handValue = 0
  }

  get handValue () {
    return this._handValue
  }

  /**
   * Returns a card from the playing deck.
   *
   * @param {PlayingCard[]} deck - An array of playingcard objects representing the draw pile.
   * @param {PlayingCard[]} discardDeck - An array of playingcard objects representing a discard deck.
   */
  takeCard (deck, discardDeck) {
    if (deck.length === 0) {
      throw new TypeError('No more cards in the draw pile')
    }
    if (deck.length === 1) {
      DiscardPile.refillDeck(deck, discardDeck)
    }
    if (this._handValue === 0) {
      this.hand.push(deck.splice(0, 1)[0])
      this.sumCards()
    }
  }

  /**
   * Sums the player's playingcards values.
   */
  sumCards () {
    this._handValue = this.hand.reduce((value, playingCard) => value + playingCard, 0)
  }
}
