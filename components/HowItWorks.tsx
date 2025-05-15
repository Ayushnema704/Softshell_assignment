import { motion } from 'framer-motion';
import { CloudArrowUpIcon, CurrencyDollarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Upload License',
    description: 'Upload your unused software license details.',
    icon: CloudArrowUpIcon,
    color: 'from-primary to-secondary',
  },
  {
    title: 'Get Valuation',
    description: 'Receive a fair valuation for your license.',
    icon: CurrencyDollarIcon,
    color: 'from-accent to-primary',
  },
  {
    title: 'Get Paid',
    description: 'Get paid quickly and securely.',
    icon: CheckBadgeIcon,
    color: 'from-secondary to-accent',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-10 flex flex-col items-center rounded-2xl shadow-xl"
            >
              <div className={`bg-gradient-to-br ${step.color} p-4 rounded-full mb-6 shadow-lg`}>
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 font-display">{step.title}</h3>
              <p className="text-lg text-center text-dark/80 dark:text-light/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 