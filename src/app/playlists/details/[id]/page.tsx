'use client'

import React, { useEffect, useState } from 'react'

const PlaylistPage: React.FC = ({ params }: any) => {
    const playlist_uri = params.id

    return (
        <div>
            <h1>Playlist: {playlist_uri}</h1>
        </div>
    )
}

export default PlaylistPage
