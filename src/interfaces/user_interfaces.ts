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
