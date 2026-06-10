import { useState } from 'react'
import {
  framingSizes,
  printCategories,
  visitingCards,
} from '@/constants/pricing'

export default function PricingSection() {
  const [openCategoryId, setOpenCategoryId] = useState<string>('normal-flex')

  const toggleCategory = (id: string) => {
    setOpenCategoryId((currentId) => (currentId === id ? '' : id))
  }

  return (
    <section id="pricing" className="bg-brand-bg px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
          Transparent Pricing
        </p>
        <h2 className="mt-3 text-4xl font-extrabold text-brand-text md:text-5xl">
          Simple, Honest <span className="text-gradient">Pricing</span>
        </h2>
        <div
          className="mx-auto mt-4 h-1 w-16 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
          }}
        />
        <p className="mt-4 text-center text-base text-brand-muted">
          No hidden charges. What you see is what you pay.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-3">
        {printCategories.map((category) => {
          const isOpen = openCategoryId === category.id

          return (
            <div
              key={category.id}
              className={`overflow-hidden rounded-2xl border ${
                isOpen ? 'border-brand-primary/30' : 'border-slate-200'
              }`}
            >
              <button
                type="button"
                className={`flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left transition-colors ${
                  isOpen
                    ? 'text-white'
                    : 'bg-white text-brand-text hover:bg-brand-light'
                }`}
                style={
                  isOpen
                    ? {
                        background:
                          'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
                      }
                    : undefined
                }
                onClick={() => toggleCategory(category.id)}
              >
                <span className="text-sm font-semibold">{category.title}</span>
                <span
                  className={`text-xs ${
                    isOpen ? 'text-white' : 'text-brand-muted'
                  }`}
                >
                  {isOpen ? '▲' : '▼'}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-brand-primary/10 bg-white">
                  {category.items.map((item, index) => (
                    <div
                      key={`${category.id}-${item.label}`}
                      className={`flex items-center justify-between gap-4 px-5 py-3 ${
                        index < category.items.length - 1
                          ? 'border-b border-slate-100'
                          : ''
                      }`}
                    >
                      <span className="text-sm text-brand-muted">
                        {item.label}
                      </span>
                      <span className="text-right text-sm font-bold text-brand-primary">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-extrabold text-brand-text">
          Visiting <span className="text-gradient">Cards</span>
        </h3>
        <p className="mt-2 text-center text-sm text-brand-muted">
          Minimum quantities apply per finish type.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {visitingCards.map((card) => (
          <article
            key={card.finish}
            className="group cursor-default rounded-2xl border border-slate-100 bg-white p-5 text-center transition-all duration-200 hover:border-brand-primary/40 hover:shadow-lg"
          >
            <h4 className="text-sm font-semibold text-brand-text transition-colors group-hover:text-brand-primary">
              {card.finish}
            </h4>
            <p className="text-gradient mt-2 text-2xl font-extrabold">
              {card.price}
            </p>
            <p className="mt-1 text-xs text-brand-muted">{card.minimum}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-extrabold text-brand-text">
          Framing &amp; <span className="text-gradient">Size Pricing</span>
        </h3>
        <p className="mb-8 mt-2 text-center text-sm text-brand-muted">
          All prices in ₹ (Indian Rupees) · Sizes in inches
        </p>
      </div>

      <div className="mx-auto max-w-3xl overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
        <table className="w-full border-collapse bg-white text-sm">
          <thead>
            <tr
              className="text-white"
              style={{
                background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
              }}
            >
              <th className="rounded-tl-2xl px-5 py-4 text-left text-sm font-semibold">
                Size
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Normal
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Gold ½ inch
              </th>
              <th className="rounded-tr-2xl px-5 py-4 text-left text-sm font-semibold">
                Gold 1 inch
              </th>
            </tr>
          </thead>
          <tbody>
            {framingSizes.map((frame, index) => (
              <tr
                key={frame.size}
                className={index % 2 === 0 ? 'bg-white' : 'bg-brand-light'}
              >
                <td className="px-5 py-3 text-sm font-semibold text-brand-text">
                  {frame.size}
                </td>
                <td className="px-5 py-3 text-sm text-brand-charcoal">
                  ₹{frame.normal}
                </td>
                <td className="px-5 py-3 text-sm text-brand-charcoal">
                  ₹{frame.goldHalf}
                </td>
                <td className="px-5 py-3 text-sm text-brand-charcoal">
                  ₹{frame.goldOneInch}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-xl font-bold text-brand-text">
          Not sure what you need?
        </h3>
        <p className="mb-6 mt-2 text-sm text-brand-muted">
          Just call or WhatsApp - we&apos;ll help you figure out exactly what
          you need.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="tel:9025647318"
            className="rounded-full px-8 py-4 font-semibold text-white shadow-lg shadow-red-200 transition hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
            }}
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919025647318"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-green-500 px-8 py-4 font-semibold text-green-600 transition hover:bg-green-50"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
