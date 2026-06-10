export type GalleryCategory =
  | 'All'
  | 'Flex Banners'
  | 'Shop Boards'
  | 'Vinyl Prints'
  | 'Invitations'
  | 'Visiting Cards'

export interface GalleryItem {
  id: string
  category: Exclude<GalleryCategory, 'All'>
  label: string
  aspectRatio: 'landscape' | 'portrait' | 'square'
  bgColor: string
  emoji: string
}

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Flex Banners',
  'Shop Boards',
  'Vinyl Prints',
  'Invitations',
  'Visiting Cards',
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Flex Banners',
    label: 'Event Flex Banner',
    aspectRatio: 'landscape',
    bgColor: '#FFF0F0',
    emoji: '\u{1F3AA}',
  },
  {
    id: 'g2',
    category: 'Flex Banners',
    label: 'Shop Opening Banner',
    aspectRatio: 'landscape',
    bgColor: '#FFF5F0',
    emoji: '\u{1F3EA}',
  },
  {
    id: 'g3',
    category: 'Flex Banners',
    label: 'Political Campaign Flex',
    aspectRatio: 'landscape',
    bgColor: '#FFF0F0',
    emoji: '\u{1F4E2}',
  },
  {
    id: 'g4',
    category: 'Shop Boards',
    label: 'Retail Shop Board',
    aspectRatio: 'square',
    bgColor: '#F0F4FF',
    emoji: '\u{1F3EC}',
  },
  {
    id: 'g5',
    category: 'Shop Boards',
    label: 'Hotel Name Board',
    aspectRatio: 'landscape',
    bgColor: '#F0FFF4',
    emoji: '\u{1F37D}\u{FE0F}',
  },
  {
    id: 'g6',
    category: 'Shop Boards',
    label: 'Clinic Sign Board',
    aspectRatio: 'square',
    bgColor: '#F0F8FF',
    emoji: '\u{1F3E5}',
  },
  {
    id: 'g7',
    category: 'Vinyl Prints',
    label: 'Vehicle Branding',
    aspectRatio: 'landscape',
    bgColor: '#FFFBF0',
    emoji: '\u{1F697}',
  },
  {
    id: 'g8',
    category: 'Vinyl Prints',
    label: 'Glass Door Vinyl',
    aspectRatio: 'portrait',
    bgColor: '#F5F0FF',
    emoji: '\u{1F6AA}',
  },
  {
    id: 'g9',
    category: 'Vinyl Prints',
    label: 'Wall Branding',
    aspectRatio: 'landscape',
    bgColor: '#FFF0FB',
    emoji: '\u{1F3A8}',
  },
  {
    id: 'g10',
    category: 'Invitations',
    label: 'Wedding Invitation',
    aspectRatio: 'portrait',
    bgColor: '#FFF9F0',
    emoji: '\u{1F48D}',
  },
  {
    id: 'g11',
    category: 'Invitations',
    label: 'Birthday Invitation',
    aspectRatio: 'portrait',
    bgColor: '#FFF0F5',
    emoji: '\u{1F382}',
  },
  {
    id: 'g12',
    category: 'Invitations',
    label: 'Corporate Invite',
    aspectRatio: 'portrait',
    bgColor: '#F0F9FF',
    emoji: '\u{1F4CB}',
  },
  {
    id: 'g13',
    category: 'Visiting Cards',
    label: 'Glossy Business Card',
    aspectRatio: 'landscape',
    bgColor: '#F9F0FF',
    emoji: '\u{1F4BC}',
  },
  {
    id: 'g14',
    category: 'Visiting Cards',
    label: 'Matte Finish Card',
    aspectRatio: 'landscape',
    bgColor: '#F0FFF9',
    emoji: '\u{1FAAA}',
  },
  {
    id: 'g15',
    category: 'Visiting Cards',
    label: 'Die Cut Card',
    aspectRatio: 'landscape',
    bgColor: '#FFF5F0',
    emoji: '\u{2702}\u{FE0F}',
  },
]
