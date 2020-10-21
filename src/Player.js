/**
 * Module for the type Players.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { PlayingCard } from './PlayingCard.js'
import { DiscardPile } from './DiscardPile.js'

/**
 * Represents a player.
 *
 * @class
 */
export class Player {
  /**
   * Returns a card from the playing deck.
   *
   * @param {PlayingCard[]} deck - An array of playingcard objects representing the draw pile.
   * @param {PlayingCard[]} discardDeck - An array of playingcard objects representing a discard deck.
   * @returns {PlayingCard} One object of playingcard.
   */
  takeCard (deck, discardDeck) {
    if (deck.length === 1) {
      Deck.refillDeck(deck, DiscardPile.takeAllCards(discardDeck))
    }
    const playingcard = deck.splice(0, 1)[0]

    if (playingcard.valueOf() === 1) {

    }
  }

  handValue () {
      
  }
}
