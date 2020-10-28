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
import { Dealer } from './Dealer.js'

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

    this.dealer = new Dealer()
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
   * Starts the game.
   *
   */
  run () {
    Deck.shuffle(this.deck)
    this.makePlayers()
    this.playersTakeOneCard()
    this.playPlayers()
  }

  playPlayers () {
    for (const player of this.players) {
      player.takeSeveralCards(this.deck, this.discardDeck)
      console.log(player.toString())

      if (player.handValue > 21) {
        console.log('Dealer   : -\nDealer  wins!\n')
      } else if (player.handValue === 21 || player.hand.length === 5) {
        console.log('Dealer   : -\nPlayer  wins!\n')
      } else {
        this.dealer.takeSeveralCards(this.deck, this.discardDeck)
        console.log(this.dealer.toString())

        if (this.dealer.handValue > 21) {
          console.log('Player  wins!\n')
        } else if (this.dealer.handValue === 21 || this.dealer.hand.length === 5) {
          console.log('Dealer  wins!\n')
        } else if (this.dealer.handValue < player.handValue) {
          console.log('Player  wins!\n')
        } else {
          console.log('Dealer  wins!\n')
        }
        DiscardPile.throwCards(this.discardDeck, this.dealer.hand)
        this.dealer.resetHandValue()
      }
      DiscardPile.throwCards(this.discardDeck, player.hand)
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
