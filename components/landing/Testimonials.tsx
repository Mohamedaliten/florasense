'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    content: "PlantGuard has revolutionized how we manage our greenhouse. The real-time monitoring and automated controls have increased our yield by 40%.",
    author: "Sarah Chen",
    role: "Head of Agriculture, GreenTech Farms",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The mobile app is a game-changer. I can monitor and adjust growing conditions from anywhere, giving me peace of mind when I'm away.",
    author: "Michael Rodriguez",
    role: "Owner, Urban Greens",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The automated alerts have saved our crops multiple times by notifying us of critical condition changes before they became problems.",
    author: "Emily Watson",
    role: "Operations Manager, Vertical Farms Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="testimonials" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by growers worldwide
          </p>
        </div>
        <div
          ref={containerRef}
          className="mx-auto mt-16 flow-root sm:mt-20 relative overflow-hidden"
        >
          <div className="flex space-x-8 pb-4">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-none w-80 bg-white p-6 shadow-xl ring-1 ring-gray-200 rounded-2xl"
              >
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}