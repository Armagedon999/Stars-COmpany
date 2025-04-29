import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-cinzel mb-4 text-white">Tentang Kami</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Menghubungkan Anda dengan keindahan langit malam
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="card bg-gray-900/50 backdrop-blur-sm shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-body p-0">
                <motion.h2 
                  className="text-3xl font-cinzel mb-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Visi Kami
                </motion.h2>
                <motion.p 
                  className="text-gray-400 mb-8 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Menjadi platform terkemuka dalam menghubungkan manusia dengan keindahan alam semesta melalui bintang-bintang yang dapat mereka miliki dan abadikan namanya.
                </motion.p>
                <motion.h2 
                  className="text-3xl font-cinzel mb-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Misi Kami
                </motion.h2>
                <motion.p 
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Memberikan pengalaman unik dan berkesan dalam memiliki bintang, dengan sertifikat resmi dan layanan premium yang tak tertandingi.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gray-900/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/20">
                <span className="text-8xl">🌌</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl font-cinzel mb-12 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Tim Kami
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="card bg-gray-900/50 backdrop-blur-sm shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20"
                variants={fadeInUp}
              >
                <div className="card-body p-0">
                  <h3 className="card-title text-secondary text-2xl mb-6">Astronom</h3>
                  <p className="text-gray-400 text-lg">
                    Tim astronom kami memastikan setiap bintang yang kami tawarkan memiliki koordinat yang akurat dan dapat dilihat dari Bumi.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="card bg-gray-900/50 backdrop-blur-sm shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20"
                variants={fadeInUp}
              >
                <div className="card-body p-0">
                  <h3 className="card-title text-secondary text-2xl mb-6">Desainer</h3>
                  <p className="text-gray-400 text-lg">
                    Tim desainer kami menciptakan sertifikat dan materi visual yang elegan dan premium untuk pengalaman yang tak terlupakan.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="card bg-gray-900/50 backdrop-blur-sm shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20"
                variants={fadeInUp}
              >
                <div className="card-body p-0">
                  <h3 className="card-title text-secondary text-2xl mb-6">Customer Service</h3>
                  <p className="text-gray-400 text-lg">
                    Tim customer service kami siap membantu Anda dalam setiap langkah perjalanan bintang Anda.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 