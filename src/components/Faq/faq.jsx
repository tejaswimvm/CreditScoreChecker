"use client"
import { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is a credit score?',
      answer: 'A credit score is a three-digit figure representing your creditworthiness. It is calculated based on your credit history which includes payment history, credit utilisation, and credit types.',
    },
    {
      question: 'What is a good credit score in India?',
      answer: 'A good credit score usually ranges between 750 to 900. In case your credit score is above 750, then the credit history is excellent, and hence you can easily get a personal loan from banks & financial institutes.',
    },
    {
      question: 'What is a bad credit score?',
      answer: 'This score below 600 is usually termed bad credit score, and the low score simply means that you have bad credit history, and you will not qualify to borrow loans or credit cards with easy terms and conditions of credit.',
    },
    {
      question: 'How do banks use credit scores?',
      answer: 'Credit scores are used by banks to assess the risk factor attached to lending people. Good credit score make a customer’s chances of getting their loan accepted higher, and receiving a lower interest rate.',
    },
    {
      question: 'How long will it take to create a good credit score?',
      answer: 'Having a good credit score takes a long time and builds after you stay punctual and make all your repayments on time. Hence, it is advised to start early and try to keep a good credit history.',
    },
    {
      question: 'What should I avoid doing when building my credit score?',
      answer: 'One of the things that you should always avoid is to delay your payment as this can significantly reduce your credit score. Also, you should avoid exhausting your credit card’s full limit, and avoid making multiple credit inquiries.',
    },
    {
      question: 'Does paying utility bills or rent help my credit score?',
      answer: 'Usually, bill payments and rents do not get reported in your credit report. If these get included, then you should avoid any late repayment and be on time so that you can build a higher credit score.',
    },
    {
      question: 'How can I monitor my credit score progress as I build it?',
      answer: 'As a consumer you get to obtain one copy of your credit score and report for free, annually. Self-checking often is beneficial to ensure that you are able to detect anything wrong in your credit score.',
    },
  ];

  return (
    <section className="py-10 bg-gray-50" id="crif-faq-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">FAQs</h2>
        </div>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-6">
              <h3
                className="cursor-pointer text-xl font-medium text-gray-700 hover:text-blue-500 transition-all"
                onClick={() => togglePanel(index)}
              >
                {faq.question}
              </h3>
              <div
                className={`overflow-hidden transition-all ease-in-out duration-300 ${
                  activeIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
