import * as Colors  from './colors.js';

export const sayWelcome = () => {return `\nWelcome to the` + Colors.cyanColor(` QUIZ `) + `game!\n`};

export const displayInstructions = () => {return `In this game, you will need to answer several regular and multiple-choice questions with different difficulty levels.\n`};

export const sayHelloPlayer = (playerName) => {return `\nHello ` + Colors.cyanColor(playerName) + `, starting right away...\n`;}

export const DisplaySuccessMessage = () => {Colors.cyanColor(`Congratulations! `), `you won the QUIZ game.\n`};