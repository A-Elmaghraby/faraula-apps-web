import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { STUDIO_LOGO } from '../constants';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/#games' },
    { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const isActive = (path: string) => {
        // Home is active only if path is / AND there's no hash
        if (path === '/') return location.pathname === '/' && !location.hash;

        // Hash links active only if they match the current hash
        if (path.includes('#')) {
            const hash = path.split('#')[1];
            return location.pathname === '/' && location.hash === `#${hash}`;
        }

        // Default path matching
        return location.pathname === path;
    };

    const handleNavClick = (path: string, e: React.MouseEvent) => {
        setIsOpen(false);

        if (path === '/') {
            if (location.pathname === '/') {
                e.preventDefault();
                // Clear the hash in URL and scroll
                navigate('/', { replace: true });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else if (path === '/#games') {
            if (location.pathname === '/') {
                e.preventDefault();
                // Update hash in URL and scroll
                navigate('/#games', { replace: true });
                const el = document.getElementById('games');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${scrolled
                ? 'border-white/10 bg-brand-dark/90 backdrop-blur-xl shadow-lg shadow-black/20'
                : 'border-transparent bg-transparent'
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="group flex items-center gap-3">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple shadow-lg shadow-neon-purple/25 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-neon-cyan/30 overflow-hidden">
                            {STUDIO_LOGO ? (
                                <img
                                    src={STUDIO_LOGO}
                                    alt="Logo"
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        const icon = (e.target as HTMLImageElement).nextElementSibling;
                                        if (icon) (icon as HTMLElement).style.display = 'block';
                                    }}
                                />
                            ) : null}
                            <Gamepad2 className="h-5 w-5 text-white" style={{ display: STUDIO_LOGO ? 'none' : 'block' }} />
                        </div>
                        <span className="text-xl font-extrabold tracking-tight">
                            Faraula<span className="text-neon-cyan">Apps</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={(e) => handleNavClick(link.path, e)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive(link.path)
                                    ? 'text-neon-cyan bg-neon-cyan/10'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex md:hidden items-center justify-center rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Toggle navigation"
                        id="mobile-menu-toggle"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 border-b border-white/10' : 'max-h-0'
                    }`}
            >
                <div className="bg-brand-dark/95 backdrop-blur-xl px-4 pb-4 pt-2 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={(e) => handleNavClick(link.path, e)}
                            className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${isActive(link.path)
                                ? 'bg-neon-cyan/10 text-neon-cyan'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
