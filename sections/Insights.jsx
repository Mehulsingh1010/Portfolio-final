import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formRef = useRef();
  const [message, setMessage] = useState(''); // State to hold success/error messages
  const [isSending, setIsSending] = useState(false); // State to manage sending status
  const [lastSendTime, setLastSendTime] = useState(0); // State to track last send time

  const sendEmail = (e) => {
    e.preventDefault();

    const currentTime = new Date().getTime();

    // Check if the message field is empty
    const messageInput = formRef.current.message.value.trim();
    if (!messageInput) {
      setMessage('Please enter a message before sending.'); // Set error message for empty message
      return; // Prevent sending
    }

    // Check if the user has sent a message in the last 10 seconds
    if (currentTime - lastSendTime < 10000) {
      setMessage('You must wait 10 seconds before sending another message.'); // Set error message for rate limit
      return; // Prevent sending
    }

    setIsSending(true); // Set sending state to true
    setMessage('Sending your message...'); // Set loading message

    emailjs.sendForm(
      'service_ifsfg0c', // Your service ID
      'template_zkyz8rd', // Your template ID
      formRef.current,
      'H3Gs4gw6l-vESwAyi', // Your user ID
    )
      .then(
        (result) => {
          setMessage('Message sent successfully!'); // Set success message
          console.log(result.text);
          setLastSendTime(currentTime); // Update last send time
        },
        (error) => {
          setMessage('Failed to send message. Please try again.'); // Set error message
          console.log(error.text);
        },
      )
      .finally(() => {
        setIsSending(false); // Reset sending state
        formRef.current.reset(); // Reset form after submission
      });
  };

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
          <p className="text-gray-400">Hire me for work! Contact here</p>
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
            ref={formRef}
            onSubmit={sendEmail}
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
              className="w-full py-3 px-6 rounded-lg bg-[#3b97d8] hover:bg-[#6e68c1] transition"
              disabled={isSending} // Disable button while sending
            >
              {isSending ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </div>

        {/* Success/Error Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-center text-white"
          >
            <p>{message}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
