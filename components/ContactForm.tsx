import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-16">Contact Us</h2>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass max-w-lg mx-auto p-10 rounded-2xl shadow-2xl"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent bg-white/80 dark:bg-dark/60 outline-none transition"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent bg-white/80 dark:bg-dark/60 outline-none transition"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="company" className="block mb-2 font-semibold">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent bg-white/80 dark:bg-dark/60 outline-none transition"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="licenseType" className="block mb-2 font-semibold">License Type</label>
            <select
              id="licenseType"
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent bg-white/80 dark:bg-dark/60 outline-none transition"
            >
              <option value="">Select a license type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent bg-white/80 dark:bg-dark/60 outline-none transition"
              rows={4}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full text-lg py-4">Submit</button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm; 