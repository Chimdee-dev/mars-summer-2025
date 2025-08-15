import React from 'react';

export const Footer = () => {
    const socials = [
        { icon: "images/svg (9).svg", label: "Facebook" },
        { icon: "images/svg (10).svg", label: "Youtube" },
        { icon: "images/svg (11).svg", label: "Telegram" },
        { icon: "images/svg (12).svg", label: "Twitter" },
    ];

    return (
        <div className="w-full m-auto px-6 md:px-28 py-14 border-t border-gray-200 mt-20">
            {/* Top Section */}
            <div className="max-w-[1296px] m-auto sm:flex flex-wrap gap-10 md:gap-[220px] items-start">
                {/* Logo + Socials */}
                <div>
                    <img src="images/logo.svg" alt="Logo" />
                    <div className="mt-5 space-y-4">
                        {socials.map((s, i) => (
                            <div key={i} className="flex gap-2.5 items-center">
                                <img src={s.icon} alt={s.label} />
                                <span className="text-gray-600">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-[20px] mt-5">
                    <p className="text-gray-900 text-base font-semibold font-[Poppins]">Getting started</p>
                    <span className="text-gray-600">Release Notes</span>
                    <span className="text-gray-600">Upgrade Guide</span>
                    <span className="text-gray-600">Browser Support</span>
                    <span className="text-gray-600">Dark Mode</span>
                </div>

                <div className="flex flex-col gap-[20px] mt-5">
                    <p className="text-gray-900 text-base font-semibold font-[Poppins]">Explore</p>
                    <span className="text-gray-600">Prototyping</span>
                    <span className="text-gray-600">Design systems</span>
                    <span className="text-gray-600">Pricing</span>
                    <span className="text-gray-600">Security</span>
                </div>

                <div className="flex flex-col gap-[20px] mt-5">
                    <p className="text-gray-900 text-base font-semibold font-[Poppins]">Community</p>
                    <span className="text-gray-600">Discussion Forums</span>
                    <span className="text-gray-600">Code of Conduct</span>
                    <span className="text-gray-600">Contributing</span>
                    <span className="text-gray-600">API Reference</span>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-[1296px] m-auto py-8 border-t mt-20 border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray-600 text-base">Nexton eCommerce. © 2024</div>
                <div className="flex gap-4">
                    <img src="images/visa.svg" alt="Visa" />
                    <img src="images/verisign.svg" alt="Verisign" />
                    <img src="images/paypal.svg" alt="Paypal" />
                    <img className="w-14 h-8 rounded-md bg-[#111827]" src="images/Vector.svg" alt="Payment" />
                </div>
            </div>
        </div>
    );
};
