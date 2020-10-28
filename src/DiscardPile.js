/**
 * Module for the DiscardPile.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { PlayingCard } from './PlayingCard.js'
import { Deck } from './Deck.js'

/**
 * Represents a card discardpile.
 *
 * @class
 */
export class DiscardPile {
  /**
   * Throws cards to the discard pile.
   *
   * @param {PlayingCard[]} discardDeck - An array of playingcard objects representing a discard deck.
   * @param {PlayingCard[]} playingcards - An array of playingcard objects representing a players hand.
   */
  static throwCards (discardDeck, playingcards) {
    for (const playingcard of playingcards) {
      discardDeck.push(playingcard)
    }

    // Empty the player's hand.
    playingcards.splice(0, playingcards.length)
  }

  /**
   * Refills the deck from the discard pile and shuffle it.
   *
   * @param {PlayingCard[]} deck - An array of playingcard objects representing the draw pile.
   * @param {PlayingCard[]} discardDeck - An array of playingcard objects representing a discard deck.
   */
  static refillDeck (deck, discardDeck) {
    for (const playingcard of discardDeck) {
      deck.push(playingcard)
    }

    // Empty the discard pile.
    discardDeck.splice(0, discardDeck.length)

    Deck.shuffle(deck)
  }
}
