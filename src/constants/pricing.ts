export interface PrintPriceItem {
  label: string
  price: string
}

export interface PrintCategory {
  id: string
  title: string
  items: PrintPriceItem[]
}

export const printCategories: PrintCategory[] = [
  {
    id: 'normal-flex',
    title: 'Normal Flex',
    items: [
      { label: 'Design + Print (above 100 sq.ft)', price: '₹10 / sq.ft' },
      { label: 'Design + Print (below 100 sq.ft)', price: '₹10 / piece' },
      { label: 'Print Only (without design)', price: '₹7 / sq.ft' },
    ],
  },
  {
    id: 'star-flex',
    title: 'Star Flex',
    items: [
      { label: 'Design + Print', price: '₹45 / sq.ft' },
      { label: 'Print Only', price: '₹20–25 / sq.ft' },
    ],
  },
  {
    id: 'vinyl',
    title: 'Vinyl',
    items: [
      { label: 'Design + Print', price: '₹75 / sq.ft' },
      { label: 'Print Only', price: '₹40 / sq.ft' },
    ],
  },
  {
    id: 'lithos',
    title: 'Lithos',
    items: [
      { label: 'Design + Print (above 100 pieces)', price: '₹1600' },
      { label: 'Print Only (100 nos)', price: '₹950' },
    ],
  },
  {
    id: 'invitation',
    title: 'Invitation Printing',
    items: [
      { label: 'Pricing', price: 'Depends on design & material' },
      { label: 'Minimum Quantity', price: '500 nos' },
    ],
  },
]

export interface VisitingCardType {
  finish: string
  price: string
  minimum: string
}

export const visitingCards: VisitingCardType[] = [
  { finish: 'Glossy', price: '₹750', minimum: '1000 cards' },
  { finish: 'Matte', price: '₹1100', minimum: '1000 cards' },
  { finish: 'Die Cut', price: '₹1500', minimum: '1000 cards' },
  { finish: 'Velvet Touch', price: '₹700', minimum: '100 cards' },
  { finish: 'Leaf', price: '₹700', minimum: '100 cards' },
  { finish: 'Non-Tearable', price: '₹700', minimum: '100 cards' },
]

export interface FrameSize {
  size: string
  normal: number
  goldHalf: number
  goldOneInch: number
}

export const framingSizes: FrameSize[] = [
  { size: '12×18', normal: 600, goldHalf: 800, goldOneInch: 900 },
  { size: '24×12', normal: 1000, goldHalf: 1100, goldOneInch: 1200 },
  { size: '36×12', normal: 1200, goldHalf: 1350, goldOneInch: 1450 },
  { size: '20×16', normal: 1400, goldHalf: 1600, goldOneInch: 1700 },
  { size: '24×16', normal: 1800, goldHalf: 1900, goldOneInch: 2000 },
  { size: '18×24', normal: 1600, goldHalf: 1700, goldOneInch: 1800 },
  { size: '20×24', normal: 1800, goldHalf: 1900, goldOneInch: 2000 },
  { size: '20×30', normal: 2500, goldHalf: 2600, goldOneInch: 2700 },
  { size: '20×36', normal: 2800, goldHalf: 3000, goldOneInch: 3200 },
  { size: '20×40', normal: 3300, goldHalf: 3400, goldOneInch: 3600 },
  { size: '24×36', normal: 3500, goldHalf: 3600, goldOneInch: 3700 },
  { size: '24×48', normal: 4300, goldHalf: 4400, goldOneInch: 4500 },
  { size: '24×40', normal: 4300, goldHalf: 4500, goldOneInch: 4600 },
]
