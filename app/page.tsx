export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f0e8] text-[#171717]">
      <header className="flex items-center justify-between border-b border-black/15 px-6 py-5 md:px-10">
        <div className="leading-tight">
          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
            Exeter Politics Society
          </p>
          <p className="text-xs text-black/55">University of Exeter</p>
        </div>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#academic">Academic</a>
          <a href="#committee">Committee</a>
          <a href="#partners">Partners</a>
          <a
            href="#join"
            className="border border-black px-4 py-2 transition hover:bg-black hover:text-white"
          >
            Join
          </a>
        </nav>
      </header>

      <section className="grid min-h-[78vh] items-end px-6 pb-10 pt-20 md:grid-cols-12 md:px-10 md:pb-14">
        <div className="md:col-span-9">
          <p className="mb-5 text-sm uppercase tracking-[0.22em] text-black/55">
            Politics beyond the lecture hall
          </p>

          <h1 className="max-w-6xl text-[15vw] font-medium leading-[0.82] tracking-[-0.06em] md:text-[8vw]">
            Politics Society
            <br />
            University of Exeter.
          </h1>
        </div>

        <div className="mt-10 md:col-span-3 md:mt-0">
          <p className="max-w-sm text-base leading-7 text-black/65">
            Bringing together more than 500 students through weekly socials,
            academic talks, debates, trips and events across the year.
          </p>

          <div className="mt-7 flex gap-3">
            <a
              href="#join"
              className="bg-black px-5 py-3 text-sm text-white transition hover:bg-black/80"
            >
              Join the Society
            </a>

            <a
              href="#events"
              className="border border-black/30 px-5 py-3 text-sm transition hover:border-black"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </section>

      <section className="grid border-y border-black/15 md:grid-cols-4">
        {[
          ["500+", "Members"],
          ["Weekly", "Events"],
          ["Year-round", "Academic programme"],
          ["Exeter", "Since XXXX"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="border-b border-black/15 px-6 py-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-10"
          >
            <p className="text-4xl tracking-[-0.04em]">{value}</p>
            <p className="mt-2 text-sm text-black/50">{label}</p>
          </div>
        ))}
      </section>
    </main>
  );
}