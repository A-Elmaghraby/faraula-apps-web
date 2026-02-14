import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink, Gamepad2 } from 'lucide-react';
import { EMAIL, PLAY_STORE_DEV_URL, DEVELOPER_NAME } from '../constants';
import GooglePlayBadge from './GooglePlayBadge';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/5 bg-brand-dark">
            {/* Subtle top glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple">
                                <Gamepad2 className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-extrabold">
                                Faraula<span className="text-neon-cyan">Apps</span>
                            </span>
                        </Link>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
                            Crafting immersive mobile gaming experiences.
                            <br />
                            Code. Design. Play.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                            Navigation
                        </h4>
                        <ul className="mt-5 space-y-3">
                            {[
                                { label: 'Home', to: '/' },
                                { label: 'Contact', to: '/contact' },
                                { label: 'Privacy Policy', to: '/privacy' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-gray-500 transition-colors hover:text-neon-cyan"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Games */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                            Our Games
                        </h4>
                        <ul className="mt-5 space-y-3">
                            {[
                                { label: 'Escape Quest', to: '/game/escape-quest' },
                                { label: 'Chunky Bird', to: '/game/chunky-bird' },
                                { label: 'Bounce Hop', to: '/game/bounce-hop' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-gray-500 transition-colors hover:text-neon-cyan"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                            Connect
                        </h4>
                        <div className="mt-5 space-y-4">
                            <a
                                href={`mailto:${EMAIL}`}
                                className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-neon-cyan"
                            >
                                <Mail className="h-4 w-4 shrink-0" />
                                {EMAIL}
                            </a>
                            <a
                                href={PLAY_STORE_DEV_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-neon-cyan"
                            >
                                <ExternalLink className="h-4 w-4 shrink-0" />
                                Google Play Developer
                            </a>
                            <div className="pt-2">
                                <GooglePlayBadge url={PLAY_STORE_DEV_URL} small />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/5 pt-8 sm:flex-row sm:justify-between">
                    <p className="text-xs text-gray-600">
                        &copy; {currentYear} {DEVELOPER_NAME}. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600">
                        Made with <span className="text-red-500">♥</span> for gamers
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
