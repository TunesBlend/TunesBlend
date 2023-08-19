export interface Playlist {
    collaborative: boolean
    description: string
    external_urls: { spotify: string }
    href: string
    id: string
    images: { height: number; url: string; width: number }[]
    name: string
    owner: {
        display_name: string
        external_urls: { spotify: string }
        href: string
        id: string
        type: string
        // Add other properties as needed
    }
    primary_color: string | null
    public: boolean
    snapshot_id: string
    tracks: { href: string; total: number }
    type: string
    uri: string
}

interface AddedBy {
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
}

interface Artist {
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    name: string
    type: string
    uri: string
}

interface Album {
    album_type: string
    artists: Artist[]
    available_markets: string[]
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    images: AlbumImage[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
}

interface AlbumImage {
    height: number
    url: string
    width: number
}

interface TrackDetails {
    album: Album
    artists: Artist[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    episode: boolean
    explicit: boolean
    external_ids: {
        isrc: string
    }
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url: string
    track: boolean
    track_number: number
    type: string
    uri: string
}

export interface Track {
    added_at: string
    added_by: AddedBy
    is_local: boolean
    primary_color: string | null
    track: TrackDetails
    video_thumbnail: {
        url: string | null
    }
}
