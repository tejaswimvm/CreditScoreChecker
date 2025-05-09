export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 bg-white rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">About livet.in</h1>
      <p className="text-lg mb-10 text-center text-gray-600">
        Your trusted source for credit score checking and financial insights. Simplifying your financial health in 5 key steps.
      </p>

      <section className="space-y-12">
        {[ 
          {
            title: 'Who We Are',
            content: `livet.in is a platform dedicated to helping you understand and improve your credit score. Our aim is to empower individuals with the knowledge to make informed decisions about their financial health, through easy-to-understand credit score insights and recommendations.`
          },
          {
            title: 'Our Mission',
            content: `To provide accurate, actionable, and accessible credit score insights for everyone. We strive to deliver transparent and simple solutions that enable you to take charge of your financial future, one score at a time.`
          },
          {
            title: 'What Makes Us Different',
            content: (
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Accurate Insights:</strong> We provide reliable and up-to-date credit score data to keep you informed.</li>
                <li><strong>User-Centric:</strong> Everything we do is tailored to simplify your credit score journey.</li>
                <li><strong>Educational Focus:</strong> We believe in empowering you with knowledge, not just numbers.</li>
                <li><strong>Simple & Transparent:</strong> No hidden fees or confusing jargon—just clear and honest credit score insights.</li>
                <li><strong>Supportive Community:</strong> We’re more than just a platform; we’re a resource to help you take control of your financial destiny.</li>
              </ul>
            )
          },
          {
            title: 'Join the Community',
            content: `Ready to understand your credit score and take control of your financial future? Sign up for free and gain access to tools, resources, and insights that will help you on your journey toward financial stability.`
          }
        ].map(({ title, content }) => (
          <div key={title}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
            <div className="text-gray-700 text-base">{content}</div>
          </div>
        ))}
      </section>

      <div className="text-center mt-16 border-t pt-8">
        <p className="text-gray-600">📬 Have questions or want to partner with us?</p>
        <a href="mailto:support@livet.in" className="text-blue-600 hover:underline font-medium">
          support@livet.in
        </a>
      </div>
    </div>
  );
}
