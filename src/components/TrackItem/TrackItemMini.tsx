import React, { useState, useRef, useEffect } from 'react'
import { Track } from '../../interfaces/user_interfaces'

interface TrackItemProps {
    trackList: Track
    onMouseEnter: () => void
}

const TrackItemMini: React.FC<TrackItemProps> = ({
    trackList,
    onMouseEnter,
}) => {
    const audioRef = useRef<HTMLAudioElement>(null)

    const handleImageClick = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                console.log(audioRef.current)
                const promise = audioRef.current.play()
                if (promise !== undefined) {
                    promise.then(() => {}).catch(error => console.error(error)) // Pass the error parameter
                }
            } else {
                // fadeOutAndPause(audioRef.current)
                audioRef.current.pause()
            }
        }
    }

    const handleMouseLeave = () => {
        if (audioRef.current) {
            if (!audioRef.current.paused) {
                // fadeOutAndPause(audioRef.current)
                audioRef.current.pause()
            }
        }
    }

    const handleMouseEnter = () => {
        onMouseEnter()
    }

    // const fadeOutAndPause = (audio: HTMLAudioElement) => {
    //     const fadeInterval = 100 // Adjust the interval for smoother fading
    //     const fadeStep = audio.volume / ((audio.duration * 1000) / fadeInterval)

    //     const fadeOutInterval = setInterval(() => {
    //         if (audio.volume - fadeStep > 0) {
    //             audio.volume -= fadeStep
    //         } else {
    //             audio.pause()
    //             clearInterval(fadeOutInterval)
    //             audio.volume = 1 // Reset volume
    //         }
    //     }, fadeInterval)
    // }

    return (
        <div className="border p-1 shadow grid gap-4 dark:bg-gray-700 dark:border-gray-600 dark:shadow-gray-700">
            <div
                className="flex justify-center items-center"
                style={{
                    cursor: trackList.track.preview_url ? 'pointer' : 'default',
                }}
                onClick={handleImageClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={trackList.track.album.images[1].url}
                    alt={trackList.track.name}
                    className="h-10 w-10 sm:h-24 sm:w-24 "
                />
                {trackList.track.preview_url && (
                    <audio ref={audioRef} src={trackList.track.preview_url} />
                )}
            </div>
            {/* Other content */}
        </div>
    )
}

export default TrackItemMini
