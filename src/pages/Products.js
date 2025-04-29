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

const Products = () => {
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
            <h1 className="text-4xl font-cinzel mb-4 text-white">Koleksi Bintang Kami</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Temukan bintang sempurna untuk Anda atau orang terkasih
            </p>
          </motion.div>

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
                <h2 className="card-title text-secondary mb-6 text-2xl">Bintang Premium</h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Bintang dengan magnitudo terang yang dapat dilihat dengan mata telanjang.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary btn-lg rounded-xl active:animate-pulse">Beli Sekarang</button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="card bg-gray-900/50 backdrop-blur-sm shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20"
              variants={fadeInUp}
            >
              <div className="card-body p-0">
                <h2 className="card-title text-secondary mb-6 text-2xl">Paket Hadiah</h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Paket lengkap termasuk sertifikat premium dan peta bintang.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary btn-lg rounded-xl active:animate-pulse">Beli Sekarang</button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="card bg-gray-900/50 backdrop-blur-sm shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20"
              variants={fadeInUp}
            >
              <div className="card-body p-0">
                <h2 className="card-title text-secondary mb-6 text-2xl">Koleksi Spesial</h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Bintang-bintang langka dengan karakteristik unik.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary btn-lg rounded-xl active:animate-pulse">Beli Sekarang</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products; 