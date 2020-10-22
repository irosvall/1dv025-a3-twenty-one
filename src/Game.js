/**
 * Module for the type Game.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { DiscardPile } from './DiscardPile.js'
import { Player } from './Player.js'

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
    this.deck = Deck.create()
    this.discardDeck = []
    this.players = []
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
    Deck.shuffle(this.deck)

    const hand = []

    const player = new Player()

    for (let i = 0; i < this.deck.length - 2; i++) {
      hand.push(player.takeCard(this.deck, this.discardDeck))
    }

    console.log(this.deck)
    console.log(hand)
    console.log(this.discardDeck)

    DiscardPile.throwCards(this.discardDeck, hand)

    console.log('after thrown cards')

    console.log(hand)
    console.log(this.discardDeck)

    return console.log('Running' + this.nrOfPlayers)
  }
}
