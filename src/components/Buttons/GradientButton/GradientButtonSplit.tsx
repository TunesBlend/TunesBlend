import React from 'react'

interface GradientButtonProps {
    displayText: string
    href: string
}

const GradientButton: React.FC<GradientButtonProps> = ({
    displayText,
    href,
}) => {
    return (
        <div className="py-4">
            <div className="grid gap-8 items-start justify-center">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <a
                        href={href}
                        className="relative px-7 py-4 bg-black rounded-lg flex items-center"
                    >
                        <span className="flex items-center space-x-5">
                            <span className="pr-6 text-gray-100">
                                {displayText}
                            </span>
                        </span>
                        <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                            See what&rsquo;s new &rarr;
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GradientButton
