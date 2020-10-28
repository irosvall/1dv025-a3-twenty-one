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

    this.makePlayers()
    this.playersTakeOneCard()
    this.playPlayers()
    return console.log('Running' + this.nrOfPlayers)
  }

  playPlayers () {
    for (const player of this.players) {
      player.takeSeveralCards(this.deck, this.discardDeck)
      if (player.handValue > 21) {
        console.log(player.playerName + ': ' + player.hand.join(' ') + ' (' + player.handValue + ')' + '\nDealer   : -\nDealer  wins!\n')
      } else if (player.handValue === 21 || player.hand.length === 5) {
        console.log(player.playerName + ': ' + player.hand.join(' ') + ' (' + player.handValue + ')' + '\nDealer   : -\nPlayer  wins!\n')
      } else {
        console.log('not implemented\n')
      }
    }
  }

  /**
   * Creates as many player objects as number of players and push them to players array.
   */
  makePlayers () {
    for (let i = 1; i <= this.nrOfPlayers; i++) {
      this.players.push(new Player(i))
    }
  }

  /**
   * Every player takes one card.
   */
  playersTakeOneCard () {
    for (const player of this.players) {
      player.takeCard(this.deck, this.discardDeck)
    }
  }

  /**
   * Every player takes cards till reaches ur surpass its stop value.
   */
  playerTakeCards () {
    for (const player of this.players) {
      player.takeSeveralCards(this.deck, this.discardDeck)
    }
  }
}
