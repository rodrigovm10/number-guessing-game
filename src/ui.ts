import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { greenUnderline, green, red, yellow } from './config/styles'

const rl = readline.createInterface({ input, output })

export function showWelcome() {
  console.log(
    `Welcome to the ${greenUnderline(
      'Number Guessing Game! 🎉'
    )} \nI'm thinking of a number between 1 and 100. \n`
  )
  console.log('Please select the difficulty level:')
  console.log(green('1. Easy (10 chances)   😄 '))
  console.log(yellow('2. Medium (5 chances)  😐 '))
  console.log(red('3. Hard (3 chances)    😡 \n'))

  console.log('Options:')
  console.log('H - Show history ')
  console.log('Q - Quit game \n')
}

export async function askQuestion(question: string): Promise<string> {
  while (true) {
    const answer = await rl.question(question)
    if (answer.trim()) return answer
    console.log('Input cannot be empty. Please try again.\n')
  }
}

export function closeInterface() {
  rl.close()
}
