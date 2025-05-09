import React from "react";
import { Sparkles, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";

const offers = [
  {
    title: "Approval Impact",
    subtitle:
      "It impacts not just loan approvals but also rental approvals and credit card offers.",
    icon: <Sparkles className="w-6 h-6 text-purple-600" />,
    bg: "bg-purple-50 border border-purple-200",
  },
  {
    title: "Low Score",
    subtitle:
      "A low score can lead to exorbitant interest rates or outright rejection.",
    icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    bg: "bg-gray-100 border border-gray-300",
  },
  {
    title: "High Score",
    subtitle:
      "A high score increases your chances of loan acceptance with better terms.",
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    bg: "bg-blue-50 border border-blue-200",
  },
];

const Info = () => {
  return (
    <div className="bg-white py-8 px-6 md:px-12 lg:px-24 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Intro Section */}
        <section className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-6">
            What is credit score
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In today's interconnected world, one of the most crucial elements
            influencing how your finances will evolve is your credit score. This
            three-digit number serves as a financial fingerprint that provides a
            quick summary of your creditworthiness to lenders, tenants, and even
            some employers.
          </p>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ${offer.bg}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="bg-white p-3 rounded-full shadow-inner">
                  {offer.icon}
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 tracking-tight">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-600 leading-snug">
                {offer.subtitle}
              </p>
            </div>
          ))}
        </section>

        {/* Informational Sections */}
        <section className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Why is it crucial to monitor your scores?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                A credit score can be used to assess an individual's
                creditworthiness.
              </li>
              <li>
                Credit scores increase with improved financial management.
              </li>
              <li>
                A low credit score points to an unreliable borrower; banks
                generally avoid lending to people with low scores.
              </li>
              <li>
                A low credit score could lead to increased interest rates or the
                denial of a loan.
              </li>
              <li>
                Higher credit scores are often linked to better lending terms
                and lower interest rates.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Benefits of good credit score
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Monitor your financial activity: Being able to monitor your
                score can help you have a better understanding of your financial
                activity. This enables you to make all the necessary adjustments
                to raise your score.
              </li>
              <li>
                Check for accuracy: A lower score might occasionally result from
                mistakes or inaccuracies in your credit report. Finding problems
                through routine inspections makes it easier to submit them to
                the credit bureau and fix them.
              </li>
              <li>
                Offers good deals: You can identify better credit card or loan
                offers with the help of your credit score. A higher credit score
                makes you a more devoted borrower to lenders. Lower interest
                rates and improved conditions could result from that.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Tips to improve your score
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Avoid late payments: To ensure that you never miss a payment,
                set up an automated payment system or send out an advance
                reminder.
              </li>
              <li>
                Check for mistakes: Check your credit report frequently for any
                discrepancies; if you find any, submit a complaint to the credit
                bureau.
              </li>
              <li>
                Limit credit utilization: By lowering your credit utilization
                ratio, you can improve your credit score by never using more
                than 30% of your credit limit.
              </li>
              <li>
                Reduce the number of credit inquiries: Applying for multiple
                loans or credit cards at the same time could have an impact on
                your credit score. Use extreme caution when deciding where and
                when to apply.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Ranges of credit score
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full bg-white text-sm text-left">
                <thead className="bg-blue-100 text-blue-900">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Range of scores</th>
                    <th className="px-6 py-3 font-semibold">Rating</th>
                    <th className="px-6 py-3 font-semibold">
                      {" "}
                      What it signifies
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">800 and above</td>
                    <td className="px-6 py-4">Excellent</td>
                    <td className="px-6 py-4">
                      The finest conditions and easiest access to loans.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">750 - 799</td>
                    <td className="px-6 py-4">Very Good</td>
                    <td className="px-6 py-4">
                      High likelihood of acceptance on favorable terms.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">700 - 749</td>
                    <td className="px-6 py-4">Good</td>
                    <td className="px-6 py-4">
                      The majority of lenders generally accept it.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">650 - 699</td>
                    <td className="px-6 py-4">Fair</td>
                    <td className="px-6 py-4">
                      Approval may occur, but interest rates will be higher.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">300 - 649</td>
                    <td className="px-6 py-4">Poor</td>
                    <td className="px-6 py-4">
                      Getting new credit is hard; try to raise your score.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Advantages of Consistent Monitoring
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Pay attention to any declines in your score brought on by late
                payments or higher usage.
              </li>
              <li>Resolve errors in your credit report as soon as possible.</li>
              <li>
                Over time, develop positive habits to become eligible for better
                financial products.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;
