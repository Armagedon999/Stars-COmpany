import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const collectionAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero min-h-[90vh] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <img 
            src="https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Night Sky Background"
            className="w-full h-full object-cover object-center scale-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-[2px]"></div>
        </motion.div>
        <div className="hero-content text-center text-white relative z-10 pt-32">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-7xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-secondary"
            >
              I am Stars
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12 text-4xl font-poppins"
            >
              Abadikan Nama Anda di Bintang
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <Link to="/products" className="btn btn-secondary btn-lg">
                Temukan Bintang Anda
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black">
                Tentang Kami
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Exclusive Collection Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={collectionAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-cinzel mb-4 text-white">I am Stars</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Abadikan nama Anda di bintang dan ciptakan kenangan abadi di alam semesta.
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
              variants={cardAnimation}
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
              variants={cardAnimation}
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
              variants={cardAnimation}
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

      {/* Unique Experience Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-cinzel mb-6 text-white">Pengalaman Tak Terlupakan</h2>
              <p className="text-lg mb-6 text-gray-400">
                Setiap bintang yang Anda pilih akan menjadi bagian dari sejarah langit malam. 
                Kami menyediakan pengalaman personalisasi yang tak tertandingi.
              </p>
              <motion.ul 
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.li 
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <span className="text-secondary text-2xl">✓</span>
                  <span className="text-gray-400">Sertifikat premium dengan desain eksklusif</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <span className="text-secondary text-2xl">✓</span>
                  <span className="text-gray-400">Peta bintang digital interaktif</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <span className="text-secondary text-2xl">✓</span>
                  <span className="text-gray-400">Konsultasi astronomi pribadi</span>
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gray-900/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 overflow-hidden">
                <img 
                  src="/images/imag.jpg" 
                  alt="Galaxy View" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-cinzel mb-6 text-white">Siap Memulai Perjalanan Bintang Anda?</h2>
            <p className="text-lg text-gray-400 mb-8">
              Temukan bintang sempurna untuk Anda atau orang terkasih
            </p>
            <Link to="/products" className="btn btn-secondary btn-lg">
              Jelajahi Koleksi Kami
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 