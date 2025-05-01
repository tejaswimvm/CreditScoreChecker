import React from "react";

const Info = () => {
  const offers = [
    {
      title: "Amazing Offers",
      subtitle: "Grab exciting deals & discounts from premium brands.",
      bg: "bg-[#ede9fe] border border-[#c4b5fd]",
      icon: "https://www.livemint.com/lm-img/pf/img/crif_access_offers.webp",
    },
    {
      title: "Curated Insights",
      subtitle: "Expert advice, podcasts, and tools to guide you.",
      bg: "bg-[#f3f4f6] border border-gray-300",
      icon: "https://www.livemint.com/lm-img/pf/img/crif_exlusive_insight.webp",
    },
    {
      title: "Score Boost Tips",
      subtitle: "Simple actions to improve and maintain your credit score.",
      bg: "bg-[#eff6ff] border border-[#bfdbfe]",
      icon: "https://www.livemint.com/lm-img/pf/img/crif_curated_content.webp",
    },
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Intro Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Tracking Your Score Matters</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how monitoring your credit score can unlock better financial opportunities.
          </p>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 ${offer.bg}`}
            >
              <div className="flex items-center justify-between mb-4">
                <img
                  src={offer.icon}
                  alt={`${offer.title} Icon`}
                  className="w-12 h-12 object-contain"
                />
                <img
                  src="https://www.livemint.com/lm-img/pf/img/white_right_arrow.svg"
                  alt="Arrow"
                  className="w-4 h-4 opacity-50"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{offer.title}</h3>
              <p className="text-sm text-gray-600">{offer.subtitle}</p>
            </div>
          ))}
        </section>

        {/* Informational Sections */}
        <section className="space-y-16 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Understanding Credit Score</h2>
            <p className="text-base leading-relaxed">
              Your credit score plays a crucial role in your financial journey. It represents your creditworthiness based on your borrowing and repayment history. Lenders, landlords, and sometimes even employers use this score to evaluate how reliably you handle credit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Why Does It Matter?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Higher scores increase your chances of loan approval with better terms.</li>
              <li>A low score may result in high-interest rates or outright rejection.</li>
              <li>It affects not only loans but also rental approvals and credit card offers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">How to Maintain a Healthy Score</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Pay your credit card and loan EMIs on time.</li>
              <li>Keep your credit utilization below 30% of the limit.</li>
              <li>Check your credit report regularly for errors.</li>
              <li>Maintain a good mix of secured and unsecured credit.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Credit Score Ranges</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-blue-50 text-blue-800">
                  <tr>
                    <th className="px-4 py-2 text-left">Score Range</th>
                    <th className="px-4 py-2 text-left">Rating</th>
                    <th className="px-4 py-2 text-left">What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2">800 and above</td>
                    <td className="px-4 py-2">Excellent</td>
                    <td className="px-4 py-2">Easiest access to loans and best terms.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">750 - 799</td>
                    <td className="px-4 py-2">Very Good</td>
                    <td className="px-4 py-2">Strong chance of approval with favorable terms.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">700 - 749</td>
                    <td className="px-4 py-2">Good</td>
                    <td className="px-4 py-2">Generally accepted by most lenders.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">650 - 699</td>
                    <td className="px-4 py-2">Fair</td>
                    <td className="px-4 py-2">Might get approved but at higher interest rates.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">300 - 649</td>
                    <td className="px-4 py-2">Poor</td>
                    <td className="px-4 py-2">Difficult to get new credit; take steps to improve your score.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Benefits of Regular Monitoring</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stay aware of any drops in score due to missed payments or increased utilization.</li>
              <li>Dispute inaccuracies in your credit report quickly.</li>
              <li>Build good habits and qualify for better financial products over time.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;