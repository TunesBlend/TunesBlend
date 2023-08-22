import React, { useState, useRef } from 'react'
import { Track } from '@/interfaces/user_interfaces'
import TrackItem from '../TrackItem/TrackItem'
import TrackItemMini from '../TrackItem/TrackItemMini'
import TrackDetails from './TrackDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faGripLines } from '@fortawesome/free-solid-svg-icons'

interface TrackDisplayProps {
    tracks: Track[]
    displayGrid: boolean
}

const TrackDisplay: React.FC<TrackDisplayProps> = ({ tracks, displayGrid }) => {
    const [displayList, setDisplayList] = useState(false)
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

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
            {displayGrid ? (
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
            ) : (
                <ul className="space-y-2 my-3">
                    {tracks.map(track => (
                        <TrackItem key={track.track.id} trackList={track} />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TrackDisplay
