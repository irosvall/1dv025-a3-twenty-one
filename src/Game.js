/**
 * Module for the type Game.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { DrawPile } from './DrawPile.js'

/**
 * Represents the card game 21.
 *
 * @class
 */
export class Game {
  /**
   * Creates an instance of a Game.
   *
   * @param {number} nrOfPlayers - The number of players in the game.
   */
  constructor (nrOfPlayers = 3) {
    /**
     * The number of players in the game.
     *
     * @type {number}
     */
    this.nrOfPlayers = nrOfPlayers
  }

  get nrOfPlayers () {
    return this._nrOfPlayers
  }

  set nrOfPlayers (nrOfPlayers) {
    if (nrOfPlayers === 0) {
      this._nrOfPlayers = 3
    } else if (nrOfPlayers === 20 || nrOfPlayers === 50) {
      this._nrOfPlayers = nrOfPlayers
    } else if (!Number.isInteger(nrOfPlayers) || nrOfPlayers < 1 || nrOfPlayers > 7) {
      throw new TypeError('Invalid number of players')
    } else {
      this._nrOfPlayers = nrOfPlayers
    }
  }

  /**
   * Runs the game.
   *
   * @returns {string} A string that represents the outcome of the game.
   */
  run () {
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

    return console.log('Running' + this.nrOfPlayers)
  }
}
