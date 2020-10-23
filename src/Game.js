/**
 * Module for the type Game.
 *
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { DiscardPile } from './DiscardPile.js'
import { Player } from './Player.js'
import { PlayingCard } from './PlayingCard.js'

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

    /**
     * The deck/drawpile in the game.
     *
     * @type {PlayingCard[]} An array of PlayingCard objects.
     */
    this.deck = Deck.create()

    /**
     * The discard deck/pile in the game.
     *
     * @type {PlayingCard[]} An array of PlayingCard objects.
     */
    this.discardDeck = []

    /**
     * The players in the game.
     *
     * @type {Player[]} An array of Player objects.
     */
    this.players = []
  }

  /**
   * Get the number of players.
   *
   * @returns {number} The number of players.
   */
  get nrOfPlayers () {
    return this._nrOfPlayers
  }

  /**
   * Set the number of players.
   *
   * @param {number} nrOfPlayers - The number of players.
   */
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

    console.log(this.deck)
    console.log(hand)
    console.log(this.discardDeck)

    DiscardPile.refillDeck(this.deck, this.discardDeck)

    console.log('after refilling deck')
    console.log(this.deck)
    console.log(hand)
    console.log(this.discardDeck)

    this.makePlayers()
    return console.log('Running' + this.nrOfPlayers)
  }

  makePlayers () {
    for (let i = 1; i <= this.nrOfPlayers; i++) {
      this.players.push(new Player(i))
    }
  }
}
