import { Leaf, Cloud, Zap, Bell } from 'lucide-react';

const features = [
  {
    name: 'Real-time Monitoring',
    description: 'Track temperature, humidity, CO2 levels, and soil conditions in real-time with advanced sensors.',
    icon: Leaf,
  },
  {
    name: 'Smart Automation',
    description: 'Automate watering, ventilation, and lighting systems based on plant needs and environmental conditions.',
    icon: Zap,
  },
  {
    name: 'Cloud Integration',
    description: 'Access your plant data from anywhere with secure cloud storage and synchronization.',
    icon: Cloud,
  },
  {
    name: 'Instant Alerts',
    description: 'Receive immediate notifications when your plants need attention or system parameters are out of range.',
    icon: Bell,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to grow better
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive plant monitoring system provides all the tools you need for optimal plant growth.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}