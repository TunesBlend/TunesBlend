import React, { useState } from 'react'
import { Track } from '../../interfaces/user_interfaces'
import TrackItem from '../TrackItem/TrackItem'
import TrackItemMini from '../TrackItem/TrackItemMini'
import TrackDetails from './TrackDetails'

interface TrackDisplayProps {
    tracks: Track[]
}

const TrackDisplay: React.FC<TrackDisplayProps> = ({ tracks }) => {
    const [displayList, setDisplayList] = useState(false)
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

    const toggleDisplay = () => {
        setDisplayList(!displayList)
    }

    const handleTrackSelection = (track: Track) => {
        setSelectedTrack(track)
    }

    return (
        <div className="m-4">
            <div className="flex justify-center items-start mb-4">
                <button
                    className="px-4 py-2 bg-green-800 text-white rounded"
                    onClick={toggleDisplay}
                >
                    {displayList ? 'Grid View' : 'List View'}
                </button>
            </div>
            {displayList ? (
                <ul className="space-y-0">
                    {tracks.map(track => (
                        <TrackItem key={track.track.id} trackList={track} />
                    ))}
                </ul>
            ) : (
                <div>
                    <TrackDetails selectedTrack={selectedTrack} />
                    <div className="grid gap-2 grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-11 grid-auto-flow-row">
                        {tracks.map(track => (
                            <TrackItemMini
                                key={track.track.id}
                                trackList={track}
                                onMouseEnter={() => handleTrackSelection(track)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TrackDisplay
