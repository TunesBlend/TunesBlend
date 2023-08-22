import React from 'react'
import { Playlist } from '../../interfaces/user_interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleInfo,
    faLightbulb,
    faList,
} from '@fortawesome/free-solid-svg-icons'

interface PlaylistItemProps {
    playlist: Playlist
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({ playlist }) => {
    return (
        <div>
            {/* Big Screen Sizes */}
            <div className="hidden xl:block">
                <div className="mt-4 border p-2 rounded shadow grid grid-cols-5 gap-4 dark:bg-gray-700 dark:border-transparent dark:shadow-gray-700">
                    <div className="col-span-1 flex justify-center items-center">
                        <img
                            src={playlist.images[1].url}
                            alt={playlist.name}
                            className="h-32 w-32 object-contain"
                        />
                    </div>
                    <div className="col-span-3 flex justify-center items-left flex-col">
                        <h2 className="font-semibold text-lg mb-2">
                            {playlist.name}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            "{playlist.description}"
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center">
                        <div>
                            <a
                                href={`/playlists/details/${playlist.id}`}
                                className="text-sm text-center block bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded mb-4 transition duration-250 ease-in-out"
                            >
                                Details
                            </a>
                            <a
                                href={`/playlists/tracks/${playlist.id}`}
                                className="text-sm text-center block bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded mb-4 transition duration-250 ease-in-out"
                            >
                                Recommend
                            </a>
                            <a
                                href={`/playlists/tracks/${playlist.id}`}
                                className="text-sm text-center block bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition ease-in-out duration-250 "
                            >
                                Tracks
                            </a>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            {/* Small Screen Sizes */}
            <div className="block xl:hidden">
                <div className="w-auto mt-4 border p-4 rounded shadow dark:bg-gray-700 dark:border-transparent dark:shadow-gray-700">
                    {/* <div className="border p-4 rounded shadow dark:bg-gray-700 dark:border-transparent dark:shadow-gray-700"> */}
                    <div className=" flex justify-center items-center">
                        <img
                            src={playlist.images[1].url}
                            alt={playlist.name}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex justify-center items-center text-center flex-col">
                        <h2 className="font-semibold text-lg my-2">
                            {playlist.name}
                        </h2>
                        <p className="text-sm justify-center items-center text-center text-gray-500 dark:text-gray-400 mb-2">
                            "{playlist.description}"
                        </p>
                    </div>
                    <div>
                        <div className="block sm:hidden">
                            <div className="flex flex-row justify-center gap-3 mt-2 mb-2">
                                <a
                                    href={`/playlists/details/${playlist.id}`}
                                    className="text-center block bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                                >
                                    <FontAwesomeIcon
                                        icon={faCircleInfo}
                                        size="lg"
                                    />
                                </a>
                                <a
                                    href={`/playlists/tracks/${playlist.id}`}
                                    className="text-center block bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                                >
                                    <FontAwesomeIcon
                                        icon={faLightbulb}
                                        size="lg"
                                    />
                                </a>
                                <a
                                    href={`/playlists/tracks/${playlist.id}`}
                                    className="text-center block bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                                >
                                    <FontAwesomeIcon icon={faList} size="lg" />
                                </a>
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex flex-row justify-center gap-3 mt-2 mb-2">
                                <a
                                    href={`/playlists/details/${playlist.id}`}
                                    className="text-center block bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                                >
                                    <FontAwesomeIcon
                                        icon={faCircleInfo}
                                        size="2x"
                                    />
                                </a>
                                <a
                                    href={`/playlists/tracks/${playlist.id}`}
                                    className="text-center block bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                                >
                                    <FontAwesomeIcon
                                        icon={faLightbulb}
                                        size="2x"
                                    />
                                </a>
                                <a
                                    href={`/playlists/tracks/${playlist.id}`}
                                    className="text-center block bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                                >
                                    <FontAwesomeIcon icon={faList} size="2x" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistItem
