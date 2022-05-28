import portfolio from './../assets/portfolio.png';
import flashtype from './../assets/flashtype.png';
import namely from './../assets/namely.png';
import textUtils from './../assets/text-utils.png'
import calc from './../asset/calc.jpg'
import pokedex from './../asset/pokedex.png'
import flexbox from './../asset/flexbox'

export const projectsData = [
  {
    projectName: 'Namely!',
    projectDescription:
      'Do you find it difficult to name your projects or ventures? Fear not! Check out this cool name suggestion application which will help you find the best name for your next project, venture, or startup.',
    imageUrl: `${namely}`,
    projectUrl: 'https://linkinsunil.github.io/namely/',
  },
  {
    projectName: 'FlashType',
    projectDescription:
      'Having a good typing speed will always help you as a developer! Here, I present you the typing speed test application, where you can check your typing speed (in wpm) and share the results with your friends too.',
    imageUrl: `${flashtype}`,
    projectUrl: 'https://linkinsunil.github.io/flashtype/',
  },
  {
    projectName: 'Portfolio Website',
    projectDescription:
      'As a developer/designer, you should definitely have your own portfolio website. There are endless benefits of having one as a beginner.',
    imageUrl: `${portfolio}`,
    projectUrl: 'http://linkinsunil.github.io',
  },
  {
    projectName: 'TextUtils',
    projectDescription:
      'TextUtils is a multipurpose text utility application. You can format your text via TextUtils app and can convert your text to upper case, lower case, copy it, remove extra space between text, clear the text box, find reading time of text entered, find total words or characters in the text and can see the preview of the entered text.',
    imageUrl: `${textUtils}`,
    projectUrl: 'http://linkinsunil.github.io/text-utils',
  },
  {
    projectName: 'UniCalc',
    projectDescription:
      'UniCalc is a modern calculator with gradient finish design and standard calculator functions. This is a non-scientific calculator for general calculations.',
    imageUrl: `${calc}`,
    projectUrl: 'https://unicalc.netlify.app/',
  },
  {
    projectName: 'Pokedex',
    projectDescription:
      'Pokedex is a Pokemon collection app which shows all the Pokemons with their image and description about them.',
    imageUrl: `${pokedex}`,
    projectUrl: 'https://linkinsunil.github.io/pokedex/',
  },
  {
    projectName: 'flexbox-visual-guide',
    projectDescription:
      'A visual guide to CSS Flexbox commands and effects',
    imageUrl: `${flexbox}`,
    projectUrl: 'https://linkinsunil.github.io/flexbox-visual-guide/public/index.html',
  },
];
