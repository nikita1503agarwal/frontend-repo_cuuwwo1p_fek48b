import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-200 text-xs mb-4">
              Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-white/70">I’m available for freelance work and collaborations. Send me a message and I’ll get back to you.</p>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500/40" />
              <input type="email" placeholder="Email" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500/40" />
              <textarea placeholder="Message" rows="4" className="sm:col-span-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500/40" />
              <div>
                <button type="button" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90 transition-opacity">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-white/50 text-sm">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
      </div>
    </section>
  )
}
