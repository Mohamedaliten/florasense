'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the plant monitoring system work?",
    answer: "Our system uses advanced sensors to continuously monitor environmental conditions like temperature, humidity, CO2 levels, and soil moisture. This data is processed in real-time and accessible through our web dashboard and mobile app."
  },
  {
    question: "Can I control my growing environment remotely?",
    answer: "Yes! You can remotely control various aspects of your growing environment including irrigation, ventilation, and lighting systems through our mobile app or web dashboard."
  },
  {
    question: "What type of alerts can I receive?",
    answer: "You can receive alerts for various conditions including temperature extremes, low water levels, nutrient deficiencies, equipment malfunctions, and custom parameters you set."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard encryption and security measures to protect your data. All information is stored securely in the cloud with regular backups."
  },
  {
    question: "Can I integrate with existing systems?",
    answer: "Yes, our system is designed to integrate with most standard growing equipment and can be customized to work with your existing infrastructure."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 technical support, regular system updates, and comprehensive training for new users. Our team of experts is always available to help optimize your growing operation."
  }
];

export default function FAQ() {
  return (
    <div id="faq" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">FAQ</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </p>
        </div>
        <div className="mx-auto max-w-4xl mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}