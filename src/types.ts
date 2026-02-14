export interface Game {
    id: string;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    playStoreUrl: string;
    coverGradient: string; // CSS class for the cover background
    icon: string; // Emoji icon for the game
    category: string;
    coverImage?: string; // Main feature image
    screenshots?: string[]; // Array of images for carousel
    logo?: string;       // App logo
}

export interface NavItem {
    label: string;
    path: string;
}
