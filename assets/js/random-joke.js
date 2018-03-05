/*
* This file generates a random joke for signature
* */

const jokes = [
  'There are only 10 types of people in this world... those who understand binary, and those who don\'t.',
  'If at first you don’t succeed; call it version 1.0.',
  'I would love to change the world, but they won’t give me the source code.',
  'Programmers are tools for converting caffeine into code.',
  'One of the best programming skills you can have is knowing when to walk away for awhile.',
  'Without requirements or design, programming is the art of adding bugs to an empty text file.'
]

const randomIndex = Math.floor(Math.random() * jokes.length)

$('.pc-joke').text(jokes[randomIndex]);