export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm">
          AI-Powered Community Intelligence
        </span>

        <h1 className="hero-title">
          The public <span className="gradient-text">intelligence</span> layer for every city.
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Report issues, share experiences, discuss concerns,
          and discover AI-powered insights about any location.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="/feed">
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl">
              Explore Community
            </button>
          </a>

          <a href="/report">
            <button className="px-6 py-3 border rounded-xl">
              Report an Issue
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}