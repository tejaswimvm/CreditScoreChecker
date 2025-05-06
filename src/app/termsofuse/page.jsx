export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 bg-white text-gray-800 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-10">Terms of Service</h1>

      <div className="space-y-8 text-base leading-relaxed">
        <p>
          Welcome to Top5Shots! By using our platform, you agree to the following terms. Please read them carefully.
        </p>

        {[
          {
            title: '1. Use of the Platform',
            body: 'You agree to use Top5Shots only for lawful purposes and in ways that respect others’ rights.'
          },
          {
            title: '2. Content Ownership',
            body: 'You retain ownership of your content but grant Top5Shots a license to display and distribute it as needed.'
          },
          {
            title: '3. Account Responsibilities',
            body: 'You are responsible for your account credentials and any activity on your account.'
          },
          {
            title: '4. Termination',
            body: 'We may suspend or terminate access for violations of our terms or misuse of the platform.'
          },
          {
            title: '5. Modifications',
            body: 'We may update these terms from time to time. Continued use implies acceptance of the revised terms.'
          }
        ].map(({ title, body }) => (
          <section key={title}>
            <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
            <p className="text-gray-700">{body}</p>
          </section>
        ))}

        <p className="text-gray-600 border-t pt-6">
          Have questions? Contact us at{" "}
          <a href="mailto:support@top5shots.com" className="text-blue-600 underline hover:text-blue-800">
            support@top5shots.com
          </a>.
        </p>
      </div>
    </div>
  );
}
