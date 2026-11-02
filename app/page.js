import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const learningStages = [
  {
    number: "01",
    title: "Pre-Primary",
    classes: "Nursery · LKG · UKG",
    description: "Building curiosity, creativity and confidence through play-based learning.",
    color: "bg-[#f8e9e2]",
  },
  {
    number: "02",
    title: "Primary School",
    classes: "Classes I – V",
    description: "Developing strong foundations in language, mathematics and discovery.",
    color: "bg-[#f2eadc]",
  },
  {
    number: "03",
    title: "Middle School",
    classes: "Classes VI – VIII",
    description: "Encouraging independent thinking, exploration and deeper understanding.",
    color: "bg-[#f4e6e5]",
  },
  {
    number: "04",
    title: "Secondary School",
    classes: "Classes IX – X",
    description: "Preparing students for academic achievement and future opportunities.",
    color: "bg-[#eee8df]",
  },
];

const facilities = [
  {
    title: "Science Laboratory",
    description: "Learning science through observation and practical exploration.",
    icon: "⚗",
  },
  {
    title: "Computer Education",
    description: "Developing digital awareness and essential technology skills.",
    icon: "⌨",
  },
  {
    title: "Library",
    description: "Creating a culture of reading, imagination and knowledge.",
    icon: "▤",
  },
  {
    title: "Sports & Activities",
    description: "Building teamwork, discipline and healthy habits.",
    icon: "⚽",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#f1e4d0]">
          <div className="max-w-7xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <span className="inline-flex bg-white text-[#a53e3b] px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-sm">
                ADMISSIONS OPEN · 2027–28
              </span>

              <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#493a35] leading-[1.12] tracking-tight">
                Every Child Has
                <span className="block text-[#c24d4a]">
                  The Potential to Shine.
                </span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-[#65554c] leading-8 max-w-xl">
                A place where curiosity is encouraged, confidence is nurtured
                and every child's journey towards learning matters.
              </p>

              <p className="mt-3 text-sm font-semibold text-[#493a35]">
                Quality School Education · Nursery to Class X
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  className="bg-[#c24d4a] text-white px-7 py-4 rounded-full text-sm font-bold shadow-lg shadow-[#c24d4a]/20 hover:bg-[#7a3032] transition"
                >
                  Explore Admissions →
                </Link>

                <Link
                  href="/about"
                  className="bg-white text-[#493a35] px-7 py-4 rounded-full text-sm font-bold border border-[#e5d6c4] hover:border-[#c24d4a] transition"
                >
                  Discover Our School
                </Link>
              </div>
            </div>

            <div
              className="relative min-h-[340px] md:min-h-[440px] rounded-[32px] overflow-hidden shadow-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent 50%, rgba(45,30,25,.45)), url('/images/school-hero.jpg')",
              }}
            >
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-[3px] font-semibold">
                  Learning · Growing · Achieving
                </p>
                <h2 className="text-2xl font-bold mt-2">
                  A brighter tomorrow begins here.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* SCHOOL HIGHLIGHTS */}
        <section className="max-w-7xl mx-auto px-5 -mt-1 py-10">
          <div className="bg-white rounded-2xl shadow-sm border border-[#eee6dc] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#eee6dc]">
            {[
              ["Nursery", "Early learning"],
              ["Class X", "Secondary education"],
              ["Holistic", "Overall development"],
              ["Every Child", "Matters"],
            ].map(([title, subtitle]) => (
              <div key={title} className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-extrabold text-[#c24d4a]">
                  {title}
                </h3>
                <p className="mt-2 text-xs text-[#76675e]">{subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="max-w-7xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#e8ddc9] rounded-3xl min-h-[320px] flex items-center justify-center p-8">
            <div className="text-center">
              <span className="text-6xl">✦</span>
              <p className="mt-4 font-bold text-[#493a35]">
                A community of learners
              </p>
              <p className="text-sm text-[#75665c] mt-2">
                Replace this panel with an actual school photograph.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#c24d4a] text-xs font-bold tracking-[3px] uppercase">
              Welcome to Little Star
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-[#493a35]">
              Education That Builds Knowledge, Character and Confidence.
            </h2>

            <p className="mt-6 text-[#75665c] leading-8">
              We believe education is about more than textbooks and
              examinations. It is about helping children discover their
              abilities, develop good values and become confident individuals.
            </p>

            <p className="mt-4 text-[#75665c] leading-8">
              From the first steps in Nursery to the important years of
              secondary education, we aim to make every learning experience
              meaningful.
            </p>

            <Link
              href="/about"
              className="inline-block mt-7 text-[#c24d4a] font-bold text-sm"
            >
              Discover our school →
            </Link>
          </div>
        </section>

        {/* LEARNING STAGES */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-[#c24d4a] text-xs font-bold tracking-[3px] uppercase">
                Our Academic Journey
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#493a35] mt-4">
                Learning at Every Stage
              </h2>
              <p className="text-[#75665c] mt-4 leading-7">
                Supporting children through every important stage of their
                school journey.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {learningStages.map((stage) => (
                <article
                  key={stage.number}
                  className={`${stage.color} rounded-2xl p-7 hover:-translate-y-1 transition duration-300`}
                >
                  <span className="text-sm font-bold text-[#c24d4a]">
                    {stage.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#493a35] mt-8">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-bold text-[#a34c47] mt-2">
                    {stage.classes}
                  </p>
                  <p className="text-sm text-[#75665c] leading-7 mt-5">
                    {stage.description}
                  </p>
                  <Link
                    href="/academics"
                    className="inline-block mt-6 text-sm font-bold text-[#493a35]"
                  >
                    Explore stage →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section className="max-w-7xl mx-auto px-5 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
            <div>
              <p className="text-[#c24d4a] text-xs font-bold tracking-[3px] uppercase">
                Our Learning Environment
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#493a35] mt-4">
                Explore Our Facilities
              </h2>
            </div>

            <Link
              href="/campus-life"
              className="text-sm font-bold text-[#c24d4a]"
            >
              Explore campus life →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((facility) => (
              <article
                key={facility.title}
                className="bg-white rounded-2xl p-7 border border-[#eee6dc] shadow-sm hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#f8e9e2] text-[#c24d4a] flex items-center justify-center text-3xl">
                  {facility.icon}
                </div>
                <h3 className="mt-6 font-bold text-lg text-[#493a35]">
                  {facility.title}
                </h3>
                <p className="mt-3 text-sm text-[#75665c] leading-7">
                  {facility.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CAMPUS LIFE */}
        <section className="bg-[#eee6dc] py-20">
          <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c24d4a] text-xs font-bold tracking-[3px] uppercase">
                Beyond the Classroom
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#493a35] mt-4">
                Experiences That Make School Life Memorable.
              </h2>
              <p className="mt-6 text-[#75665c] leading-8">
                Cultural celebrations, sports, competitions and creative
                activities give students opportunities to discover their
                interests and learn beyond the classroom.
              </p>
              <Link
                href="/campus-life"
                className="inline-block mt-7 bg-[#c24d4a] text-white rounded-full px-7 py-4 text-sm font-bold"
              >
                Explore School Life →
              </Link>
            </div>

            <div className="min-h-[300px] rounded-3xl bg-[#d9c8a9] flex items-center justify-center text-center p-8">
              <div>
                <span className="text-6xl">✦</span>
                <p className="font-bold text-[#493a35] mt-4">
                  School Events & Activities
                </p>
                <p className="text-sm text-[#75665c] mt-2">
                  Add photographs from actual school events here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST NEWS */}
        <section className="max-w-7xl mx-auto px-5 py-20">
          <div className="text-center mb-12">
            <p className="text-[#c24d4a] text-xs font-bold tracking-[3px] uppercase">
              Stay Connected
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#493a35] mt-4">
              Latest News & Announcements
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["Admissions", "Admission announcements and important updates."],
              ["School Events", "Discover celebrations and activities at school."],
              ["Notices", "Important information for parents and students."],
            ].map(([title, description]) => (
              <article
                key={title}
                className="bg-white border border-[#eee6dc] rounded-2xl p-7"
              >
                <span className="text-xs text-[#c24d4a] font-bold uppercase tracking-wider">
                  School Updates
                </span>
                <h3 className="text-xl font-bold text-[#493a35] mt-4">
                  {title}
                </h3>
                <p className="text-sm text-[#75665c] leading-7 mt-3">
                  {description}
                </p>
                <Link
                  href="/resources"
                  className="inline-block mt-5 text-sm font-bold text-[#c24d4a]"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ADMISSIONS CTA */}
        <section className="max-w-7xl mx-auto px-5 pb-20">
          <div className="bg-[#7a3032] text-white rounded-3xl p-9 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs tracking-[3px] uppercase text-white/70 font-bold">
                Your Child's Journey Begins Here
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Let's Build a Brighter Future Together.
              </h2>
              <p className="mt-4 text-white/75">
                Connect with our school to learn more about admissions.
              </p>
            </div>

            <Link
              href="/admissions"
              className="shrink-0 bg-white text-[#7a3032] rounded-full px-8 py-4 font-bold text-sm"
            >
              Enquire Now →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}