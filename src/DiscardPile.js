/**
 * Module for the DiscardPile.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a card discardpile.
 *
 * @class
 */
export class DiscardPile {
  /**
   * Throws cards in the discard pile.
   *
   * @param {PlayingCard[]} discardDeck - An array of playingcard objects representing a discard deck.
   * @param {PlayingCard[]} playingcards - An array of playingcard objects.
   */
  static throwCards (discardDeck, playingcards) {
    discardDeck.push(playingcards.splice(0, playingcards.length))
  }

  /**
   * Return all cards from the discard pile.
   *
   * @param {PlayingCard[]} discardDeck - An array of playingcard objects representing a discard deck.
   * @returns {PlayingCard[]} An array of playingcard objects.
   */
  static takeAllCards (discardDeck) {
    return discardDeck.splice(0, discardDeck.length)
  }
}
