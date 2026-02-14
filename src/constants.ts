import { Game } from './types';

export const DEVELOPER_NAME = 'Faraula Apps';
export const EMAIL = 'faraula.apps@gmail.com';
export const WEBSITE_URL = 'https://faraula-apps.vercel.app';
export const PRIVACY_URL = 'https://faraula-apps.vercel.app/privacy';
export const PLAY_STORE_DEV_URL = 'https://play.google.com/store/apps/dev?id=8263561897723442749';
export const STUDIO_LOGO = '/logo.png'; // Place your logo at public/logo.png

export const SOCIAL_LINKS = {
    playStore: PLAY_STORE_DEV_URL,
    // Add more social links here as needed:
    // twitter: 'https://twitter.com/faraulaapps',
    // linkedin: 'https://linkedin.com/company/faraulaapps',
};

export const GAMES: Game[] = [
    {
        id: 'escape-quest',
        title: 'Escape Quest: Police Car Chase',
        tagline: 'Feel the heat of the chase, you are WANTED and you have to ESCAPE!',
        description:
            'Adrenaline-pumping action awaits in Escape Quest! Navigate through heavy traffic, dodge police blockades, and use power-ups to outsmart the law. With realistic physics and intense gameplay, can you become the ultimate escape artist?',
        features: [
            'High-speed police chases',
            'Realistic car physics',
            'Multiple escape vehicles',
            'Dynamic city environments',
            'Power-ups & boosters',
            'Increasing difficulty levels',
        ],
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.faraulaapps.escapequest',
        coverGradient: 'game-cover-escape',
        icon: '🏎️',
        category: 'Racing / Action',
        coverImage: '/images/escape-quest-6.png',
        screenshots: [
            '/images/escape-quest-6.png',
            '/images/escape-quest-5.png',
            '/images/escape-quest-4.png',
            '/images/escape-quest-3.png',
            '/images/escape-quest-2.png',
            '/images/escape-quest-1.png'
        ],
        logo: '/images/escape-quest-logo.png',
    },
    {
        id: 'chunky-bird',
        title: 'Chunky Bird',
        tagline: "Flap Your Way to Fun! Jump 'til the Day is Done!",
        description:
            "Join Chunky Bird on a delightful journey through colorful worlds. Simple one-tap controls make it easy to learn but hard to master. Collect coins, unlock new skins, and compete with friends for the highest score!",
        features: [
            'One-tap addictive gameplay',
            'Unlockable character skins',
            'Global leaderboards',
            'Vibrant colorful graphics',
            'Endless fun & replayability',
            'Lightweight & fast loading',
        ],
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.faraulaapps.chunkybird',
        coverGradient: 'game-cover-chunky',
        icon: '🐦',
        category: 'Casual / Arcade',
        coverImage: '/images/ChunkyBird-ScreenShot-1.png',
        screenshots: [
            '/images/ChunkyBird-ScreenShot-1.png',
            '/images/ChunkyBird-ScreenShot-2.png',
            '/images/ChunkyBird-ScreenShot-3.png',
            '/images/ChunkyBird-ScreenShot-4.png',
            '/images/ChunkyBird-ScreenShot-5.png',
            '/images/ChunkyBird-ScreenShot-6.png',
            '/images/ChunkyBird-ScreenShot-7.png',
        ],
        logo: '/images/chunky-bird-logo.png',
    },
    {
        id: 'bounce-hop',
        title: 'Bounce Hop: Jumping Adventure',
        tagline: 'Jump, hop and bounce through an epic 3D adventure!',
        description:
            'Bounce your way to victory in this 3D platformer. Time your jumps perfectly to avoid obstacles and reach the finish line. With hundreds of levels and increasing difficulty, Bounce Hop will test your reflexes like never before.',
        features: [
            '3D platforming action',
            'Hundreds of challenging levels',
            'Smooth & precise controls',
            'Epic boss battles',
            'Stunning visual effects',
            'Progressive difficulty curve',
        ],
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.faraulaapps.bouncehop',
        coverGradient: 'game-cover-bounce',
        icon: '⚡',
        category: 'Platformer / Adventure',
        coverImage: '/images/BounceHop-1.png',
        screenshots: [
            '/images/BounceHop-1.png',
            '/images/BounceHop-2.png',
            '/images/BounceHop-3.png',
            '/images/BounceHop-4.png',
        ],
        logo: '/images/bounce-hop-logo.png',
    },
];
