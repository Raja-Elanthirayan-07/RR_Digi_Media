const qualities = [
  ['01', 'Local, in-person service', 'Bring in an idea, an existing design, or a reference — and discuss the practical details face to face.'],
  ['02', 'Design to display', 'From artwork support through printed output, select the format that fits where your message needs to appear.'],
  ['03', 'A considered range', 'Choose from display printing, promotional materials, invitations, visiting cards and framing options.'],
]
export default function WhyChooseUs() {
  return <section className="bg-brand-dark px-5 py-16 text-white sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow !text-brand-secondary">A reliable local counter</p><h2 className="display mt-4 max-w-md text-4xl leading-none sm:text-5xl">The work is personal. The process should be, too.</h2><p className="mt-6 max-w-md text-base leading-7 text-white/65">Whether it is one important occasion or a full run of printed material, start with a clear conversation about the job.</p></div><div className="divide-y divide-white/15 border-t border-white/15">{qualities.map(([number, title, description]) => <article key={number} className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6"><span className="text-xs font-bold tracking-[.16em] text-brand-secondary">{number}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/65">{description}</p></div></article>)}</div></div></section>
}
