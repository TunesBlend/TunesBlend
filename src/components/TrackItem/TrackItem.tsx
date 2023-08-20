import React, { useState, useRef, useEffect } from 'react'
import { Track } from '../../interfaces/user_interfaces'

interface TrackItemProps {
    trackList: Track
}

const TrackItem: React.FC<TrackItemProps> = ({ trackList }) => {
    const audioRef = useRef<HTMLAudioElement>(null)

    const handleImageClick = () => {
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
        <li className="border p-2 shadow grid grid-cols-5 gap-4 dark:bg-gray-700 dark:border-gray-600 dark:shadow-gray-700">
            <div
                className="col-span-1 flex justify-center items-center"
                style={{
                    cursor: trackList.track.preview_url ? 'pointer' : 'default',
                }}
                onClick={handleImageClick}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={trackList.track.album.images[1].url}
                    alt={trackList.track.name}
                    className="h-16 w-16"
                />
                {trackList.track.preview_url && (
                    <audio ref={audioRef} src={trackList.track.preview_url} />
                )}
            </div>
            <div className="col-span-3 flex justify-center items-left flex-col">
                <h2 className="font-semibold text-lg mb-1">
                    {trackList.track.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {trackList.track.artists
                        .map(artist => artist.name)
                        .join(', ')}
                </p>
            </div>
            <div className="col-span-1 flex flex-col justify-between mt-2 mb-2">
                <a
                    href={trackList.track.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center block bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                >
                    Play Track
                </a>
            </div>
        </li>
    )
}

export default TrackItem
