import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60 pointer-events-none" />

      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs backdrop-blur">
              Interactive • Minimal • Modern
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Crafting smooth, modern web experiences
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              I design and build polished interfaces with motion-first thinking and clean code.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90 transition-opacity">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/15 transition-colors">
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
