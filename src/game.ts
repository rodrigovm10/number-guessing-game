import { error } from 'console'
import { askQuestion } from './ui'
import { green, red } from './config/styles'

export const GAME_CONFIGURATION = [
  { difficulty: 'Easy', attempts: 10 },
  { difficulty: 'Medium', attempts: 5 },
  { difficulty: 'Hard', attempts: 3 },
]

export function generateRandomNumber(): number {
  return Math.floor(Math.random() * 100) + 1
}

export async function guessNumber(target: number, attempts: number): Promise<void> {
  let attemptsTried: number = 1

  while (attempts > 0) {
    const guessStr = await askQuestion('Enter your guess:')
    const guess = Number(guessStr)

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log(error('Your guess must be a number, and must be in a range between 1 to 100 \n'))
      continue
    }

    if (guess === target) {
      console.log(
        green(
          `\nCongratulations! You guessed the correct number in ${attemptsTried} attempts. 🎉\n`
        )
      )
      return
    }

    console.log(
      guess > target
        ? `Incorrect! The number is less than ${guess}. \n`
        : `Incorrect! The number is greater than ${guess}. \n`
    )

    attempts--
    attemptsTried++

    if (attempts === 0) {
      console.log(`${red('You lost!')} The correct number was ${target}.\n`)
    } else {
      console.log(`You have ${attempts} attempts remaining.\n`)
    }
  }
}
