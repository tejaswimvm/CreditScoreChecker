export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 bg-white text-gray-800 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-10">Terms of Service</h1>

      <div className="space-y-8 text-base leading-relaxed">
        <p>
          Welcome to <strong>livet.in</strong>! By using our credit score checking platform, you agree to the terms outlined below. Please read them carefully before proceeding.
        </p>

        {[
          {
            title: "1. Use of the Service",
            body: "You agree to use livet.in only for lawful purposes and to check your own credit score or that of others with proper authorization."
          },
          {
            title: "2. Accuracy of Information",
            body: "You are responsible for providing accurate and up-to-date information when using our services. False data may affect your results."
          },
          {
            title: "3. Data Privacy",
            body: "We take privacy seriously. Your personal data is used only for providing credit insights and is handled in accordance with our Privacy Policy."
          },
          {
            title: "4. Service Availability",
            body: "We strive to maintain reliable service, but we do not guarantee uninterrupted access. We may modify or discontinue features at any time."
          },
          {
            title: "5. Termination",
            body: "We reserve the right to suspend or terminate your access for violations of these terms, including misuse of the service or attempts to breach security."
          },
          {
            title: "6. Changes to Terms",
            body: "We may update these Terms of Service occasionally. Continued use of the platform after changes implies your acceptance of the updated terms."
          }
        ].map(({ title, body }) => (
          <section key={title}>
            <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
            <p className="text-gray-700">{body}</p>
          </section>
        ))}

        <p className="text-gray-600 border-t pt-6">
          Have questions? Contact us at{" "}
          <a href="mailto:support@livet.in" className="text-blue-600 underline hover:text-blue-800">
            support@livet.in
          </a>.
        </p>
      </div>
    </div>
  );
}
