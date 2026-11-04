
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const academicStages = [
  {
    number: "01",
    name: "Pre-Primary School",
    classes: "Nursery · LKG · UKG",
    subtitle: "Discover, Explore & Grow",
    description:
      "The beginning of a child's educational journey. An environment that encourages curiosity, communication, creativity and confidence through engaging learning experiences.",
    points: [
      "Learning through play and activities",
      "Introduction to letters and numbers",
      "Creative expression and exploration",
      "Social interaction and communication",
      "Developing confidence and independence",
    ],
    image: "/images/academics/pre-primary.jpg",
    alt: "Young children participating in preschool learning activities",
  },
  {
    number: "02",
    name: "Primary School",
    classes: "Classes I – V",
    subtitle: "Build Strong Foundations",
    description:
      "The primary years focus on developing essential academic knowledge, communication abilities and positive learning habits that support future educational growth.",
    points: [
      "Reading and writing development",
      "Mathematical understanding",
      "Logical thinking and problem-solving",
      "Creative and practical activities",
      "Communication and collaboration",
    ],
    image: "/images/academics/primary.jpg",
    alt: "Primary school students learning in a classroom",
  },
  {
    number: "03",
    name: "Middle School",
    classes: "Classes VI – VIII",
    subtitle: "Explore, Understand & Apply",
    description:
      "Students develop deeper subject understanding, analytical thinking and greater independence while learning to connect academic concepts with practical experiences.",
    points: [
      "Deeper academic understanding",
      "Scientific reasoning and exploration",
      "Analytical thinking and problem-solving",
      "Project-based and collaborative activities",
      "Personal responsibility and leadership",
    ],
    image: "/images/academics/middle-school.jpg",
    alt: "Middle school students participating in collaborative learning",
  },
  {
    number: "04",
    name: "Secondary School",
    classes: "Classes IX – X",
    subtitle: "Prepare for the Future",
    description:
      "The secondary stage focuses on strengthening academic understanding, developing examination readiness and preparing students for their next educational journey.",
    points: [
      "Focused academic learning",
      "Conceptual understanding",
      "Written examination preparation",
      "Regular assessment and revision",
      "Time management and self-discipline",
    ],
    image: "/images/academics/secondary.jpg",
    alt: "Secondary school students studying in a classroom",
  },
];

const learningApproaches = [
  {
    number: "01",
    title: "Creative Learning",
    description:
      "Encouraging imagination, original thinking and creative expression through meaningful learning activities.",
    image: "/images/academics/creative-learning.jpg",
  },
  {
    number: "02",
    title: "Practical Activities",
    description:
      "Helping students connect classroom concepts with hands-on activities and practical experiences.",
    image: "/images/academics/practical-activities.jpg",
  },
  {
    number: "03",
    title: "Interactive Education",
    description:
      "Promoting active participation, communication and interaction throughout the learning process.",
    image: "/images/academics/interactive-education.jpg",
  },
  {
    number: "04",
    title: "Learning Through Experiences",
    description:
      "Making learning meaningful through activities, exploration and experiences beyond textbooks.",
    image: "/images/academics/experiential-learning.jpg",
  },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C24D4A]">
      <span className="h-[2px] w-7 bg-[#C24D4A]" />
      {children}
    </span>
  );
}

