import React from 'react';
import './Section4.css';

export const Section4 = () => {
    const row1 = [
        { title: "Dashboard", desc: "Manage banking, payments, and merchants in one place." },
        { title: "AI-Driven Decisions", desc: "Automate approvals, verification, and financial operations." },
        { title: "Unified Dashboard", desc: "Manage banking, payments, and merchants in one place." },
    ];

    const row2 = [
        { title: "Payment Options", desc: "Support options like cards, wallets, etc." },
        { title: "Developer-Friendly APIs", desc: "Build, integrate, and launch faster." },
        { title: "Enterprise-Grade Security", desc: "Bank-level encryption and compliance." },
    ];

    const row3 = [
        { title: "AI-Driven Decisions", desc: "Automate approvals, verification, and financial operations." },
        { title: "Scalable Infrastructure", desc: "Designed for startups to enterprises." },
        { title: "Enterprise-Grade Security", desc: "Bank-level encryption and compliance." },
    ];

    const rows = [row1, row2, row3];

    return (
        <section className="why-uzofin">
            <div className="why-uzofin__header">
                <h2 className="why-uzofin__title">
                    Why <span className="highlight-purple">UzOFin?</span>
                </h2>
                <p className="why-uzofin__description">
                    Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. 
                    Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. 
                    All within a sleek, futuristic design. Create more, effortlessly.
                </p>
            </div>

            <div className="marquee-wrapper">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className={`marquee-row row-${rowIndex + 1}`}>
                        <div className="marquee-content">
                            {/* Duplicate items for seamless loop */}
                            {[...row, ...row, ...row].map((item, index) => (
                                <div key={index} className="marquee-card">
                                    <div className="card-header">
                                        <span className="card-title">{item.title}</span>
                                        <span className="card-arrow">↗</span>
                                    </div>
                                    <p className="card-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};