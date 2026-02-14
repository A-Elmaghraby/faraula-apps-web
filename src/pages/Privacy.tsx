import React from 'react';
import { EMAIL } from '../constants';

const sections = [
    {
        title: '1. Introduction',
        content: `Faraula Apps ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how our mobile applications collect, use, and share information. By using our games, you agree to the collection and use of information in accordance with this policy.`,
    },
    {
        title: '2. Data Collection and Use',
        content: `Our applications are built using standard web technologies and do not inherently collect personally identifiable information (PII) such as your name, address, or phone number.\n\nHowever, we use third-party services that may collect information used to identify you or your device to provide services such as advertising and analytics.`,
    },
    {
        title: '3. Third-Party Services',
        content: `We may use the following third-party services in our applications. We advise you to review their privacy policies:`,
        list: [
            '<strong>Google Play Services:</strong> Used for app distribution, updates, and leaderboard services.',
            '<strong>AdMob:</strong> Used to display advertisements. AdMob may use cookies and other tracking technologies to serve personalized ads based on your interests.',
        ],
    },
    {
        title: '4. Cookies',
        content: `Our games do not explicitly use cookies. However, third-party code and libraries used in the app may use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device.`,
    },
    {
        title: "5. Children's Privacy",
        content: `Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.`,
    },
    {
        title: '6. Changes to This Privacy Policy',
        content: `We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.`,
    },
];

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-24 lg:pt-32">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="glass-card p-8 md:p-12 animate-fade-in-up">
                    <h1 className="text-3xl font-black text-white md:text-4xl">Privacy Policy</h1>
                    <p className="mt-2 text-sm text-gray-500">Last updated: February 2026</p>

                    <div className="mt-10 space-y-8">
                        {sections.map((section) => (
                            <section key={section.title}>
                                <h2 className="mb-3 text-xl font-bold text-white">{section.title}</h2>
                                {section.content.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="mt-2 leading-relaxed text-gray-300">
                                        {paragraph}
                                    </p>
                                ))}
                                {section.list && (
                                    <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
                                        {section.list.map((item, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}

                        {/* Contact Section */}
                        <section>
                            <h2 className="mb-3 text-xl font-bold text-white">7. Contact Us</h2>
                            <p className="leading-relaxed text-gray-300">
                                If you have any questions or suggestions about our Privacy Policy, do not hesitate
                                to contact us at{' '}
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="text-neon-cyan hover:underline"
                                    id="privacy-email-link"
                                >
                                    {EMAIL}
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
