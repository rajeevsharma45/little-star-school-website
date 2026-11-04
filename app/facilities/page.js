
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const facilities = [
  {
    number: "01",
    title: "Science Laboratory",
    subtitle: "Discover. Explore. Experiment.",
    description:
      "Science learning becomes more meaningful when students can connect concepts with practical experiences. A laboratory environment supports observation, experimentation and curiosity.",
    image: "/images/facilities/science-lab.jpg",
    features: [
      "Practical learning opportunities",
      "Observation and experimentation",
      "Understanding scientific concepts",
      "Developing curiosity and logical thinking",
    ],
  },
  {
    number: "02",
    title: "Computer Laboratory",
    subtitle: "Technology for Tomorrow.",
    description:
      "Technology plays an important role in modern education. Computer-based learning helps students develop digital awareness and become familiar with technology as a learning tool.",
    image: "/images/facilities/computer-lab.jpg",
    features: [
      "Introduction to computer fundamentals",
      "Digital learning activities",
      "Developing basic technology skills",
      "Building confidence with computers",
    ],
  },
  {
    number: "03",
    title: "School Library",
    subtitle: "A World of Knowledge.",
    description:
      "A library encourages students to explore ideas beyond their textbooks. Reading helps develop language, imagination, knowledge and independent learning habits.",
    image: "/images/facilities/library.jpg",
    features: [
      "Reading and learning resources",
      "Developing reading habits",
      "Encouraging independent learning",
      "Exploring knowledge beyond textbooks",
    ],
  },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#C24D4A]">
        {label}
      </p>

      <h2 className="text-3xl font-bold leading-tight text-[#493A35] md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-[#75665C]">
          {description}
        </p>
      )}
    </div>
  );
}

export default function FacilitiesPage() {
  return (
    <>
    <Header />
    <main className="overflow-hidden bg-[#F8F5EF]">
      {/* HERO SECTION */}
      <section className="relative bg-[#493A35] px-5 py-24 text-center text-white md:py-32">
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#E8DDC9]">
            Little Star Public School
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Spaces That Inspire
            <span className="block text-[#E8DDC9]">
              Learning
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Learning extends beyond the classroom. Explore the
            spaces that encourage students to discover, create,
            experiment and develop new skills.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <Link
              href="/"
              className="text-white/70 transition hover:text-white"
            >
              Home
            </Link>

            <span className="text-white/40">/</span>

            <Link
              href="/our-team"
              className="text-white/70 transition hover:text-white"
            >
              Campus Life
            </Link>

            <span className="text-white/40">/</span>

            <span className="font-semibold text-[#E8DDC9]">
              Facilities
            </span>
          </div>
        </div>

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#C24D4A]">
              Learning Environment
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#493A35] md:text-4xl">
              More Than Just
              <span className="text-[#C24D4A]"> Classrooms</span>
            </h2>

            <p className="mt-6 leading-8 text-[#75665C]">
              At Little Star Public School, we recognise that
              meaningful education involves different learning
              experiences. Beyond regular classroom lessons,
              students benefit from opportunities to explore
              knowledge through practical activities, technology
              and reading.
            </p>

            <p className="mt-4 leading-8 text-[#75665C]">
              Our learning spaces are intended to complement
              classroom education and encourage students to
              develop curiosity, confidence and independent
              thinking.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#E8DDC9]">
              <Image
                src="/images/facilities/facilities-overview.jpg"
                alt="Learning facilities at Little Star Public School"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-2xl bg-[#C24D4A]/15" />
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Explore Our Facilities"
            title="Learning Through Experience"
            description="Different spaces that support practical learning, digital awareness and a habit of reading."
          />

          <div className="space-y-16 md:space-y-24">
            {facilities.map((facility, index) => (
              <article
                key={facility.number}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  index % 2 !== 0 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#E8DDC9]">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[#C24D4A] text-xl font-bold text-white shadow-lg">
                    {facility.number}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#C24D4A]">
                    {facility.subtitle}
                  </p>

                  <h3 className="text-3xl font-bold text-[#493A35] md:text-4xl">
                    {facility.title}
                  </h3>

                  <p className="mt-5 leading-8 text-[#75665C]">
                    {facility.description}
                  </p>

                  <div className="mt-7 space-y-4">
                    {facility.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C24D4A]/10 text-xs font-bold text-[#C24D4A]">
                          ✓
                        </span>

                        <span className="text-sm leading-6 text-[#493A35]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-[#493A35] px-5 py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E8DDC9]">
            Learning Beyond Boundaries
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Every Space Has
            <span className="block text-[#E8DDC9]">
              Something to Teach
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            We believe that every learning experience can open
            new possibilities. By encouraging students to explore
            and discover, we aim to make learning more meaningful.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-[#C24D4A] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#A93F3C]"
          >
            Contact Our School
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
