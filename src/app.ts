import { error } from './config/styles'
import { askQuestion, closeInterface, showWelcome } from './ui'
import { GAME_CONFIGURATION, generateRandomNumber, guessNumber } from './game'

async function main() {
  showWelcome()
  const numberToGuess = generateRandomNumber()

  const difficultyChoice = await askQuestion('Enter your choice: ')
  const choice = Number(difficultyChoice)

  if (!Number.isInteger(choice) || choice < 1 || choice > 3) {
    console.log(error('Invalid choice. Please enter 1, 2, or 3.\n'))
    return main()
  }

  const { attempts, difficulty } = GAME_CONFIGURATION[choice - 1]
  console.log(`\nYou chose "${difficulty}" with ${attempts} attempts.\n`)

  const startTime = Date.now()

  await guessNumber(numberToGuess, attempts)

  const endTime = Date.now()

  const timeTaken = ((endTime - startTime) / 1000).toFixed(2)
  console.log(`⏲️ You finished the game in ${timeTaken} seconds.\n`)
}

async function startGameLoop() {
  do {
    await main()
    const again = await askQuestion('Do you want to play again? (y/n): ')
    if (again.toLowerCase() !== 'y') break
  } while (true)

  console.log('Thanks for playing! 👋')
  closeInterface()
}
startGameLoop()
