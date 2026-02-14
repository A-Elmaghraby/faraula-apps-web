import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Game } from '../types';
import GooglePlayBadge from './GooglePlayBadge';

interface GameCardProps {
    game: Game;
    index: number;
}

/** Inline SVG cover art for each game card with fading carousel */
const GameCoverArt: React.FC<{ game: Game }> = ({ game }) => {
    const images = game.screenshots && game.screenshots.length > 0 ? game.screenshots : (game.coverImage ? [game.coverImage] : []);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [nextIndex, setNextIndex] = React.useState(1);
    const [isTransitioning, setIsTransitioning] = React.useState(false);

    React.useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setNextIndex((prev) => (prev + 1) % images.length);
                setIsTransitioning(false);
            }, 500); // Wait for fade out
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const currentImage = images[currentIndex];

    return (
        <div className={`relative aspect-[16/10] w-full overflow-hidden ${game.coverGradient} game-art-container bg-brand-dark`}>
            {currentImage ? (
                <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                    {/* Blurred background for vertical images */}
                    <img
                        src={currentImage}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover scale-150 blur-xl opacity-40"
                        aria-hidden="true"
                    />
                    {/* Main image */}
                    <img
                        src={currentImage}
                        alt={game.title}
                        className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 z-10"
                    />
                </div>
            ) : null}

            {/* Decorative floating shapes (only visible if no image or fallback) */}
            {images.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl sm:text-8xl opacity-30 select-none animate-float drop-shadow-2xl">
                        {game.icon}
                    </span>
                </div>
            )}

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
            }} />

            {/* Bottom gradient fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark to-transparent z-20" />

            {/* Category badge */}
            <div className="absolute left-4 top-4 z-30 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white/80">
                {game.category}
            </div>

            {/* Carousel dots */}
            {images.length > 1 && (
                <div className="absolute right-4 bottom-4 z-30 flex gap-1.5">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-neon-cyan w-3' : 'bg-white/30'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
    return (
        <div
            className="glass-card-hover group flex flex-col animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* Cover Art */}
            <GameCoverArt game={game} />

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                            {game.title}
                        </h3>
                        <p className="text-sm font-medium text-neon-cyan/70">{game.tagline}</p>
                    </div>
                    {game.logo && (
                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-brand-deeper">
                            <img
                                src={game.logo}
                                alt=""
                                className="h-full w-full object-cover"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        </div>
                    )}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-gray-400 line-clamp-2">
                    {game.description}
                </p>

                {/* Actions */}
                <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        to={`/game/${game.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan transition-all duration-300 hover:gap-3"
                        id={`view-details-${game.id}`}
                    >
                        View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                    <GooglePlayBadge url={game.playStoreUrl} small />
                </div>
            </div>
        </div>
    );
};

export default GameCard;
