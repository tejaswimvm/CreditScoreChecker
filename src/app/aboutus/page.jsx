export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 bg-white rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-4">About Top5Shots</h1>
      <p className="text-lg mb-10 text-center text-gray-600">
        Your daily dose of the world’s top 5 trending stories, updates, and recommendations—served fresh, fast, and factual.
      </p>

      <section className="space-y-12">
        {[
          {
            title: 'Who We Are',
            content: `Top5Shots is a curated content platform built for the busy and the curious. We believe in delivering concise, powerful, and meaningful content in the form of top 5 lists—ranging from trending news, tech gadgets, entertainment buzz, to lifestyle tips.`
          },
          {
            title: 'Our Mission',
            content: `To simplify the overwhelming information flood by giving you only what truly matters. Each day, we research, refine, and present the top 5 most valuable shots of information across categories to keep you updated and ahead.`
          },
          {
            title: 'What Makes Us Different',
            content: (
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Curated Quality:</strong> Every shot is researched, verified, and valuable.</li>
                <li><strong>Time-Saving:</strong> 5 shots a day is all you need to stay informed.</li>
                <li><strong>Visual + Verbal:</strong> We blend strong headlines with striking visuals.</li>
                <li><strong>Multi-Niche:</strong> News, Tech, Lifestyle, Offers, and more.</li>
                <li><strong>Made for You:</strong> Built for fast scrolls, short reads, and deep impact.</li>
              </ul>
            )
          },
          {
            title: 'Join the Movement',
            content: `Whether you’re a news junkie, a tech geek, a deal hunter, or just someone who loves top 5 lists—Top5Shots is your new favorite corner of the internet. Subscribe, follow us, and stay tuned for your daily shots of clarity.`
          }
        ].map(({ title, content }) => (
          <div key={title}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
            <div className="text-gray-700 text-base">{content}</div>
          </div>
        ))}
      </section>

      <div className="text-center mt-16 border-t pt-8">
        <p className="text-gray-600">📬 Got feedback or want to collaborate?</p>
        <a href="mailto:hello@top5shots.com" className="text-blue-600 hover:underline font-medium">
          hello@top5shots.com
        </a>
      </div>
    </div>
  );
}
