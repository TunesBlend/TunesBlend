import React from 'react'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import { Track } from '../../interfaces/user_interfaces'
import TrackItem from '../TrackItem/TrackItem'

interface TrackDisplayProps {
    tracks: Track[]
}

const TrackDisplay: React.FC<TrackDisplayProps> = ({ tracks }) => {
    return (
        <div className="m-4">
            <ul className="space-y-4">
                {tracks.map(tracks => (
                    <TrackItem key={tracks.track.id} trackList={tracks} />
                ))}
            </ul>
        </div>
    )
}

export default TrackDisplay
