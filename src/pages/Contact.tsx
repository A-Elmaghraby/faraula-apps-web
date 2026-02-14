import React, { useState } from 'react';
import { Mail, Send, ExternalLink, MapPin } from 'lucide-react';
import { EMAIL, PLAY_STORE_DEV_URL } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="min-h-screen pt-24 pb-24 lg:pt-32">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center animate-fade-in-up">
                    <h1 className="section-heading">Get in Touch</h1>
                    <p className="section-subheading mx-auto">
                        Have a question, feedback, or just want to say hi? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-5">
                    {/* Contact Info — Left */}
                    <div className="lg:col-span-2 space-y-6 animate-slide-in-left">
                        {/* Email */}
                        <div className="glass-card p-6 group hover:border-neon-cyan/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan/20 transition-colors">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Email</h3>
                                    <a
                                        href={`mailto:${EMAIL}`}
                                        className="mt-1 block text-sm text-gray-400 hover:text-neon-cyan transition-colors break-all"
                                        id="contact-email-link"
                                    >
                                        {EMAIL}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Google Play */}
                        <div className="glass-card p-6 group hover:border-neon-purple/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon-purple/10 text-neon-purple group-hover:bg-neon-purple/20 transition-colors">
                                    <ExternalLink className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Google Play</h3>
                                    <a
                                        href={PLAY_STORE_DEV_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 block text-sm text-gray-400 hover:text-neon-purple transition-colors"
                                        id="contact-play-link"
                                    >
                                        Developer Page →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="glass-card p-6 group hover:border-neon-pink/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon-pink/10 text-neon-pink group-hover:bg-neon-pink/20 transition-colors">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Location</h3>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Remote — Worldwide 🌍
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links placeholder */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href={PLAY_STORE_DEV_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all hover:bg-white/10 hover:text-white hover:border-neon-cyan/30"
                                aria-label="Google Play"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                                </svg>
                            </a>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all hover:bg-white/10 hover:text-white hover:border-neon-cyan/30"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Form — Right */}
                    <div className="lg:col-span-3 animate-slide-in-right">
                        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6" id="contact-form">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full justify-center" id="contact-submit">
                                Send Message <Send className="h-5 w-5" />
                            </button>

                            <p className="text-center text-xs text-gray-600">
                                This will open your email client to send the message.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
