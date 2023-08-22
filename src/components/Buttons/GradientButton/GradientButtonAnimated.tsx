import { CSSProperties, useEffect, useRef } from 'react'

const GradientButtonAnimated: React.FC<{
    textDisplay: string
    href: string
    gradientColor1: string
    gradientColor2: string
}> = ({ textDisplay, href, gradientColor1, gradientColor2 }) => {
    const boxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const boxElement = boxRef.current

        if (!boxElement) {
            return
        }

        const updateAnimation = () => {
            const angle =
                (parseFloat(boxElement.style.getPropertyValue('--angle')) +
                    0.5) %
                360
            boxElement.style.setProperty('--angle', `${angle}deg`)
            requestAnimationFrame(updateAnimation)
        }

        requestAnimationFrame(updateAnimation)
    }, [])

    return (
        <div
            ref={boxRef}
            style={
                {
                    '--angle': '0deg',
                    '--border-color': `linear-gradient(var(--angle), ${gradientColor1}, ${gradientColor2})`,
                    '--bg-color': 'linear-gradient(#131219, #131219)',
                } as CSSProperties
            }
            className="flex items-center justify-center rounded-lg border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
        >
            <a
                href={href}
                className="text-gray-100 hover:text-white transition duration-200 inline-flex items-center space-x-2"
            >
                {textDisplay}
            </a>
        </div>
    )
}

export default GradientButtonAnimated
