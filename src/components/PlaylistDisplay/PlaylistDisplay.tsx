import React from 'react'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import { Playlist } from '../../interfaces/user_interfaces'

interface PlaylistDisplayProps {
    playlists: Playlist[]
}

const PlaylistDisplay: React.FC<PlaylistDisplayProps> = ({ playlists }) => {
    return (
        <div className="m-4">
            {playlists.map(playlist => (
                <PlaylistItem key={playlist.id} playlist={playlist} />
            ))}
        </div>
    )
}

export default PlaylistDisplay
