/**
 * Module for the DrawPile.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { PlayingCard } from './PlayingCard.js'
import { DiscardPile } from './DiscardPile.js'

/**
 * Represents a card drawpile.
 *
 * @class
 */
export class DrawPile {
  /**
   * Refills the draw pile and shuffle it.
   *
   * @param {PlayingCard[]} deck - An array of playingcard objects representing the draw pile.
   * @param {PlayingCard[]} playingcards - An array of playingcard objects.
   */
  static refillCards (deck, playingcards) {
    deck.push(playingcards)
    Deck.shuffle(playingcards)
  }

  /**
   * Returns a card from the draw pile.
   *
   * @param {PlayingCard[]} deck - An array of playingcard objects representing the draw pile.
   * @param {PlayingCard[]} discardDeck - An array of playingcard objects representing a discard deck.
   * @returns {PlayingCard} One object of playingcard.
   */
  static takeCard (deck, discardDeck) {
    if (deck.length === 1) {
      this.refillCards(deck, DiscardPile.takeAllCards(discardDeck))
    }
    return deck.splice(0, 1)[0]
  }
}
