import React from 'react';
import { ArrowDown, Sparkles, Zap, Shield } from 'lucide-react';
import { GAMES, PLAY_STORE_DEV_URL } from '../constants';
import GameCard from '../components/GameCard';

const Home: React.FC = () => {
    const scrollToGames = () => {
        const element = document.getElementById('games');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* ===== HERO ===== */}
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
                {/* Background orbs */}
                <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-neon-cyan/10 blur-[150px] animate-glow-pulse" />
                <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-neon-purple/10 blur-[150px] animate-glow-pulse animation-delay-400" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-neon-pink/5 blur-[100px]" />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />

                <div className="relative z-10 max-w-5xl space-y-8">
                    {/* Badge */}
                    <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-5 py-2 text-sm font-medium text-neon-cyan backdrop-blur-sm">
                        <Sparkles className="h-4 w-4" />
                        Indie Game Studio
                    </div>

                    {/* Heading */}
                    <h1 className="animate-fade-in-up text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
                        Level Up Your{' '}
                        <br className="hidden sm:block" />
                        <span className="gradient-text animate-gradient-shift" style={{ backgroundSize: '200% auto' }}>
                            Mobile Experience
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="animate-fade-in-up animation-delay-200 mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed">
                        Faraula Apps creates immersive, high-quality indie games that bring
                        joy and excitement to your fingertips.
                    </p>

                    {/* CTAs */}
                    <div className="animate-fade-in-up animation-delay-400 flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
                        <button onClick={scrollToGames} className="btn-primary" id="hero-cta-games">
                            Explore Our Games <ArrowDown className="h-5 w-5" />
                        </button>
                        <a
                            href={PLAY_STORE_DEV_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                            id="hero-cta-developer"
                        >
                            Developer Profile
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600">
                    <ArrowDown className="h-5 w-5" />
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section className="relative border-t border-white/5 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="glass-card p-8 md:p-14">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h2 className="section-heading animate-fade-in-up">
                                    Who We Are
                                </h2>
                                <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple" />
                                <p className="mt-8 text-lg leading-relaxed text-gray-300">
                                    <strong className="text-white">Faraula Apps</strong> is a passionate indie game
                                    development studio dedicated to crafting simple yet addictive
                                    mobile games. We believe in the power of play to brighten your
                                    day.
                                </p>
                                <p className="mt-4 text-lg leading-relaxed text-gray-400">
                                    From high-speed chases to casual jumpers, our diverse portfolio
                                    delivers native performance and smooth gameplay across all
                                    Android devices.
                                </p>

                                {/* Stats */}
                                <div className="mt-10 grid grid-cols-3 gap-6">
                                    {[
                                        { value: '3+', label: 'Games' },
                                        { value: '4.0★', label: 'Rating' },
                                        { value: '∞', label: 'Fun' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <div className="text-2xl font-black text-neon-cyan">{stat.value}</div>
                                            <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual — Feature cards instead of placeholder image */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {[
                                    { icon: <Sparkles className="h-6 w-6" />, title: 'Polished UI', desc: 'Beautiful visuals & smooth animations', color: 'from-neon-cyan/20 to-neon-cyan/5' },
                                    { icon: <Zap className="h-6 w-6" />, title: 'Fast & Light', desc: 'Optimized for all devices', color: 'from-neon-purple/20 to-neon-purple/5' },
                                    { icon: <Shield className="h-6 w-6" />, title: 'Safe & Secure', desc: 'Privacy-first approach', color: 'from-neon-pink/20 to-neon-pink/5' },
                                    { icon: <span className="text-2xl">🎮</span>, title: 'Made for Fun', desc: 'Games that brighten your day', color: 'from-yellow-500/20 to-yellow-500/5' },
                                ].map((feature) => (
                                    <div
                                        key={feature.title}
                                        className={`group rounded-2xl border border-white/5 bg-gradient-to-br ${feature.color} p-6 transition-all duration-300 hover:border-white/15 hover:scale-[1.02]`}
                                    >
                                        <div className="mb-3 text-white">{feature.icon}</div>
                                        <h4 className="font-bold text-white">{feature.title}</h4>
                                        <p className="mt-1 text-xs text-gray-400">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== GAMES GRID ===== */}
            <section id="games" className="relative py-24 lg:py-32">
                {/* Background accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-neon-purple/5 blur-[200px]" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="section-heading" id="games-heading">Our Games</h2>
                        <p className="section-subheading mx-auto">Discover your next obsession.</p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {GAMES.map((game, index) => (
                            <GameCard key={game.id} game={game} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
