"use client";

import Image from "next/image";

const FIXR_ORGANISER = "https://fixr.co/organiser/962072334";
const FRESHERS_FIXR =
  "https://fixr.co/event/ice-breaker-social-exeter-politics-society-tickets-238222151";

const events = [
  {
    day: "15",
    month: "SEP",
    tag: "FRESHERS",
    title: "Ice Breaker Social",
    text: "Our Freshers-only launch night at The Cocktail Club on Gandy Street, with half-price cocktails all night.",
    meta: "19:30–20:00 entry · The Cocktail Club",
    cta: "Get tickets",
    href: FRESHERS_FIXR,
  },
  {
    day: "WEEKLY",
    month: "TERM",
    tag: "SOCIAL",
    title: "Tuesday Night Socials",
    text: "PolSoc runs socials every week throughout term, from club nights and pub golf to mixers, quizzes and joint-society events.",
    meta: "New tickets released through FIXR",
    cta: "Browse events",
    href: FIXR_ORGANISER,
  },
  {
    day: "TBC",
    month: "AUT",
    tag: "ACADEMIC",
    title: "Speaker Series",
    text: "Talks, debates and conversations with people from politics, academia, journalism, diplomacy and public life.",
    meta: "University of Exeter",
    cta: "Follow upcoming releases",
    href: FIXR_ORGANISER,
  },
];

const sports = [
  {
    n: "01",
    name: "Football",
    team: "Bercow’s Bandicoots",
    handle: "@bercowsbandicoots",
    copy: "PolSoc’s football side and one of the society’s longest-running intramural teams.",
    link: "https://www.instagram.com/bercowsbandicoots/",
    image: "/sport/football.jpg",
  },
  {
    n: "02",
    name: "Netball",
    team: "First Past the Post",
    handle: "@firstpastthepostnetball",
    copy: "Matches every Sunday, with a social and welcoming team open to PolSoc members.",
    link: "https://www.instagram.com/firstpastthepostnetball/",
    image: "/sport/netball.jpg",
  },
  {
    n: "03",
    name: "Cricket",
    team: "The Spin Doctors",
    handle: "@thespindoctors.ex",
    copy: "The home of PolSoc Cricket, welcoming players of all standards.",
    link: "https://www.instagram.com/thespindoctors.ex/",
    image: "/sport/cricket.jpg",
  },
  {
    n: "04",
    name: "Rugby",
    team: "The Ruckus Caucus",
    handle: "@theruckuscaucus",
    copy: "PolSoc’s newest sports team, bringing rugby into the society’s intramural line-up.",
    link: "https://www.instagram.com/theruckuscaucus/",
    image: "/sport/rugby.jpg",
  },
];

const committee = [
  ["Jack Williams", "President"],
  ["Harry Aiken", "Vice President"],
  ["Kata Laskay", "Treasurer"],
  ["Bea Twinn", "General Secretary"],
  ["Will Wood", "Welfare Secretary"],
  ["Naiya Shivashankar", "Social Secretary"],
  ["Eren Kandemir", "Social Secretary"],
  ["Henry Atkinson", "Academic Secretary"],
  ["Ernest Lee", "Academic Secretary"],
  ["Zachary Ikhelef", "Podcast Chair"],
  ["Megan Dickins", "Publicity Secretary"],
  ["Orion Hamer", "Events Secretary"],
  ["Hayden Smith", "IM President"],
  ["Izzy Lewis", "Netball Captain"],
  ["Harry Reynolds", "Cricket Captain"],
];

const galleryImages = [
  "/gallery/gallery-01.jpg",
  "/gallery/gallery-02.jpg",
  "/gallery/gallery-03.jpg",
  "/gallery/gallery-04.jpg",
  "/gallery/gallery-05.jpg",
  "/gallery/gallery-06.jpg",
];

