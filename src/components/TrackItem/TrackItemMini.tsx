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
        onMouseEnter()

        if (audioRef.current) {
            if (audioRef.current.paused) {
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
        // onMouseEnter()
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
        <li className="border p-1 shadow grid grid-cols-1 gap-4 dark:bg-gray-700 dark:border-gray-600 dark:shadow-gray-700">
            <div
                className="col-span-1 flex justify-center items-center"
                style={{
                    cursor: trackList.track.preview_url ? 'pointer' : 'default',
                }}
                onClick={handleImageClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={trackList.track.album.images[1].url}
                    alt={trackList.track.name}
                    className="h-24 w-24"
                />
                {trackList.track.preview_url && (
                    <audio ref={audioRef} src={trackList.track.preview_url} />
                )}
            </div>
            {/* <div className="col-span-3 flex justify-center items-left flex-col">
                <h2 className="font-semibold text-lg mb-1">
                    {trackList.track.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {trackList.track.artists
                        .map(artist => artist.name)
                        .join(', ')}
                </p>
            </div> */}
        </li>
    )
}

export default TrackItemMini
