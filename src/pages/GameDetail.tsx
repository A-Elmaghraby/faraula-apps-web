import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { GAMES } from '../constants';
import GooglePlayBadge from '../components/GooglePlayBadge';

const GameDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const game = GAMES.find((g) => g.id === id);

    if (!game) {
        return <Navigate to="/" replace />;
    }

    // Find related games (exclude current)
    const relatedGames = GAMES.filter((g) => g.id !== game.id);

    // Carousel logic for Detail Hero
    const images = game.screenshots && game.screenshots.length > 0 ? game.screenshots : (game.coverImage ? [game.coverImage] : []);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);

    React.useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setIsTransitioning(false);
            }, 600);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="min-h-screen pt-20 pb-24 lg:pt-28">
            {/* Back Link */}
            <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-neon-cyan"
                    id="back-to-home"
                >
                    <ArrowLeft className="h-4 w-4" /> Back to Home
                </Link>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left Column: Info */}
                    <div className="space-y-8 animate-fade-in-up">
                        {/* Category & Logo */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            {game.logo && (
                                <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                                    <img src={game.logo} alt="" className="h-full w-full object-cover" />
                                </div>
                            )}
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 w-fit">
                                <span>{game.icon}</span>
                                {game.category}
                            </div>
                        </div>

                        {/* Title & Tagline */}
                        <div>
                            <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                                {game.title}
                            </h1>
                            <p className="mt-4 text-xl font-medium text-neon-cyan/80">
                                {game.tagline}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-lg leading-relaxed text-gray-300">
                            {game.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white">Key Features</h3>
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {game.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
                                    >
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-neon-cyan" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
                            <GooglePlayBadge url={game.playStoreUrl} />
                            <a
                                href={game.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-center"
                                id={`play-now-${game.id}`}
                            >
                                <span className="text-lg mr-1">▶</span>
                                Play Now on Google Play
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="animate-slide-in-right space-y-8">
                        {/* Cover Art Carousel */}
                        <div className={`relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl ${game.coverGradient} game-art-container bg-brand-dark`}>
                            {images.length > 0 && (
                                <div className={`h-full w-full transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                                    {/* Blurred background for vertical images */}
                                    <img
                                        src={images[currentIndex]}
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover scale-150 blur-xl opacity-40"
                                        aria-hidden="true"
                                    />
                                    {/* Main image */}
                                    <img
                                        src={images[currentIndex]}
                                        alt={game.title}
                                        className="absolute inset-0 h-full w-full object-contain z-10"
                                    />
                                </div>
                            )}

                            {images.length === 0 && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[120px] opacity-40 select-none animate-float drop-shadow-2xl">
                                        {game.icon}
                                    </span>
                                </div>
                            )}

                            {/* Carousel Indicators */}
                            {images.length > 1 && (
                                <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2 rounded-full bg-black/20 backdrop-blur-md p-2 border border-white/5">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                if (i === currentIndex) return;
                                                setIsTransitioning(true);
                                                setTimeout(() => {
                                                    setCurrentIndex(i);
                                                    setIsTransitioning(false);
                                                }, 300);
                                            }}
                                            className={`h-2 w-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-neon-cyan w-6' : 'bg-white/30 hover:bg-white/50'}`}
                                            aria-label={`Go to screenshot ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Category badge */}
                            <div className="absolute left-6 top-6 z-30 rounded-full bg-black/40 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white/90 border border-white/10">
                                {game.category}
                            </div>

                            {/* Decorative grid */}
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                                backgroundSize: '24px 24px',
                            }} />

                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-dark/80 to-transparent z-20" />
                        </div>

                        {/* Game Info Card */}
                        <div className="glass-card p-6">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-black text-neon-cyan">Free</div>
                                    <div className="mt-1 text-xs text-gray-500">Price</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-neon-purple">4.0★</div>
                                    <div className="mt-1 text-xs text-gray-500">Rating</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-neon-pink">E</div>
                                    <div className="mt-1 text-xs text-gray-500">Everyone</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Games */}
                {relatedGames.length > 0 && (
                    <div className="mt-24">
                        <h2 className="mb-8 text-2xl font-bold text-white">More Games</h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {relatedGames.map((g) => (
                                <Link
                                    key={g.id}
                                    to={`/game/${g.id}`}
                                    className="glass-card-hover group flex items-center gap-5 p-5"
                                    id={`related-${g.id}`}
                                >
                                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl overflow-hidden ${g.coverGradient}`}>
                                        {g.logo ? (
                                            <img src={g.logo} alt="" className="h-full w-full object-cover" />
                                        ) : (
                                            <span className="text-3xl">{g.icon}</span>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white group-hover:text-neon-cyan transition-colors">
                                            {g.title}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-500">{g.tagline}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameDetail;
