import React from 'react'
import { Playlist } from '../../interfaces/user_interfaces' // Import the Playlist interface

interface PlaylistItemProps {
    playlist: Playlist
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({ playlist }) => {
    return (
        <li className="border p-4 mb-4 rounded shadow grid grid-cols-5 gap-4">
            <div className="col-span-1 flex justify-center items-center">
                <img
                    src={playlist.images[1].url} // Assuming the first image is used
                    alt={playlist.name}
                    className="h-32 w-32"
                />
            </div>
            <div className="col-span-3 flex justify-center items-left flex-col">
                <h2 className="font-semibold text-lg mb-2">{playlist.name}</h2>
                <p className="text-sm text-gray-500 mb-2">
                    {playlist.description}
                </p>
            </div>
            <div className="col-span-1 flex flex-col justify-between mt-2 mb-2">
                <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-800 mb-2 transition duration-250 ease-in-out">
                    Playlist Details
                </button>
                <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-800 transition duration-250 ease-in-out">
                    View Tracks
                </button>
            </div>
        </li>
    )
}

export default PlaylistItem
