'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter, redirect } from 'next/navigation'
import querystring from 'querystring'
import axios from 'axios'
import { userDetails } from '@/spotify/utils'

import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation'

const CallbackPage: React.FC = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const code = searchParams.get('code') as string
        /* state only used for PCKE authentication, ignored */
        const state = searchParams.get('state') as string

        const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
        const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI
        const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET

        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            method: 'post',
            data: querystring.stringify({
                code: code,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            }),
            headers: {
                Authorization:
                    'Basic ' +
                    Buffer.from(clientId + ':' + clientSecret).toString(
                        'base64',
                    ),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }

        axios(authOptions)
            .then(async response => {
                const {
                    access_token,
                    refresh_token,
                    expires_in,
                    scope,
                    token_type,
                } = response.data

                const user_details = await userDetails(access_token)

                localStorage.setItem('user_details', user_details.display_name)
                localStorage.setItem('access_token', access_token)
                localStorage.setItem('refresh_token', refresh_token)
            })
            .then(() => {
                const timeout = 1.5
                setTimeout(() => {
                    setLoading(false) // Hide the loading animation
                    router.push('/playlists') // Navigate to /home after the delay
                }, timeout * 1000)
            })
            .catch(error => {
                console.error(
                    'Error exchanging authorization code for tokens:',
                    error,
                )
            })
    }, [])

    return (
        <div>
            <LoadingAnimation numBalls={5} />
        </div>
    )
}

export default CallbackPage
