export default function FeatureCards() {
  const features = [
    {
      title: "Report Issues",
      icon: "📍",
      description:
        "Report potholes, broken lights, waste management issues and more.",
    },
    {
      title: "Community Discussions",
      icon: "🗣️",
      description:
        "Share local experiences and discuss issues affecting your area.",
    },
    {
      title: "Location Intelligence",
      icon: "🗺️",
      description:
        "View reports and experiences directly on an interactive map.",
    },
    {
      title: "AI Insights",
      icon: "🤖",
      description:
        "Discover emerging trends and community sentiment using AI.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Everything you need to understand your city
      </h2>

      <div className="feature-card">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}