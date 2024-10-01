import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const formFields = [
    { name: 'name', label: 'Your Name', type: 'text' },
    { name: 'email', label: 'Email Address', type: 'email' },
    { name: 'message', label: 'Your Message', type: 'textarea' },
  ];

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-7xl text-white font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">Hire me for work ! Contact here</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Column */}
          <div className="lg:w-1/2 lg:flex lg:flex-col">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden h-[180px] lg:flex-grow lg:h-auto bg-gradient-to-r from-purple-600 to-blue-600"
            >
              <img
                src="/planet-08.png"
                alt="Metaverse visual"
                className="w-full h-full object-cover opacity-75"
              />
            </motion.div>
          </div>

          {/* Form Column */}
          <motion.form
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {formFields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <label htmlFor={field.name} className="block text-gray-300">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-white bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    className="w-full px-4 py-3 rounded-lg text-white bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-[#3b97d8] hover:bg-[#6e68c1] flex items-center justify-center space-x-2 transition duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
