/**
 * Module for the type Players.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { PlayingCard } from './PlayingCard.js'
import { DiscardPile } from './DiscardPile.js'
import { ErrorDrawpile } from './ErrorDrawpile.js'

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
    this.name = `Player #${playerIndex}`

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

  /**
   * Get a player's hand value.
   *
   * @returns {number} The hand value.
   */
  get handValue () {
    return this._handValue
  }

  /**
   * Player gets a card from the playing deck.
   *
   * @param {PlayingCard[]} deck - An array of playingcard objects representing the draw pile.
   * @param {PlayingCard[]} discardDeck - An array of playingcard objects representing a discard deck.
   * @throws {ErrorDrawpile} The deck must contain 1 or more cards.
   */
  takeCard (deck, discardDeck) {
    if (deck.length === 0) {
      throw new ErrorDrawpile('No more cards in the draw pile')
    }
    if (deck.length === 1) {
      DiscardPile.refillDeck(deck, discardDeck)
    }

    this.hand.push(deck.splice(0, 1)[0])
    this.sumCards()
  }

  /**
   * Take cards till reaches the stop value or 5 cards.
   *
   * @param {PlayingCard[]} deck - An array of playingcard objects representing the draw pile.
   * @param {PlayingCard[]} discardDeck - An array of playingcard objects representing a discard deck.
   * @throws {ErrorDrawpile} The deck must contain 1 or more cards.
   */
  takeSeveralCards (deck, discardDeck) {
    while (this._handValue < this.stopValue && this.hand.length < 5) {
      this.takeCard(deck, discardDeck)
    }
  }

  /**
   * Sums the player's playing card's values.
   */
  sumCards () {
    // Creates new array of playing cards without aces.
    const noAceArray = this.hand.filter(playingCard => playingCard.valueOf() !== 1)

    // The hand value becomes the sum of the playing cards without aces.
    this._handValue = noAceArray.reduce((value, playingCard) => value + playingCard, 0)

    // If the hand includes aces then an array with only the aces gets created.
    if (noAceArray.length !== this.hand.length) {
      const aces = this.hand.filter(playingCard => playingCard.valueOf() === 1)

      // Depending on what is benefitial for the hand value the aces value's are either all 1 or one has value 14.
      if (this._handValue + 14 + aces.length - 1 <= 21) {
        this._handValue += 14 + aces.length - 1
      } else {
        this._handValue += aces.length
      }
    }
  }

  /**
   * Resets the hand value to 0.
   */
  resetHandValue () {
    this._handValue = 0
  }

  /**
   * Returns a string representing the player's cards and hand value.
   *
   * @returns {string} A string representing the player's cards and hand value.
   */
  toString () {
    const summary = `${this.name}\t: ${this.hand.join(' ')} (${this.handValue})`

    if (this.handValue > 21) {
      return summary + ' BUSTED!'
    } else {
      return summary
    }
  }
}
