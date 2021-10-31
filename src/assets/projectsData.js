import portfolio from './../assets/portfolio.png';
import flashtype from './../assets/flashtype.png';
import namely from './../assets/namely.png';

export const projectsData = [
    {
        projectName: 'Name-ly!',
        projectDescription:
            'Do you find it difficult to name your projects or ventures? Fear not! Check out this cool name suggestion application which will help you find the best name for your next project, venture, or startup. Keep building!',
        imageUrl:  `${namely}`,
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
            'As a developer/designer, you should definitely have your own portfolio website. There are endless benefits. But, a lot of people feel that it would be tough to make one. So here I bring you a tutorial to make your own website.',
        imageUrl: `${portfolio}`,
        projectUrl: 'http://linkinsunil.netlify.app',
    },
];