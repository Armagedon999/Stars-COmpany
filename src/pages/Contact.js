import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-cinzel mb-4 text-white">Hubungi Kami</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Kami siap membantu Anda menemukan bintang sempurna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-gray-900 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="card-body p-0">
                <h2 className="card-title text-secondary mb-6 text-2xl">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-secondary text-xl"></i>
                    <span className="text-gray-400 text-lg">info@iamstars.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-phone text-secondary text-xl"></i>
                    <span className="text-gray-400 text-lg">+62 123 4567 890</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-map-marker-alt text-secondary text-xl"></i>
                    <span className="text-gray-400 text-lg">Jakarta, Indonesia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gray-900/50 backdrop-blur-sm shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700">
              <div className="card-body p-0">
                <h2 className="card-title text-secondary mb-6 text-2xl">Kirim Pesan</h2>
                <form className="space-y-6">
                  <div className="form-control">
                    <input type="text" placeholder="Nama Anda" className="input input-bordered bg-gray-800/50 backdrop-blur-sm text-white rounded-xl border border-gray-700 focus:border-secondary" />
                  </div>
                  <div className="form-control">
                    <input type="email" placeholder="Email Anda" className="input input-bordered bg-gray-800/50 backdrop-blur-sm text-white rounded-xl border border-gray-700 focus:border-secondary" />
                  </div>
                  <div className="form-control">
                    <textarea className="textarea textarea-bordered bg-gray-800/50 backdrop-blur-sm text-white rounded-xl border border-gray-700 focus:border-secondary" placeholder="Pesan Anda"></textarea>
                  </div>
                  <button className="btn btn-secondary btn-lg w-full rounded-xl">Kirim Pesan</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 