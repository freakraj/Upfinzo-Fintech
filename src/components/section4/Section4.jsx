import React from 'react';
import './Section4.css'; // Make sure to create this file with the CSS below

export const Section4 = () => {
    const whyUzOFinData = [
        [
            { text: "Dashboard Manage banking, payments, and merchants in one place." },
            { text: "AI-Driven Decisions Automate approvals, verification, and financial operations." },
            { text: "Unified Dashboard Manage banking, payments, and mercha" },
            { text: "Unified Dashboard Manage banking, payments, and mercha" },
            { text: "Unified Dashboard Manage banking, payments, and mercha" },
        ],
        [
            { text: "options like cards, wallets, etc." },
            { text: "Developer-Friendly APIs Build, integrate, and launch faster." },
            { text: "Enterprise-Grade Security Bank-level encryption and compliance." },
            { text: "Developer-Friendly APIs site Build, integrate, and launch fast." },
            { text: "Developer-Friendly APIs site Build, integrate, and launch fast." },
            { text: "Developer-Friendly APIs site Build, integrate, and launch fast." },
        ],
        [
            { text: "Driven Decisions mate approvals, verification, and financial operations." },
            { text: "Driven Decisions mate approvals, verification, and financial operations." },
            { text: "Scalable Infrastructure Designed for startups to enterprises." },
            { text: "Enterprise-Grade Security Bank-level encryption and compliance." },
            { text: "Enterprise-Grade Security Bank-level encryption and compliance." },
            { text: "Develop Build, int" },
        ],
    ];

    return (
        <section className="why-uzofin">
            <div className="container">
                <h2 className="why-uzofin__title">
                    Why <span className="highlight">UzOFin</span>?
                </h2>
                <p className="why-uzofin__description">
                    Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.
                </p>

                {whyUzOFinData.map((row, rowIndex) => (
                    <div key={rowIndex} className={`marquee-container row-${rowIndex + 1}`}>
                        <div className={`marquee marquee--${rowIndex % 2 === 0 ? 'right' : 'left'}`}>
                            <div className="marquee__group">
                                {[...row, ...row].map((item, index) => (
                                    <div key={index} className="marquee__item">
                                        {item.text}
                                        {rowIndex % 2 === 0 ? <span className="arrow">↗</span> : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

