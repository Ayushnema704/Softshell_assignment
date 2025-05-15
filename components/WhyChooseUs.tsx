import { motion } from 'framer-motion';
import { BoltIcon, ShieldCheckIcon, UserGroupIcon, EyeIcon } from '@heroicons/react/24/outline';

const reasons = [
  {
    title: 'Fast Payouts',
    description: 'Get paid quickly for your licenses.',
    icon: BoltIcon,
    color: 'from-primary to-accent',
  },
  {
    title: 'Secure Transactions',
    description: 'Your data is safe with us.',
    icon: ShieldCheckIcon,
    color: 'from-accent to-secondary',
  },
  {
    title: 'Expert Support',
    description: 'Our team is here to help you.',
    icon: UserGroupIcon,
    color: 'from-secondary to-primary',
  },
  {
    title: 'Transparent Process',
    description: 'No hidden fees or surprises.',
    icon: EyeIcon,
    color: 'from-primary to-secondary',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 flex flex-col items-center rounded-2xl shadow-xl"
            >
              <div className={`bg-gradient-to-br ${reason.color} p-4 rounded-full mb-6 shadow-lg`}>
                <reason.icon className="h-9 w-9 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">{reason.title}</h3>
              <p className="text-center text-dark/80 dark:text-light/80">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 