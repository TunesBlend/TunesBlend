import React, { useState, useEffect, useRef } from 'react'
import { Track } from '../../interfaces/user_interfaces'

interface TrackItemProps {
    trackList: Track
}

const TrackItem: React.FC<TrackItemProps> = ({ trackList }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    const handleAudioClick = () => {
        console.log('test')
        setIsPlaying(prevIsPlaying => !prevIsPlaying)
    }

    return (
        <li className="border p-2 mb-4 rounded shadow grid grid-cols-5 gap-4 dark:bg-gray-700 dark:border-transparent dark:shadow-gray-700">
            <div
                className="col-span-1 flex justify-center items-center"
                onClick={handleAudioClick}
                onMouseLeave={handleAudioClick}
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
