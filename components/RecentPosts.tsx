export default function RecentPosts() {
  const posts = [
    {
      title: "Streetlight not working",
      location: "Indiranagar",
      time: "12 min ago",
    },
    {
      title: "Harassment reported near bus stop",
      location: "Whitefield",
      time: "35 min ago",
    },
    {
      title: "Overflowing garbage bin",
      location: "Koramangala",
      time: "1 hour ago",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-8">
        Recent Community Reports
      </h2>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.title}
            className="bg-white rounded-xl shadow p-6"
          >
            <h3 className="font-semibold text-lg">
              {post.title}
            </h3>

            <p className="text-gray-500 mt-2">
              📍 {post.location}
            </p>

            <p className="text-sm text-gray-400 mt-1">
              {post.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}