export default function AcademicsPage() {
  return (
    <>
    <Header />
    <main className="overflow-hidden bg-[#F8F5EF] text-[#493A35]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#7A3032] text-white">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[50px] border-white/5" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[50px] border-white/5" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">

          <div>
            <div className="mb-6 flex items-center gap-2 text-sm text-[#E8DDC9]">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Academics</span>
            </div>

            <SectionLabel>Our academic journey</SectionLabel>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Learning Today.
              <span className="mt-2 block text-[#E8DDC9]">
                Leading Tomorrow.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/80">
              From the first steps of early childhood education
              to the important milestones of secondary schooling,
              we believe every stage of learning contributes to
              a child's growth and development.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#academic-stages"
                className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#7A3032] transition hover:bg-[#E8DDC9]"
              >
                Explore Academic Stages
              </Link>

              <Link
                href="/admissions"
                className="rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Admissions
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-white/30" />

            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-[#E8DDC9]">
              <Image
                src="/images/academics/academic-hero.jpg"
                alt="Students learning at Little Star Public School"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-5 rounded-2xl bg-white px-6 py-5 text-[#493A35] shadow-xl sm:left-8">
              <p className="text-2xl font-extrabold text-[#C24D4A]">
                Nursery – X
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider">
                A journey of learning and growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <SectionLabel>Academic overview</SectionLabel>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Building Knowledge. Developing Potential.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[#75665C]">
              At Little Star Public School, our academic journey
              extends from Nursery to Class X. We aim to create
              meaningful learning opportunities that support
              children's intellectual, social and personal development.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-[#75665C]">
              Following the CBSE curriculum, our educational
              approach combines classroom instruction, practical
              activities, interactive learning and assessment to
              support students throughout their academic journey.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-2xl font-extrabold text-[#C24D4A]">
                  CBSE
                </p>
                <p className="mt-2 text-xs font-semibold text-[#75665C]">
                  Curriculum
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-2xl font-extrabold text-[#C24D4A]">
                  Nursery – X
                </p>
                <p className="mt-2 text-xs font-semibold text-[#75665C]">
                  Classes Offered
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/academics/academic-overview.jpg"
              alt="Students engaged in academic learning"
              width={900}
              height={700}
              className="aspect-[5/4] w-full rounded-[2rem] object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* FOUR ACADEMIC STAGES */}
      <section
        id="academic-stages"
        className="bg-white py-24 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-5">

          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Our academic structure</SectionLabel>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Four Stages. One Learning Journey.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#75665C]">
              Every stage of education brings new opportunities
              to discover, develop and prepare for the future.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {academicStages.map((stage, index) => (
              <article
                key={stage.number}
                className={`grid items-center gap-8 overflow-hidden rounded-[2rem] border border-[#E8DDC9] bg-[#F8F5EF] lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[260px] h-full">
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-7 sm:p-10 lg:p-12">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-[#C24D4A]">
                      STAGE {stage.number}
                    </span>

                    <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#7A3032]">
                      {stage.classes}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold sm:text-3xl">
                    {stage.name}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-[#C24D4A]">
                    {stage.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#75665C]">
                    {stage.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {stage.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-[#493A35]"
                      >
                        <span className="mt-1 text-[#C24D4A]">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHING AND LEARNING */}
      <section className="mx-auto max-w-7xl px-5 py-24">

        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>How we learn</SectionLabel>

          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Teaching Beyond Textbooks
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#75665C]">
            Learning becomes meaningful when students are
            encouraged to participate, explore, create and
            experience new ideas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {learningApproaches.map((item) => (
            <article
              key={item.number}
              className="group overflow-hidden rounded-3xl border border-[#E8DDC9] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DDC9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-bold tracking-widest text-[#C24D4A]">
                  {item.number}
                </span>

                <h3 className="mt-3 text-lg font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#75665C]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ASSESSMENT */}
      <section className="bg-[#493A35] py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">

          <div>
            <SectionLabel>Measuring progress</SectionLabel>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Understanding Progress.
              <span className="block text-[#E8DDC9]">
                Encouraging Improvement.
              </span>
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-white/70">
              Assessment plays an important role in understanding
              students' academic progress. Our assessment approach
              combines written examinations with continuous
              assessment to evaluate learning and identify areas
              for improvement.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-white/70">
              These assessment methods provide opportunities
              to review academic understanding and encourage
              students to continue developing their abilities.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C24D4A] text-2xl">
                ✎
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Written Examinations
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Evaluating students' subject understanding,
                knowledge and ability to express what they
                have learned.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C24D4A] text-2xl">
                ✓
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Continuous Assessment
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Reviewing learning progress through ongoing
                assessment and academic activities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LEARNING BEYOND CLASSROOMS */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">

          <div>
            <SectionLabel>Beyond the classroom</SectionLabel>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Learning Through Experiences.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[#75665C]">
              Education extends beyond classroom instruction.
              Practical activities, creative experiences and
              interactive participation offer students additional
              opportunities to explore and apply their learning.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-[#75665C]">
              These experiences complement academic learning
              and encourage communication, collaboration,
              curiosity and confidence.
            </p>

            <Link
              href="/campus-life"
              className="mt-8 inline-flex rounded-full bg-[#C24D4A] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#7A3032]"
            >
              Explore Campus Life
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="/images/academics/learning-beyond-classroom.jpg"
              alt="Students participating in school activities"
              width={1000}
              height={750}
              className="aspect-[5/4] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#E8DDC9] px-5 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <SectionLabel>Your child's journey starts here</SectionLabel>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
            Every Stage Builds a Stronger Foundation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#75665C]">
            Discover an educational environment that encourages
            curiosity, nurtures values and supports children's
            academic and personal development.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="rounded-full bg-[#C24D4A] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#7A3032]"
            >
              Explore Admissions
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#493A35]/30 px-8 py-4 text-sm font-bold text-[#493A35] transition hover:bg-white"
            >
              Contact Our School
            </Link>
          </div>
        </div>
      </section>

    </main>
    <Footer />
    </>
  );
}
