export default function LostChildPage() {
    return (
      <main className="min-h-screen bg-black text-[#f5f1e8] px-8 py-16">
        <a
          href="/stories"
          className="ml-8 text-white/50 hover:text-white transition"
        >
          ← back to stories
        </a>
  
        <section className="mx-auto mt-20 max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#bfc5cc]/70">
            Novel
          </p>
  
          <h1 className="text-4xl sm:text-7xl mb-6">
            The Lost Child
          </h1>
  
          <p className="max-w-4xl text-1g sm:text-xl leading-9 text-[#bfc5cc]/60 mb-16">
          They say time heals all wounds, that the pain of the past fades away after a while. Viola doesn’t believe that any pain she has will heal with time, because she still carries the wounds of the past that cause her deep pain. She wants to escape from the place she had lived since birth, as she believed by escaping that place, she can escape everything.
          </p>
  
          <div className="space-y-6">
            <a
              href="/stories/lost-child/chapter-1"
              className="block border border-white/10 p-8 rounded-3xl hover:border-[#bfc5cc]/50 transition"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#bfc5cc]/60 mb-3">
                Chapter One
              </p>
  
              <h2 className="text-4xl mb-3">
                streets of eternity
              </h2>
  
              <p className="text-[#bfc5cc]/60 text-lg">
        
              </p>
            </a>
            
          </div>
        </section>
      </main>
    );
  }