# 🎯 Number Guessing Game (CLI)

A simple RESTful API for a personal blogging platform built with TypeScript, Express, Prisma, and
PostgreSQL. This project focuses on implementing CRUD operations following REST principles.

## 📌 Features

- 🔢 Random number between 1 and 100
- 🧠 Difficulty levels: Easy, Medium, Hard
- 🧾 Hints whether your guess is higher or lower than the target
- ⏲️ Timer that shows how long you took to guess the number
- 🏆 Game history with your best records
- 🔁 Play multiple rounds until you decide to quit
- ❌ Quit the game at any time by typing `q`

## 🚀 Tech Stack

- **Language:** TypeScript

## 📦 Requirements

- Node.js >= 18  
- Terminal or command line access

## 🚀 How to Run

1. Clone the repository `git clone https://github.com/rodrigovm10/number-guessing-game`.
2. Run `npm install` to install the project dependencies.
3. Run the game `npm run start`.

## 🕹️ How to Play
When the game starts, you'll see a welcome message and the rules. Here's how it works:

1. Select your difficulty:

    - Easy – 10 chances
    - Medium – 5 chances
    - Hard – 3 chances

2. Try to guess the number (between 1 and 100).

3. The game will tell you if your guess is too high or too low.

4. Win by guessing correctly within the allowed attempts!

4. After each round, you’ll be asked if you want to play again.

You can view your best scores (fewest attempts per difficulty) by entering `h` when prompted to choose a difficulty.

You can quit the game at any time by typing `q`.

## 🥷Challenge

[Number Guessing Game](https://roadmap.sh/projects/number-guessing-game)
