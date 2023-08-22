'use client'

import React, { useEffect, useState } from 'react'
import { fetchPlaylists, userDetails } from '@/spotify/utils'
import { Playlist } from '@/interfaces/user_interfaces'
import PlaylistDisplay from '@/components/PlaylistDisplay/PlaylistDisplay'
import { useRouter } from 'next/navigation'

const PlaylistPage: React.FC = () => {
    const [playlists, setPlaylists] = useState<Playlist[]>([])
    const router = useRouter()

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
            const user_profile = userDetails(access_token)
            fetchPlaylists(access_token)
                .then(items => {
                    if (items === 'error') {
                        router.push('/')
                    } else {
                        setPlaylists(items)
                    }
                })
                .catch(error => {
                    if (error.response && error.response.status === 401) {
                        console.error(
                            'Error fetching playlists - Unauthorized:',
                            error,
                        )
                    } else {
                        console.error('Error fetching playlists:', error)
                    }
                })
        }
    }, [])

    return (
        <div>
            {/* <div className="hidden 2xl:block">
                <div className="w-[40vw] mx-auto">
                    <h1>SUPER BIG</h1>
                    <PlaylistDisplay playlists={playlists} />
                </div>
            </div>
            <div className="hidden xl:block 2xl:hidden">
                <div className="w-[50vw] mx-auto">
                    <h1>BIG</h1>
                    <PlaylistDisplay playlists={playlists} />
                </div>
            </div>
            <div className="hidden md:block xl:hidden">
                <div className="w-[60vw] mx-auto">
                    <h1>MID</h1>
                    <PlaylistDisplay playlists={playlists} />
                </div>
            </div>
            <div className="block md:hidden">
                <div className="w-[70vw] mx-auto">
                    <h1>SMALL</h1>
                    <PlaylistDisplay playlists={playlists} />
                </div>
            </div> */}
            <div className="grid gap-4 justify-center items-center">
                <div className="w-[70vw] md:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] mx-auto">
                    <PlaylistDisplay playlists={playlists} />
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage
