import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Micro-interaction Lab',
    description: 'A collection of tiny UI experiments exploring easing, stagger, and spring physics.',
    tags: ['Framer Motion', 'React', ' SVG'],
    link: '#'
  },
  {
    title: 'Design System Blocks',
    description: 'Composable components with tokens and theming for fast product iteration.',
    tags: ['Design Systems', 'Accessibility', 'Theming'],
    link: '#'
  },
  {
    title: 'Realtime Dashboard',
    description: 'Motion-led charts with subtle transitions for state changes and filters.',
    tags: ['Websockets', 'Charts', 'DX'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-200 text-xs mb-4">
              Selected work
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Projects with motion at the core
            </h2>
          </div>
          <div className="hidden md:block text-white/70 max-w-sm">
            Curated work that highlights polish, performance, and craft.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-rose-700/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white font-medium tracking-tight">{p.title}</h3>
                <ExternalLink className="text-white/60 group-hover:text-white" size={18} />
              </div>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-white/70 text-xs">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
