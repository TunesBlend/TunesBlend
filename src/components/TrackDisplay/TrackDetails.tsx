import React from 'react'
import { Track } from '../../interfaces/user_interfaces'

interface TrackDetailsProps {
    selectedTrack: Track | null
}

const TrackDetails: React.FC<TrackDetailsProps> = ({ selectedTrack }) => {
    const isPlaceholder = !selectedTrack

    return (
        <div className="bg-transparent text-white p-4 text-center">
            <div>
                {!isPlaceholder ? (
                    <img
                        src={selectedTrack.track.album.images[0].url}
                        alt={selectedTrack.track.name}
                        className={`mx-auto w-64 h-64`}
                    />
                ) : (
                    <div
                        className={`mx-auto w-64 h-64 dark:bg-gray-600 bg-gray-300 blur`}
                    />
                )}

                <h2
                    className={`mt-3 font-semibold text-lg mb-1 text-gray-900 dark:text-white ${
                        isPlaceholder ? 'blur' : ''
                    }`}
                >
                    {isPlaceholder
                        ? 'Placeholder Track'
                        : selectedTrack.track.name}
                </h2>
                <p
                    className={`text-sm text-gray-600 dark:text-gray-500 ${
                        isPlaceholder ? 'blur' : ''
                    }`}
                >
                    {isPlaceholder
                        ? 'Unknown Artist'
                        : selectedTrack.track.artists
                              .map(artist => artist.name)
                              .join(', ')}
                </p>
            </div>
        </div>
    )
}

export default TrackDetails
