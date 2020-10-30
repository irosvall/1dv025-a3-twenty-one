/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ida Rosvall <ir222gn@student.lnu.se>
 * @version 1.0.0
 */

import { ErrorDrawpile } from './ErrorDrawpile.js'
import { ErrorPlayers } from './ErrorPlayers.js'
import { Game } from './Game.js'

try {
  const game = new Game(process.argv[2])
  game.run()
} catch (e) {
  console.error(e.message)
  process.exitCode = 1

  if (e instanceof ErrorPlayers) {
    process.exitCode = 26
  }
  if (e instanceof ErrorDrawpile) {
    process.exitCode = 27
  }
}
