import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({ input, output })

const DIFFICULTIES = [
  { difficultyNumber: 1, difficulty: 'Easy' },
  { difficultyNumber: 2, difficulty: 'Medium' },
  { difficultyNumber: 3, difficulty: 'Hard' },
]

function generateRandomNumber() {
  return Math.round(Math.random() * 100)
}

async function askQuestion(question: string): Promise<string> {
  return await rl.question(question)
}

async function guessNumber(numberToGuess: number, attempts: number) {
  let guess: string
  let attemptsTried: number = 1

  do {
    guess = await askQuestion('Enter your guess:')
    if (+guess === numberToGuess) {
      console.log(
        `Congratulations! You guessed the correct number in ${attemptsTried} attempts. \n`
      )
      return
    }

    if (+guess > numberToGuess) {
      console.log(`Incorrect! The number is less than ${+guess}. \n`)
    } else {
      console.log(`Incorrect! The number is greater than ${+guess}. \n`)
    }

    if (attempts === 0) {
      console.log(`You have not more chances, the number to guess is: ${numberToGuess} \n`)
      return
    }
    attempts--
    attemptsTried++
  } while (+guess !== numberToGuess)
}

async function main() {
  let attempts: number = 10
  const numberToGuess = generateRandomNumber()

  console.log(
    `Welcome to the Number Guessing Game! \nI'm thinking of a number between 1 and 100. \n`
  )
  console.log(
    `Please select the difficulty level: \n 1. Easy (10 chances) \n 2. Medium (5 chances) \n 3. Hard (3 chances) \n`
  )

  const difficultyChoice = await askQuestion('Enter your choice: ')

  switch (+difficultyChoice) {
    case 1:
      console.log('Great! You have selected the Easy difficulty level.')
      console.log(`Let's start the game!\n`)
      attempts = 10
      break
    case 2:
      console.log('Great! You have selected the Medium difficulty level.')
      console.log(`Let's start the game!`)
      attempts = 5
      break
    case 3:
      console.log('Great! You have selected the Hard difficulty level.')
      console.log(`Let's start the game!`)
      attempts = 3
      break
    default:
      console.log('Option invalid')
  }
  await guessNumber(numberToGuess, attempts)
  const playAgain = await askQuestion('Do you want to play again? (y/n)')

  if (playAgain === 'y') return main()
  else {
    console.log('Thank you for playing!')
    rl.close()
  }
}

main()
