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
import { ErrorPlayers } from './ErrorPlayers.js'
import { ErrorDrawpile } from './ErrorDrawpile.js'

/**
 * Represents the card game 21.
 *
 * @class
 */
export class Game {
  /**
   * Creates an instance of a Game.
   *
   * @param {string} nrOfPlayers - The string representive of numbers of players in the game.
   * @throws {ErrorPlayers} The number of players must be an integer and between 1-7.
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
   * @param {string} nrOfPlayers - The string representive of numbers of players in the game.
   *
   * @throws {ErrorPlayers} The number of players must be an integer and between 1-7.
   */
  set nrOfPlayers (nrOfPlayers) {
    const value = Number(nrOfPlayers)
    if (value === 20 || value === 50) {
      this._nrOfPlayers = value
    } else if (!Number.isInteger(value) || value < 1 || value > 7) {
      throw new ErrorPlayers('Invalid number of players')
    } else {
      this._nrOfPlayers = value
    }
  }

  /**
   * Starts the game.
   *
   * @throws {ErrorDrawpile} The deck must contain 1 or more cards.
   */
  run () {
    Deck.shuffle(this.deck)
    this.makePlayers()
    this.playersTakeOneCard()
    this.playPlayers()
  }

  /**
   * Play each player against the dealer if needed, and summorizes the outcomes.
   * Follows the set of rules for the card game 21.
   *
   * @throws {ErrorDrawpile} The deck must contain 1 or more cards.
   */
  playPlayers () {
    for (const player of this.players) {
      player.takeSeveralCards(this.deck, this.discardDeck)
      console.log(player.toString())

      if (player.handValue > 21) {
        console.log(`${this.dealer.name}\t: -\nDealer wins!\n`)
      } else if (player.handValue === 21 || player.hand.length === 5) {
        console.log(`${this.dealer.name}\t: -\nPlayer wins!\n`)
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
   *
   * @throws {ErrorDrawpile} The deck must contain 1 or more cards.
   */
  playersTakeOneCard () {
    for (const player of this.players) {
      player.takeCard(this.deck, this.discardDeck)
    }
  }
}