function ImageSpace({
  src,
  label,
  ratio = "landscape",
}: {
  src: string;
  label: string;
  ratio?: "landscape" | "portrait" | "square";
}) {
  return (
    <div className={`imageSpace ${ratio}`}>
      <div className="imagePlaceholder">
        <span>IMAGE</span>
        <strong>{label}</strong>
        <small>{src}</small>
      </div>

      <img
        src={src}
        alt={label}
        className="realImage"
        onLoad={(e) => {
          const parent = e.currentTarget.parentElement;
          if (parent) parent.classList.add("hasImage");
        }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteNav">
        <a href="#top" className="brand">
          <Image
            src="/politics-society-logo.png"
            alt="Exeter Politics Society"
            width={44}
            height={44}
            priority
          />
          <div>
            <b>POLITICS SOCIETY</b>
            <span>University of Exeter</span>
          </div>
        </a>

        <nav className="desktopNav">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#academic">Academic</a>
          <a href="#sport">Sport</a>
          <a href="#welfare">Welfare</a>
          <a href="#committee">Committee</a>
          <a href="#partners">Partners</a>
        </nav>

        <a className="joinNav" href={FIXR_ORGANISER} target="_blank">
          Tickets on FIXR ↗
        </a>
      </header>

      <section id="top" className="hero">
        <div className="heroTop">
          <span>UNIVERSITY OF EXETER</span>
          <i></i>
          <span>POLITICS SOCIETY</span>
        </div>

        <div className="heroBody">
          <h1>
            Politics
            <br />
            <em>happens here.</em>
          </h1>

          <div className="heroRight">
            <p>
              One of Exeter&apos;s largest academic societies. Weekly socials,
              political discussion, guest speakers, four sports teams, welfare,
              trips and two annual balls.
            </p>

            <div className="actions">
              <a className="blackBtn" href={FIXR_ORGANISER} target="_blank">
                Browse FIXR <span>↗</span>
              </a>

              <a className="underLink" href="#events">
                See what&apos;s on ↓
              </a>
            </div>
          </div>
        </div>

        <div className="stats">
          <div>
            <strong>400+</strong>
            <span>Members</span>
          </div>
          <div>
            <strong>Every week</strong>
            <span>Events</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Sports teams</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Annual balls</span>
          </div>
        </div>
      </section>

      <section className="freshersBanner">
        <div>
          <span className="bannerTag">NEXT EVENT</span>
          <strong>Freshers Only — Ice Breaker Social</strong>
        </div>

        <div className="bannerMeta">
          <span>15 SEPTEMBER</span>
          <span>19:30–20:00 ENTRY</span>
          <span>THE COCKTAIL CLUB</span>
          <span>HALF-PRICE COCKTAILS</span>
        </div>

        <a href={FRESHERS_FIXR} target="_blank">
          Get tickets ↗
        </a>
      </section>

      <section id="about" className="paper section">
        <div className="kicker">01 — ABOUT POLSOC</div>

        <div className="split">
          <h2>
            More than
            <br />a degree.
          </h2>

          <div className="bodyCopy">
            <p className="lead">
              A society built around the people who make Politics at Exeter what
              it is.
            </p>
            <p>
              PolSoc brings together students from across the university through
              a packed calendar of socials, academic events, careers
              opportunities, trips, welfare support and intramural sport.
            </p>
            <p>
              You do not need to study Politics to join. If you are interested in
              politics, current affairs or simply want to be part of one of
              Exeter&apos;s biggest student communities, you are welcome.
            </p>
          </div>
        </div>

        <div className="fourCards">
          <article>
            <span>01</span>
            <h3>Social</h3>
            <p>
              Weekly events throughout term, from club nights and pub golf to
              mixers, quizzes and joint socials.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Academic</h3>
            <p>
              Speakers, debates and conversations that take politics beyond the
              seminar room.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Sport</h3>
            <p>
              Football, netball, cricket and rugby give members another way to
              represent PolSoc.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Welfare</h3>
            <p>
              A dedicated welfare team, weekly check-ins and support throughout
              the year.
            </p>
          </article>
        </div>
      </section>

      <section id="events" className="white section">
        <div className="headingRow">
          <div>
            <div className="kicker">02 — WHAT&apos;S ON</div>
            <h2>
              Upcoming
              <br />
              events.
            </h2>
          </div>

          <div className="headingLinks">
            <a className="underLink" href={FIXR_ORGANISER} target="_blank">
              All tickets on FIXR ↗
            </a>

            <a
              className="underLink"
              href="https://www.instagram.com/exepolsoc/"
              target="_blank"
            >
              Latest on Instagram ↗
            </a>
          </div>
        </div>

        <div className="eventList">
          {events.map((event) => (
            <a
              className="event"
              href={event.href}
              target="_blank"
              key={event.title}
            >
              <div className="date">
                <small>{event.month}</small>
                <strong>{event.day}</strong>
              </div>

              <div className="tag">{event.tag}</div>

              <div>
                <h3>{event.title}</h3>
                <p>{event.text}</p>
              </div>

              <div className="meta">
                {event.meta}
                <br />
                <b>{event.cta}</b>
              </div>

              <div className="arrow">↗</div>
            </a>
          ))}
        </div>

        <div className="eventFoot">
          <strong>Something every week.</strong>
          <p>
            FIXR is the main home for PolSoc tickets. Instagram carries the live
            announcements, themes, venue information and last-minute updates.
          </p>
        </div>
      </section>

      <section className="gallerySection">
        <div className="galleryLabel">
          <span>LIFE AT POLSOC</span>
          <span>HOVER TO PAUSE</span>
        </div>

        <div className="galleryViewport">
          <div className="galleryTrack">
            {[...galleryImages, ...galleryImages].map((src, i) => (
              <ImageSpace
                key={`${src}-${i}`}
                src={src}
                label={`PolSoc gallery ${String(
                  (i % galleryImages.length) + 1
                ).padStart(2, "0")}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="academic" className="dark section">
        <div className="kicker muted">03 — ACADEMIC &amp; PODCAST</div>

        <div className="split">
          <h2>
            Ideas worth
            <br />
            debating.
          </h2>

          <div className="bodyCopy lightCopy">
            <p className="lead">Politics does not end when the seminar does.</p>

            <p>
              Our academic programme gives members the chance to engage with
              speakers from politics, academia, journalism, diplomacy and public
              life.
            </p>

            <p>
              Alongside talks and debates, PolSoc&apos;s student-run podcast,
              <em> In Political Terms</em>, covers politics, career paths and
              university life.
            </p>
          </div>
        </div>

        <div className="academicImageGrid">
          <ImageSpace
            src="/academic/academic-event-01.jpg"
            label="Academic event"
          />
          <ImageSpace
            src="/academic/academic-event-02.jpg"
            label="Speaker / panel"
          />
        </div>

        <div className="academicFeature">
          <div className="podcastVisual">
            <ImageSpace
              src="/podcast/podcast-main.jpg"
              label="In Political Terms"
              ratio="square"
            />
          </div>

          <div className="podcastMark">
            <span>IN POLITICAL TERMS</span>
            <strong>PolSoc&apos;s student-run podcast.</strong>
          </div>

          <div className="podcastCopy">
            <p>
              Chaired by <b>Zachary Ikhelef</b>, the podcast brings together
              student voices and guests for conversations spanning politics,
              careers and life at university.
            </p>

            <a
              href="https://www.instagram.com/inpoliticalterms/"
              target="_blank"
              className="lightLink"
            >
              @inpoliticalterms ↗
            </a>
          </div>
        </div>

        <div className="darkGrid">
          <article>
            <span>01</span>
            <h3>Speakers</h3>
            <p>
              Conversations with people working at the heart of politics and
              public life.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Debates</h3>
            <p>
              Open discussion around the issues shaping British and
              international politics.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Careers</h3>
            <p>
              Events and networking for students thinking about life after
              Exeter.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Podcast</h3>
            <p>
              Student-led interviews and conversations through In Political
              Terms.
            </p>
          </article>
        </div>
      </section>

      <section className="experience">
        <article className="experiencePanel bluePanel">
          <div className="experienceCopy">
            <span>FORMALS</span>
            <h2>
              Winter &amp;
              <br />
              Summer Ball.
            </h2>
            <p>
              Two major dates in the PolSoc calendar and a chance to bring the
              whole society together.
            </p>
          </div>

          <div className="experienceImages">
            <ImageSpace
              src="/balls/ball-01.jpg"
              label="Ball photo 01"
              ratio="portrait"
            />
            <ImageSpace
              src="/balls/ball-02.jpg"
              label="Ball photo 02"
              ratio="portrait"
            />
          </div>
        </article>

        <article className="experiencePanel palePanel">
          <div className="experienceCopy">
            <span>TRIPS</span>
            <h2>
              Politics goes
              <br />
              abroad.
            </h2>
            <p>
              Previous PolSoc trips have taken members to Amsterdam and Berlin,
              with a new destination planned each year.
            </p>
          </div>

          <div className="experienceImages">
            <ImageSpace
              src="/trips/trip-01.jpg"
              label="Trip photo 01"
              ratio="portrait"
            />
            <ImageSpace
              src="/trips/trip-02.jpg"
              label="Trip photo 02"
              ratio="portrait"
            />
          </div>
        </article>
      </section>

      <section id="sport" className="paper section">
        <div className="headingRow">
          <div>
            <div className="kicker">04 — SPORT</div>
            <h2>
              Represent
              <br />
              PolSoc.
            </h2>
          </div>

          <p className="intro">
            Four teams, one society. A relaxed way to play, compete and meet more
            people across PolSoc.
          </p>
        </div>

        <div className="sportGrid">
          {sports.map((sport) => (
            <a
              href={sport.link}
              target="_blank"
              className="sportCard"
              key={sport.name}
            >
              <ImageSpace
                src={sport.image}
                label={`${sport.team} team photo`}
              />

              <div className="sportInfo">
                <span className="sportNumber">{sport.n}</span>
                <small>INTRAMURAL</small>
                <h3>{sport.name}</h3>
                <b>{sport.team}</b>
                <p>{sport.copy}</p>
                <em>{sport.handle} ↗</em>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="welfare" className="welfare section">
        <div className="kicker">05 — WELFARE</div>

        <div className="welfareGrid">
          <div>
            <h2>
              People
              <br />
              come first.
            </h2>
          </div>

          <div className="welfareCopy">
            <p className="lead">
              PolSoc has a dedicated welfare presence throughout the year.
            </p>

            <p>
              The welfare team runs regular check-ins, posts guidance and
              resources, gathers member feedback and creates events designed to
              make it easier for students to meet people and settle into
              university life.
            </p>

            <div className="welfareDetails">
              <div>
                <span>WELFARE SECRETARY</span>
                <strong>Will Wood</strong>
              </div>

              <div>
                <span>INSTAGRAM</span>
                <a
                  href="https://www.instagram.com/exepolsoc.welfare/"
                  target="_blank"
                >
                  @exepolsoc.welfare ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="committee" className="white section">
        <div className="headingRow">
          <div>
            <div className="kicker">06 — COMMITTEE</div>
            <h2>
              Meet the
              <br />
              team.
            </h2>
          </div>

          <p className="intro">
            The students behind PolSoc&apos;s socials, academic programme,
            welfare, media, sport and day-to-day running.
          </p>
        </div>

        <div className="committeeGrid">
          {committee.map(([name, role], i) => {
            const number = String(i + 1).padStart(2, "0");

            return (
              <article key={`${name}-${i}`}>
                <ImageSpace
                  src={`/committee/${number}.jpg`}
                  label={name}
                  ratio="portrait"
                />
                <h3>{name}</h3>
                <p>{role}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="partners" className="partner section">
        <div className="kicker muted">07 — PARTNERS &amp; SPONSORS</div>

        <div className="partnerIntro">
          <h2>
            Work with
            <br />
            PolSoc.
          </h2>

          <p>
            Connect with one of Exeter&apos;s largest student communities through
            partnerships, sponsored events and year-round collaboration.
          </p>
        </div>

        <div className="logoGrid">
          <div>PARTNER</div>
          <div>SPONSOR</div>
          <div>PARTNER</div>
          <div>SPONSOR</div>
        </div>

        <div className="partnerBottom">
          <span>Interested in working with us?</span>
          <a href="mailto:politics@groups.exeterguild.com">
            Partnership enquiries ↗
          </a>
        </div>
      </section>

      <section id="join" className="join">
        <div className="joinEyebrow">
          <span>EXETER POLITICS SOCIETY</span>
          <span>2026 / 27</span>
        </div>

        <div className="joinContent">
          <h2>
            Join the
            <br />
            <em>conversation.</em>
          </h2>

          <div>
            <p>
              Weekly socials. Academic events. Four sports teams. Welfare. A
              student podcast. Trips. Two balls. One of Exeter&apos;s biggest
              student communities.
            </p>

            <div className="joinButtons">
              <a className="blackBtn wide" href={FIXR_ORGANISER} target="_blank">
                Browse events on FIXR <span>↗</span>
              </a>

              <a
                className="outlineBtn wide"
                href="https://my.exeterguild.com/groups/C7B6R/politics-society"
                target="_blank"
              >
                Join through Exeter Guild <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footerBrand">
          <Image
            src="/politics-society-logo.png"
            alt=""
            width={54}
            height={54}
          />

          <div>
            <b>POLITICS SOCIETY</b>
            <span>University of Exeter</span>
          </div>
        </div>

        <div className="footerLinks">
          <a href={FIXR_ORGANISER} target="_blank">
            FIXR ↗
          </a>
          <a href="https://www.instagram.com/exepolsoc/" target="_blank">
            Main Instagram ↗
          </a>
          <a
            href="https://www.instagram.com/exepolsoc.welfare/"
            target="_blank"
          >
            Welfare ↗
          </a>
          <a
            href="https://www.instagram.com/inpoliticalterms/"
            target="_blank"
          >
            Podcast ↗
          </a>
          <a
            href="https://my.exeterguild.com/groups/C7B6R/politics-society"
            target="_blank"
          >
            Exeter Guild ↗
          </a>
        </div>

        <div className="footerBottom">
          <span>© 2026 Exeter Politics Society</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
