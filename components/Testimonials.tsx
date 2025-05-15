import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO',
    company: 'TechCorp',
    quote: 'SoftSell made selling our unused licenses a breeze. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    company: 'Innovate Inc',
    quote: 'Fast, secure, and transparent. SoftSell is the way to go!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-16">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-2xl shadow-xl flex flex-col items-center"
            >
              <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4 border-4 border-accent shadow-md" />
              <p className="italic text-lg mb-6 text-center">“{testimonial.quote}”</p>
              <p className="font-bold text-accent text-lg">{testimonial.name}</p>
              <p className="text-dark/70 dark:text-light/70">{testimonial.role}, {testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 