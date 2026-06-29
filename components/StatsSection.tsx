export default function StatsSection() {
  const stats = [
    { label: "Reports Submitted", value: "2,341+" },
    { label: "Community Members", value: "6,000+" },
    { label: "Cities Covered", value: "18+" },
    { label: "AI Insights Generated", value: "12,000+" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl shadow p-6 text-center"
          >
            <h2 className="text-3xl font-bold text-green-600">
              {stat.value}
            </h2>

            <p className="text-gray-500 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}