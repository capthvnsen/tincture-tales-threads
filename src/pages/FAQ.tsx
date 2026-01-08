import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What materials do you use?",
      answer: "All our pieces are crafted from 100% recycled materials. We source sustainable fabrics, repurpose vintage textiles, and use eco-friendly dyes and finishes. Each item is made with both the environment and historical authenticity in mind."
    },
    {
      question: "How do I determine my size?",
      answer: "Each product listing includes detailed measurements. We recommend measuring a garment you already own and comparing it to our size charts. If you're between sizes or unsure, reach out via email or Instagram DM and we'll help you find the perfect fit!"
    },
    {
      question: "Do you accept custom orders?",
      answer: "Absolutely! We love bringing your visions to life. Whether you need a specific color, size modification, or a completely custom design, contact us to discuss your ideas. Custom orders typically take 2-4 weeks depending on complexity."
    },
    {
      question: "How do I care for my garments?",
      answer: "Most pieces should be hand washed in cold water and laid flat to dry. Some items may be machine washable on a gentle cycle. Specific care instructions are included with each order and noted in product descriptions."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship worldwide. International shipping rates and delivery times vary by location. Please note that international orders may be subject to customs fees and import duties, which are the responsibility of the buyer."
    },
    {
      question: "What if my item doesn't fit?",
      answer: "We offer returns and exchanges within 30 days of delivery for unworn, unwashed items. For custom pieces, we're unable to accept returns unless there's a defect, so we encourage reaching out about sizing before ordering."
    },
    {
      question: "How long does shipping take?",
      answer: "Orders are handcrafted and typically ship within 3-7 business days. Standard domestic shipping takes 5-7 business days after that. Express options are available at checkout. You'll receive tracking information once your order ships."
    },
    {
      question: "Are your products suitable for Renaissance faires?",
      answer: "Absolutely! Our pieces are designed with historical inspiration and are perfect for Renaissance faires, medieval events, LARP, cosplay, and everyday wear. They're crafted to be both authentic-looking and durable."
    },
    {
      question: "Do you attend any events or faires?",
      answer: "Yes! We attend various Renaissance faires and craft markets throughout the year, primarily in the Utah and surrounding areas. Follow us on Instagram to stay updated on our event schedule."
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us via email at contact@tincturesoddsends.com or through Instagram DM @tincturesoddsandends. We typically respond within 24-48 hours."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Support</Badge>
          <h1 className="text-4xl font-bold medieval-heading mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our products and services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="medieval-card px-6"
            >
              <AccordionTrigger className="text-left text-gold hover:text-gold/80">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 medieval-card">
          <h2 className="text-2xl font-bold medieval-heading mb-4">Still Have Questions?</h2>
          <p className="text-foreground/80 mb-6">
            Can't find what you're looking for? We're here to help!
          </p>
          <a href="/contact">
            <span className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gold text-earth-brown hover:bg-gold/90 h-10 px-4 py-2">
              Contact Us
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
