import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-20 pb-20 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font font-bold tracking-tight text-gray-900 sm:text-6xl">
            Smart Plant Monitoring for Modern Agriculture
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Monitor and control your plant factory with precision. Get real-time insights and automated controls for optimal growth conditions.
          </p>
          <div className="mt-10">
            <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:top-20 lg:w-1/2">
            <Image
              src="https://cdn.dribbble.com/userupload/10404230/file/original-79d196a4aea1e36abc3cc85b892ad0fe.png?resize=1024x768&vertical=center"
              alt="Plant monitoring dashboard"
              width={800}
              height={600}
              className="rounded-xl shadow-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}