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
    this.stopValue = Math.floor(Math.random * 2) + 16

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
    this.handValue = 0
  }

  /**
   * Returns a card from the playing deck.
   *
   * @param {PlayingCard[]} deck - An array of playingcard objects representing the draw pile.
   * @param {PlayingCard[]} discardDeck - An array of playingcard objects representing a discard deck.
   * @returns {PlayingCard} One object of playingcard.
   */
  takeCard (deck, discardDeck) {
    if (deck.length === 1) {
      DiscardPile.refillDeck(deck, discardDeck)
    }
    const playingcard = deck.splice(0, 1)[0]

    if (playingcard.valueOf() === 1) {

    }
    return playingcard
  }

  sumCards () {

  }
}
