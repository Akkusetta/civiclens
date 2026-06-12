export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-green-700">
        CivicLens
      </h1>

      <p className="mt-4 text-gray-600 text-center max-w-2xl">
        An AI-powered community intelligence platform where citizens can
        report issues, share local experiences, discuss community concerns,
        and discover insights about places through collective knowledge.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a href="/report">
          <button className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">
            Report Issue
          </button>
        </a>

        <a href="/map">
          <button className="px-4 py-2 border border-gray-400 rounded-xl hover:bg-gray-100">
            View Map
          </button>
        </a>

        <a href="/login">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Login
          </button>
        </a>

        <a href="/signup">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700">
            Sign Up
          </button>
        </a>
      </div>

      <div className="mt-12 text-center max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          What can you do with CivicLens?
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-left">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">📍 Report Issues</h3>
            <p className="text-gray-600">
              Report potholes, garbage, broken streetlights and other civic problems.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">🗣️ Community Discussions</h3>
            <p className="text-gray-600">
              Share experiences and discuss concerns tied to real locations.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">🗺️ Location Intelligence</h3>
            <p className="text-gray-600">
              Explore community reports and local insights on an interactive map.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">🤖 AI Insights</h3>
            <p className="text-gray-600">
              Discover trends, area summaries, and emerging community concerns.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}