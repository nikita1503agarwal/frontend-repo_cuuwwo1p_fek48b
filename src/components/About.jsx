import { motion } from 'framer-motion'

export default function About() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={item}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-200 text-xs mb-4">
              About me
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Designer-turned-developer who cares about the details
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I blend a minimalist aesthetic with performance-focused engineering to deliver smooth, delightful experiences. I value thoughtful motion, clear hierarchy, and maintainable systems.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {['Motion Design','Accessibility','Design Systems','Frontend Eng.'].map((t) => (
                <div key={t} className="rounded-xl bg-white/5 border border-white/10 p-4 text-white/80">
                  {t}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-700/20 border border-white/10 p-1">
              <div className="h-full w-full rounded-xl bg-slate-900/60 backdrop-blur flex items-center justify-center text-white/70">
                <div className="text-center">
                  <div className="text-5xl">🧩</div>
                  <p className="mt-2">Smooth interactions, modular by design</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
