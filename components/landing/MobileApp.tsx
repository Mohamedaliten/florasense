import Image from 'next/image';
import { Check } from 'lucide-react';

const features = [
  'Monitor your plants from anywhere',
  'Receive real-time notifications',
  'Control systems remotely',
  'View detailed analytics',
  'Manage multiple locations',
  'Share access with team members',
];

export default function MobileApp() {
  return (
    <div id="mobile-app" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-green-600">Mobile Control</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Take control from anywhere
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mobile app puts the power of plant monitoring in your pocket. Stay connected to your
              growing operation wherever you are.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-gray-600 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="https://cdn.dribbble.com/userupload/10404234/file/original-e7ed103dab295c0e986b3f12b113b4d6.png?resize=774x581&vertical=center"
              alt="Mobile app interface"
              width={600}
              height={800}
              className="rounded-2xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}