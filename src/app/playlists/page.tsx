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
            {/* Big Screen Sizes */}
            <div className="hidden sm:block">
                <div className="w-[50vw] mx-auto">
                    <PlaylistDisplay playlists={playlists} />
                </div>
            </div>
            {/* Small Screen Sizes */}
            <div className="block sm:hidden">
                <div className="w-[70vw] mx-auto">
                    <PlaylistDisplay playlists={playlists} />
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage
