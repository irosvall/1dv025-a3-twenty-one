/**
 * Module for the type Game.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Players } from './Players.js'
import { Deck } from './Deck.js'
import { DrawPile } from './DrawPile.js'

/**
 * Represents the card game 21.
 *
 * @class
 */
export class Game {
  /**
   * Runs the game.
   *
   * @param {number} nrOfPlayers - The number of players in the game.
   * @returns {string} A string that represents the outcome of the game.
   */
  static run (nrOfPlayers) {
    const players = new Players(nrOfPlayers).nrOfPlayers
    const deck = Deck.create()
    const discardDeck = []

    Deck.shuffle(deck)

    const hand = []

    for (let i = 0; i < deck.length - 2; i++) {
      hand.push(DrawPile.takeCard(deck, discardDeck))
    }

    console.log(deck)
    console.log(hand)
    console.log(discardDeck)

    return console.log('Running' + players)
  }
}
