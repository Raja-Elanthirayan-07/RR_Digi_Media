export interface Service {
  id: string
  title: string
  description: string
  emoji: string
}

export const services: Service[] = [
  {
    id: 'flex-printing',
    title: 'Flex Printing',
    description:
      'High-quality flex printing for events, shops, and promotions. Any size, fast turnaround.',
    emoji: '🖨️',
  },
  {
    id: 'banner-printing',
    title: 'Banner Printing',
    description:
      'Custom banners for advertising, storefronts, and events. Vibrant colors, durable material.',
    emoji: '🎌',
  },
  {
    id: 'star-flex',
    title: 'Star Flex',
    description:
      'Premium quality star flex solutions for high-visibility displays and long-lasting prints.',
    emoji: '⭐',
  },
  {
    id: 'vinyl-printing',
    title: 'Vinyl Printing',
    description:
      'Durable vinyl prints for branding, signage, and vehicle graphics. Weather resistant.',
    emoji: '🏷️',
  },
  {
    id: 'lithos-printing',
    title: 'Lithos Printing',
    description:
      'Bulk lithos printing at competitive rates. Ideal for political campaigns and mass distribution.',
    emoji: '📄',
  },
  {
    id: 'invitation-printing',
    title: 'Invitation Printing',
    description:
      'Elegant wedding, event, and custom invitations. Minimum 500 pieces. Multiple finish options.',
    emoji: '💌',
  },
  {
    id: 'visiting-cards',
    title: 'Visiting Cards',
    description:
      'Professional business cards in glossy, matte, die-cut, velvet, leaf, and non-tearable finishes.',
    emoji: '💼',
  },
]
