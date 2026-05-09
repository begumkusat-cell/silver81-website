export default function StoriesPage() {
    return (
      <main className="min-h-screen bg-black text-white p-20">
        <a
  href="/"
  className="text-white/50 hover:text-white transition"
>
  ← home
</a>
<h1 className="text-5xl mb-10 mt-16 text-center">
  stories written by silver81
</h1>
  
        <div className="space-y-6">
        <a
  href="/stories/lost-child"
  className="block w-full max-w-3xl mx-auto mt-24 border border-white/20 p-6 rounded-2xl hover:border-white/60 transition"
>
          <h2 className="text-3xl mb-2">The Lost Child</h2>
            <p className="text-white/70">
            An eighteen-year-old girl who wants to escape her memories.
            </p>
            </a>
  
         
        </div>
      </main>
    );
  }