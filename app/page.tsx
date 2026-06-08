export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-green-700">
        CivicLens
      </h1>

      <p className="mt-4 text-gray-600 text-center max-w-xl">
        AI-powered civic issue detection system that helps citizens report
        infrastructure problems and assists authorities in prioritization.
      </p>
      <div className="mt-6 flex space-x-4">
      <a href="/report">
        <button className="px-4 py-2 bg-green-600 text-white rounded-xl">
          Report Issue
        </button>
      </a>

      <a href="/map">
        <button className="px-4 py-2 border border-gray-400 rounded-xl">
          View Map
        </button>
        </a>
      </div>
    </main>
  );
}