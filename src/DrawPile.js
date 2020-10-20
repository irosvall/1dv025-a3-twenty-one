/**
 * Module for the DrawPile.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a card drawpile.
 *
 * @class
 */
export class DrawPile {
  /**
   * Refills the draw pile and shuffle it.
   *
   * @param {PlayingCard[]} deck - An array of playingcard objects.
   * @param {PlayingCard[]} playingcards - An array of playingcard objects.
   */
  static refillCards (deck, playingcards) {
    deck.push(playingcards)
    Deck.shuffle(playingcards)
  }

  /**
   * Returns a card from the draw pile.
   *
   * @param {PlayingCard[]} deck - An array of playingcard objects.
   * @returns {PlayingCard[]} An array with one object of playingcard.
   */
  static takeCard (deck) {
    if (deck.length === 1) {
      this.refillCards(deck, )
    }
    return deck.splice(0, 1)
  }
}
