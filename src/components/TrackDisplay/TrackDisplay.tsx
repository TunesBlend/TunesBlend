import React, { useState, useRef } from 'react'
import { Track } from '@/interfaces/user_interfaces'
import TrackItem from '../TrackItem/TrackItem'
import TrackItemMini from '../TrackItem/TrackItemMini'
import TrackDetails from './TrackDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faGripLines } from '@fortawesome/free-solid-svg-icons'

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

    const hiddenAudioRef = useRef<HTMLAudioElement | null>(null)

    const handlePlayHiddenAudio = () => {
        if (hiddenAudioRef.current) {
            hiddenAudioRef.current.play()
        }
    }

    return (
        <div className="">
            <div className="flex justify-center items-start my-2">
                <button
                    className="px-4 py-2 bg-green-800 text-white rounded"
                    onClick={toggleDisplay}
                >
                    {displayList ? (
                        <FontAwesomeIcon icon={faGrip} />
                    ) : (
                        <FontAwesomeIcon icon={faGripLines} />
                    )}
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
                    <div className="flex flex-wrap justify-between gap-1">
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
