import React from 'react'
import { Playlist } from '../../interfaces/user_interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChartLine,
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
            <div className="hidden lg:block">
                <div className="mt-4 border p-2 rounded shadow grid grid-cols-5 gap-4 bg-gray-100 dark:bg-gray-900 dark:border-transparent dark:shadow-gray-800">
                    <div className="col-span-1 flex justify-center items-center">
                        <img src={playlist.images[0].url} alt={playlist.name} />
                    </div>
                    <div className="col-span-3 flex justify-center items-left flex-col">
                        <h2 className="font-semibold text-xl xl:text-2xl 2xl:text-3xl mb-2">
                            {playlist.name}
                        </h2>
                        <p className="text-sm xl:text-md 2xl:text-lg text-gray-500 dark:text-gray-400 mb-2">
                            "{playlist.description}"
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center">
                        <div className="grid grid-cols-2 gap-2">
                            <a
                                href={`/playlists/details/${playlist.id}`}
                                className="aspect-square text-center flex justify-center items-center bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                            >
                                <FontAwesomeIcon icon={faChartLine} size="lg" />
                            </a>
                            <a
                                href={`/playlists/recommendations/${playlist.id}`}
                                className="aspect-square text-center flex justify-center items-center bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                            >
                                <FontAwesomeIcon icon={faLightbulb} size="lg" />
                            </a>
                            <a
                                href={`/playlists/tracks/${playlist.id}`}
                                className="aspect-square text-center flex justify-center items-center bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                            >
                                <FontAwesomeIcon icon={faList} size="lg" />
                            </a>
                            <a
                                href={`/playlists/details/${playlist.id}`}
                                className="aspect-square text-center flex justify-center items-center bg-green-800 hover:bg-green-900 text-white px-3 py-2 rounded transition duration-250 ease-in-out"
                            >
                                <FontAwesomeIcon icon={faChartLine} size="lg" />
                            </a>
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>

            {/* Small Screen Sizes */}
            <div className="block lg:hidden">
                <div className="w-auto mt-4 border p-4 rounded shadow bg-gray-100 dark:bg-gray-900 dark:border-transparent dark:shadow-gray-800">
                    {/* <div className="border p-4 rounded shadow dark:bg-gray-700 dark:border-transparent dark:shadow-gray-700"> */}
                    <div className=" flex justify-center items-center">
                        <img
                            src={playlist.images[0].url}
                            alt={playlist.name}
                            // className="object-contain w-[40vw]"
                        />
                    </div>
                    <div className="flex justify-center items-center text-center flex-col">
                        <h2 className="font-semibold text-2xl my-2">
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
                                        icon={faChartLine}
                                        size="lg"
                                    />
                                </a>
                                <a
                                    href={`/playlists/recommendations/${playlist.id}`}
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
                                        icon={faChartLine}
                                        size="2x"
                                    />
                                </a>
                                <a
                                    href={`/playlists/recommendations/${playlist.id}`}
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
