import { useState, useEffect } from "react";

const categoryColorMap = {
  Leadership: "emerald",
  Entrepreneurship: "amber",
  Community: "sky",
  Peacebuilding: "violet",
  Innovation: "rose",
  Education: "teal",
};

const categoryStyle = {
  emerald: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  sky: "bg-sky-100 text-sky-700",
  violet: "bg-violet-100 text-violet-700",
  rose: "bg-rose-100 text-rose-700",
  teal: "bg-teal-100 text-teal-700",
};

// Extracts YouTube video ID from various URL formats
function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/, // raw ID
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.15)" />
    <circle cx="24" cy="24" r="20" fill="rgba(255,255,255,0.92)" />
    <path d="M20 16.5L34 24L20 31.5V16.5Z" fill="#0d1f14" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path
      d="M6 22C6 16.477 10.477 12 16 12V16C12.686 16 10 18.686 10 22H14V30H6V22ZM20 22C20 16.477 24.477 12 30 12V16C26.686 16 24 18.686 24 22H28V30H20V22Z"
      fill="currentColor"
      opacity="0.25"
    />
  </svg>
);

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const videoId = extractYouTubeId(video.videoUrl);
  const thumb = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;
  const categoryColor = categoryColorMap[video.category] || "emerald";

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail */}
      <div
        className="relative aspect-video bg-gray-900 overflow-hidden cursor-pointer"
        onClick={() => setPlaying(true)}
      >
        {playing && videoId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        ) : (
          <>
            {thumb ? (
              <img
                src={thumb}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500 text-sm">No thumbnail</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
              <PlayIcon />
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryStyle[categoryColor]}`}
          >
            {video.category}
          </span>
        </div>
        <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 flex-1">
          {video.title}
        </h3>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="4" r="2.5" fill="#16a34a" />
              <path
                d="M1.5 10.5C1.5 8.015 3.515 6 6 6s4.5 2.015 4.5 4.5"
                stroke="#16a34a"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-400">Youth Impact Network</span>
        </div>
      </div>
    </div>
  );
}

export default function Discussions() {
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/discussions`,
          {
            credentials: "include",
          },
        );
        if (!res.ok) throw new Error("Failed to fetch discussions");
        const data = await res.json();
        setDiscussions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscussions();
  }, []);

  return (
    <section className="w-screen bg-[#f5f9f6]">
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-600" />

      {/* Header + Intro */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16">
          {/* Left: Heading */}
          <div className="md:w-1/3 mb-8 md:mb-0 md:sticky md:top-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3">
              Youth Impact Network
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-[#0d1f14] leading-tight mb-5"
              style={{
                fontFamily: "'Georgia', serif",
                letterSpacing: "-0.02em",
              }}
            >
              Discus&shy;sions
            </h2>
            <div className="w-12 h-1.5 rounded-full bg-emerald-500 mb-6" />
            <div className="text-emerald-700 opacity-70">
              <QuoteIcon />
            </div>
          </div>

          {/* Right: Intro text */}
          <div className="md:w-2/3">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              Discussions play a vital role in empowering young people to create
              meaningful impact in their communities. They provide a safe space
              for youth to express their ideas, share experiences, and learn
              from different perspectives. Through open dialogue, young people
              develop critical thinking, communication, and problem-solving
              skills that are essential for leadership and personal growth.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              More importantly, discussions spark innovation and collaboration.
              When young minds come together, they are able to identify common
              challenges and co-create practical solutions that drive positive
              change. By engaging in discussions, youth become more confident,
              informed, and motivated to take action — transforming ideas into
              real impact within their communities and beyond.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-7">
              {[
                "Leadership",
                "Innovation",
                "Community",
                "Peacebuilding",
                "Education",
                "Entrepreneurship",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-emerald-100" />
      </div>

      {/* Video Grid */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Latest Discussions
            </h3>
            <p className="text-sm text-gray-400 mt-0.5">
              {loading ? "Loading..." : `${discussions.length} videos`}
            </p>
          </div>
        </div>

        {/* States */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm animate-pulse"
              >
                <div className="aspect-video bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-red-500 font-medium">{error}</p>
            <p className="text-gray-400 text-sm mt-1">
              Please try again later.
            </p>
          </div>
        )}

        {!loading && !error && discussions.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No discussions available yet.</p>
          </div>
        )}

        {!loading && !error && discussions.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {discussions.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA strip */}
      <div className="bg-[#093118] mt-4">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm font-medium">
            Have a topic you'd like us to discuss?{" "}
            <span className="text-emerald-400">
              We'd love to hear from you.
            </span>
          </p>
          <button className="shrink-0 bg-emerald-500 hover:bg-emerald-400 transition-colors text-white text-sm font-bold px-6 py-2.5 rounded-full">
            Suggest a Topic
          </button>
        </div>
      </div>
    </section>
  );
}
