import React from 'react'
import styles from './LoadingAnimation.module.css' // Import CSS module for the loading animation

interface LoadingAnimationProps {
    numBalls: number // Number of bouncing balls
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ numBalls }) => {
    const animationDelay = 0.1 // Adjust this value for the delay between balls

    return (
        <div className={styles.bouncingBallsContainer}>
            {Array.from({ length: numBalls }).map((_, index) => (
                <div
                    key={index}
                    className={`animate-bounce h-6 w-6 bg-green-500 rounded-full m-2 ${styles.bouncingBall}`}
                    style={{ animationDelay: `${index * animationDelay}s` }}
                ></div>
            ))}
        </div>
    )
}

export default LoadingAnimation
