"use client";

import Image from "next/image";

const FIXR_ORGANISER = "https://fixr.co/organiser/962072334";
const FRESHERS_FIXR =
  "https://fixr.co/event/ice-breaker-social-exeter-politics-society-tickets-238222151";

const DEVELOPER_LINKEDIN = "https://www.linkedin.com/in/eren-kandemir-0b6491290/";

const events = [
  {
    day: "14",
    month: "SEP",
    tag: "FRESHERS",
    title: "Freshers Fair Stall",
    text: "Come and meet the committee, find out what PolSoc has planned for the year and ask us anything about getting involved.",
    meta: "10:00–17:00 · Great Hall",
    cta: "No ticket needed",
    href: null,
  },
  {
    day: "15",
    month: "SEP",
    tag: "SOCIAL",
    title: "Ice Breaker Social",
    text: "Our Freshers-only launch night at The Cocktail Club on Gandy Street. No dress code — just come along, meet people and start the year with PolSoc.",
    meta: "19:30–late · The Cocktail Club",
    cta: "Tickets out now",
    href: FRESHERS_FIXR,
  },
  {
    day: "17",
    month: "SEP",
    tag: "SPORT",
    title: "Netball Taster",
    text: "Join First Past the Post for a casual, low-pressure netball session and meet the team.",
    meta: "17:00–18:00 · Covered Courts",
    cta: "No ticket needed",
    href: null,
  },
  {
    day: "19",
    month: "SEP",
    tag: "SPORT",
    title: "IM Cricket Taster",
    text: "Join The Spin Doctors for a relaxed cricket taster ahead of the intramural season.",
    meta: "Time & location TBC",
    cta: "No ticket needed",
    href: null,
  },
  {
    day: "20",
    month: "SEP",
    tag: "SPORT",
    title: "Bandis Football Taster",
    text: "Meet Bercow’s Bandicoots for a football taster as part of PolSoc’s intramural football programme.",
    meta: "11:00–12:00 · The Rubber Crumb",
    cta: "No ticket needed",
    href: null,
  },
  {
    day: "24",
    month: "SEP",
    tag: "SOCIAL",
    title: "Back to School Social",
    text: "Our first full-society social of the year at The Cocktail Club, with half-price drinks all night.",
    meta: "19:30–late · The Cocktail Club",
    cta: "Tickets dropping this week",
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
          <div className="heroCopyBlock">
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

          <div className="heroPhotoWrap">
            <img
              src="/hero/hero-ball.jpg"
              alt="Exeter Politics Society formal event"
              className="heroPhoto"
            />
            <div className="heroPhotoCaption">
              <span>POLITICS SOCIETY</span>
              <span>2026 / 27</span>
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
          <strong>Freshers Fair Stall</strong>
        </div>

        <div className="bannerMeta">
          <span>MONDAY 14 SEPTEMBER</span>
          <span>10:00–16:00</span>
          <span>GREAT HALL</span>
          <span>COME AND MEET THE COMMITTEE</span>
        </div>

        <a href="#events">
          Freshers week ↓
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
              The social and academic home of politics at Exeter.
            </p>
            <p>
              PolSoc brings together students from across the university through socials, speakers, careers events, trips, welfare, sport and everything in between.


            </p>
            <p>
              You don’t have to study Politics to join. If you’re into politics, current affairs, meeting new people or just want to be part of one of Exeter’s biggest student communities, there’s a place for you here.
            </p>
          </div>
        </div>

        <div className="aboutStrip">
          <a href="#events" className="aboutItem">
            <span>01</span>
            <div>
              <h3>Social</h3>
              <p>Weekly events, nights out and joint socials.</p>
            </div>
            <b>↓</b>
          </a>

          <a href="#academic" className="aboutItem">
            <span>02</span>
            <div>
              <h3>Academic</h3>
              <p>Speakers, debates, careers and the podcast.</p>
            </div>
            <b>↓</b>
          </a>

          <a href="#sport" className="aboutItem">
            <span>03</span>
            <div>
              <h3>Sport</h3>
              <p>Football, netball, cricket and rugby.</p>
            </div>
            <b>↓</b>
          </a>

          <a href="#welfare" className="aboutItem">
            <span>04</span>
            <div>
              <h3>Welfare</h3>
              <p>Support, check-ins and member wellbeing.</p>
            </div>
            <b>↓</b>
          </a>
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
          {events.map((event) => {
            const content = (
              <>
                <div className="date">
                  <small>{event.month}</small>
                  <strong>{event.day}</strong>
                </div>

                <div className="tag">{event.tag}</div>

                <div className="eventMain">
                  <h3>{event.title}</h3>
                  <p>{event.text}</p>
                </div>

                <div className="meta">
                  <span>{event.meta}</span>
                  <b>{event.cta}</b>
                </div>

                <div className={`arrow ${event.href ? "" : "mutedArrow"}`}>
                  {event.href ? "↗" : "—"}
                </div>
              </>
            );

            return event.href ? (
              <a
                className="event"
                href={event.href}
                target="_blank"
                key={event.title}
              >
                {content}
              </a>
            ) : (
              <article className="event eventStatic" key={event.title}>
                {content}
              </article>
            );
          })}
        </div>

        <div className="eventFoot">
          <strong>Something every week.</strong>
          <p>
            Ticketed socials are released through FIXR. Tasters and the Freshers
            Fair do not need tickets; Instagram carries live updates and any changes.
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

        <div className="partnerIntro partnerIntroClean">
          <h2>
            Work with
            <br />
            PolSoc.
          </h2>

          <div className="partnerPitch">
            <p>
              Connect with one of Exeter&apos;s largest student communities through
              partnerships, sponsored events and year-round collaboration.
            </p>

            <a
              className="partnerCta"
              href="mailto:politics@groups.exeterguild.com"
            >
              Partnership enquiries <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="join" className="join">
        <div className="joinEyebrow">
          <span>EXETER POLITICS SOCIETY</span>
          <span>2026 / 27</span>
        </div>

        <div className="joinContent">
          <h2>
            Make this your year
            <br />
            <em>With Polsoc.</em>
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

        <div className="developerCredit">
          <span>Website developed by</span>
          <a href={DEVELOPER_LINKEDIN} target="_blank" rel="noopener noreferrer">
            Eren Kandemir ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
