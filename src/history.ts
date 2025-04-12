import fs from 'node:fs'

const HISTORY_FILE = './history.json'

interface GameHistory {
  [difficulty: string]: {
    fewestAttempts: number
    winGame: boolean
  }
}

interface GameHistoryOptions {
  difficulty: string
  attempts: number
  winGame: boolean
}

export function saveGameHistory(options: GameHistoryOptions) {
  const { difficulty, attempts, winGame } = options

  let history: GameHistory = {}

  if (fs.existsSync(HISTORY_FILE)) {
    const data = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf-8')) as GameHistory

    const existsDifficulty = !!data[difficulty]
    const isNewFewestAttemp = attempts < data[difficulty]?.fewestAttempts

    if (existsDifficulty && isNewFewestAttemp) {
      data[difficulty].fewestAttempts = attempts
    } else {
      data[difficulty] = {
        winGame,
        fewestAttempts: attempts,
      }
    }

    history = data
  } else {
    history[difficulty] = {
      winGame,
      fewestAttempts: attempts,
    }
  }

  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2))
}

export function getHistory() {
  if (!fs.existsSync(HISTORY_FILE)) return
  const data = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf-8')) as GameHistory
  return data
}
