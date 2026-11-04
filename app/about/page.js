
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const coreValues = [
  {
    number: "01",
    title: "Commitment",
    description:
      "A dedication to providing meaningful educational opportunities and supporting every child's development.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Opportunity",
    description:
      "Creating opportunities for students to discover their abilities, explore their interests and grow.",
    icon: "◇",
  },
  {
    number: "03",
    title: "Respect",
    description:
      "Encouraging mutual understanding, empathy, cooperation and respect for individual differences.",
    icon: "♡",
  },
  {
    number: "04",
    title: "Excellence",
    description:
      "Striving for quality in education, character development and lifelong learning.",
    icon: "✧",
  },
];

const missionPoints = [
  "Developing inquiring, knowledgeable and caring young people who help create a better and more peaceful world through intercultural understanding and respect.",
  "Encouraging students to become active, compassionate and lifelong learners who understand that other people, with their differences, can also be right.",
  "Developing effective oral and written communication skills.",
  "Promoting a healthy mind in a healthy body.",
];

const learningSkills = [
  "Leadership",
  "Decision-making",
  "Collaboration",
  "Effective communication",
  "Trust-building",
  "Conflict management",
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C24D4A]">
      <span className="h-[2px] w-7 bg-[#C24D4A]" />
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
    <Header />
    <main className="overflow-hidden bg-[#F8F5EF] text-[#493A35]">

      {/* HERO SECTION */}
      <section className="relative bg-[#7A3032] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[50px] border-white" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[50px] border-white" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">

          <div>
            <div className="mb-6 flex items-center gap-2 text-sm text-[#E8DDC9]">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </div>

            <SectionLabel>Get to know us</SectionLabel>

            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Nurturing Young Minds.
              <span className="mt-2 block text-[#E8DDC9]">
                Inspiring Brighter Futures.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/80">
              Since 2013, Little Star Public School has been committed
              to nurturing children's intellectual, moral and personal
              development through meaningful education.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#7A3032] transition hover:bg-[#E8DDC9]"
              >
                Explore Admissions
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-white/30" />

            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-[#E8DDC9]">
              <Image
                src="/images/school-img.jpg"
                alt="Little Star Public School"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-7 left-5 rounded-2xl bg-white px-6 py-5 text-[#493A35] shadow-xl sm:left-8">
              <p className="text-3xl font-extrabold text-[#C24D4A]">
                2013
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider">
                The beginning of our journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <SectionLabel>Our story</SectionLabel>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              An institution built on the belief that every child can bloom.
            </h2>

            <div className="mt-8 h-1 w-20 rounded-full bg-[#C24D4A]" />

            <p className="mt-6 text-sm font-semibold leading-7 text-[#7A3032]">
              Education is not just about what a child learns. It is
              also about who that child becomes.
            </p>
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-[#75665C]">
            <p>
              Little Star Public School began its journey in 2013 with
              a commitment to the harmonious development of children.
              Since then, the school has worked towards providing
              qualitative education through a transparent and
              systematic approach to teaching and learning.
            </p>

            <p>
              We place importance on moral and ethical values,
              encouraging children to develop courage, confidence
              and independence to face the challenges of the modern
              world. Our teachers are committed to understanding
              each child's potential and helping that potential grow.
            </p>

            <p>
              Like gardeners caring for young plants, our teachers
              guide, encourage and support students as they develop
              their individual abilities and personalities.
            </p>

            <p>
              The school believes in making quality education
              accessible at an affordable cost, helping children from
              different backgrounds access opportunities for learning
              and personal growth.
            </p>
          </div>
        </div>
      </section>

      
      {/* LEADERSHIP MESSAGES */}
      <section className="bg-[#F8F5EF] py-24">
        <div className="mx-auto max-w-7xl px-5">

          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Words from our leadership</SectionLabel>

            <h2 className="mt-5 text-3xl font-extrabold text-[#493A35] sm:text-4xl">
              Leadership Messages
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#75665C]">
              The vision, values and commitment that guide our
              school community towards meaningful education
              and a brighter future.
            </p>
          </div>

          {/* Director's Message */}
          <div className="mt-14 overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.38fr_1fr]">

              {/* Director Sidebar */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-[#7A3032] p-8 text-white sm:p-10">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[35px] border-white/5" />

                <div className="relative">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8DDC9]">
                    A message from
                  </span>

                  <h3 className="mt-5 text-3xl font-extrabold">
                    The Director
                  </h3>

                  <div className="mt-6 h-1 w-16 rounded-full bg-[#E8DDC9]" />
                </div>

                <div className="relative mt-14">
                  <p className="text-2xl font-bold">
                    Mr. Gurfan Khan
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Director
                  </p>
                  <p className="mt-1 text-xs text-[#E8DDC9]">
                    Little Star Public School, Jharsuguda
                  </p>
                </div>
              </div>

              {/* Director Content */}
              <div className="p-7 sm:p-10 lg:p-12">

                <span className="text-5xl font-serif leading-none text-[#C24D4A]">
                  “
                </span>

                <h4 className="mt-3 text-xl font-extrabold text-[#493A35] sm:text-2xl">
                  Quality Education with Values
                </h4>

                <p className="mt-5 text-[15px] leading-8 text-[#75665C]">
                  Quality education with values is a driving force
                  that encourages our students to develop their
                  thoughts and creativity and compete with their
                  counterparts across different parts of the world.
                  Preparing children for life calls for equipping
                  them with finer values and academic competencies.
                </p>

                {/* Teacher and Parents */}
                <div className="mt-9 rounded-2xl border-l-4 border-[#C24D4A] bg-[#F8F5EF] p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#C24D4A]">
                    A thought for Teachers & Parents
                  </span>

                  <p className="mt-3 text-lg font-semibold italic leading-8 text-[#493A35]">
                    “Teach a child how she or he should live,
                    and they will remember it all their life.”
                  </p>
                </div>

                {/* Students */}
                <div className="mt-8">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#C24D4A]">
                    A message for Students
                  </span>

                  <p className="mt-4 text-[15px] leading-8 text-[#75665C]">
                    Getting wisdom is the most important thing you
                    can do. Whatever you get, get insight. Love
                    wisdom, and she will make you great. Embrace
                    her, and she will be your crowning glory.
                  </p>

                  <p className="mt-4 text-[15px] font-semibold leading-8 text-[#493A35]">
                    Always remember what you have learnt.
                    Your education is your life — guard it well.
                  </p>
                </div>

                <div className="mt-9 border-t border-[#E8DDC9] pt-6">
                  <p className="text-sm font-extrabold text-[#493A35]">
                    Mr. Gurfan Khan
                  </p>
                  <p className="mt-1 text-xs text-[#75665C]">
                    Director, Little Star Public School
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Principal's Message */}
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#E8DDC9] bg-white shadow-sm">

            <div className="p-7 sm:p-10 lg:p-12">

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <SectionLabel>From the school leadership</SectionLabel>

                  <h3 className="mt-4 text-3xl font-extrabold text-[#493A35]">
                    Principal's Message
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F5EF] text-3xl text-[#C24D4A]">
                  ✦
                </div>
              </div>

              <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.28fr]">

                {/* Principal Message Content */}
                <div className="space-y-6 text-[15px] leading-8 text-[#75665C]">

                  <p>
                    On behalf of all the stakeholders at Little Star
                    Public School, Jharsuguda, it is my pleasure to
                    welcome you to our school website.
                  </p>

                  <p>
                    As the Principal, I am honoured to be part of a
                    faculty and staff committed to working together
                    to provide the best education possible for our
                    students. This is accomplished through our focus
                    on creating an academically rigorous learning
                    environment that promotes career goals through
                    a standards-driven curriculum, student-centred
                    interaction and strong extracurricular programmes.
                  </p>

                  <p>
                    It is our desire to partner with families, the
                    community and the corporate world to better
                    support and inspire our students towards excellence.
                  </p>

                  <p>
                    A fully developed personality requires a balance
                    of physical, emotional, social and spiritual growth.
                    The new generation of children exhibits skills
                    and talents of remarkable potential. The future
                    belongs to those who are inquirers, knowledgeable,
                    thinkers, principled, communicators, open-minded,
                    risk-takers and reflective learners.
                  </p>

                  <p>
                    Guided by these virtues, we design our programmes
                    around each child's potential. Our aim is to
                    identify the inherent abilities of every child
                    and nurture them through meaningful learning
                    experiences.
                  </p>

                  <p>
                    A child-centred institution, Little Star Public
                    School offers a spectrum of activities that provide
                    multiple experiences and opportunities for student
                    enrichment. Sound pedagogical practices, ICT
                    support and spacious, airy, naturally lit classrooms
                    in serene surroundings create a conducive
                    environment for learning.
                  </p>

                  <p>
                    Please take the time to explore our website and
                    become acquainted with the many opportunities
                    available to our students. We look forward to
                    serving our students and their families.
                  </p>

                </div>

                {/* Principal Signature Panel */}
                <div className="flex flex-col justify-end rounded-2xl bg-[#F8F5EF] p-6 lg:mt-0">
                  <div className="mb-6 text-5xl font-serif text-[#C24D4A]">
                    ”
                  </div>

                  <p className="text-lg font-extrabold text-[#493A35]">
                    With warm regards,
                  </p>

                  <div className="my-5 h-px w-full bg-[#E8DDC9]" />

                  <p className="text-sm font-bold text-[#493A35]">
                    Principal
                  </p>

                  <p className="mt-2 text-xs leading-6 text-[#75665C]">
                    Little Star Public School
                    <br />
                    Jharsuguda, Odisha
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* EDUCATIONAL PHILOSOPHY */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">

          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-[#E8DDC9]/60" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#E8DDC9]">
              <Image
                src="/images/school-community.jpg"
                alt="Students learning and participating in school activities"
                width={1000}
                height={750}
                className="aspect-[4/3] w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-6 right-5 rounded-2xl bg-[#C24D4A] px-6 py-5 text-white shadow-xl sm:right-10">
              <p className="text-2xl font-extrabold">Learn</p>
              <p className="text-xs tracking-widest">GROW · DISCOVER · EXCEL</p>
            </div>
          </div>

          <div>
            <SectionLabel>Our educational philosophy</SectionLabel>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Learning for a changing world, grounded in timeless values.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[#75665C]">
              We believe that education should embrace the changing
              dynamics of society while preserving the values of our
              country. Our approach encourages curiosity, practical
              learning and the development of important social skills.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-[#75665C]">
              Through hands-on experiences and supportive guidance,
              students are encouraged to become confident individuals
              who can communicate, cooperate and take responsibility.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {learningSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-[#E8DDC9] bg-[#F8F5EF] px-3 py-4 text-center text-xs font-bold text-[#7A3032]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>What guides us</SectionLabel>

          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Our Core Values
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#75665C]">
            Our core values are the shared beliefs that guide our
            school community and shape the way we teach, learn
            and grow together.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <div
              key={value.number}
              className="group rounded-3xl border border-[#E8DDC9] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#C24D4A] hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#B5A18B]">
                  {value.number}
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F5EF] text-2xl text-[#C24D4A] transition group-hover:bg-[#C24D4A] group-hover:text-white">
                  {value.icon}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-extrabold text-[#493A35]">
                {value.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#75665C]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="relative overflow-hidden bg-[#493A35] py-24 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.75fr_1.25fr]">

          <div>
            <SectionLabel>Looking ahead</SectionLabel>

            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Our Vision
            </h2>

            <p className="mt-6 text-base leading-8 text-white/70">
              To contribute to the development of enlightened,
              responsible and capable individuals who can make
              meaningful contributions to society.
            </p>

            <div className="mt-9 text-7xl font-extrabold text-white/10">
              VISION
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-[#E8DDC9]">
                Intellectual Development
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Encouraging students to become intellectually
                enlightened and capable of understanding the
                opportunities and challenges of a changing world.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-[#E8DDC9]">
                Moral and Personal Strength
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Nurturing moral values, spiritual awareness and
                mental strength to face the multifaceted challenges
                of life.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-[#E8DDC9]">
                Social Contribution
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Preparing students to use their knowledge and
                abilities for the progress and development of
                society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">

          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Our purpose</SectionLabel>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Our Mission
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#75665C]">
              Little Star Public School is committed to excellence
              in education. We aim to provide holistic and integrated
              learning opportunities that help students embrace
              the changing dynamics of society while preserving
              the values of our country.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-5 rounded-2xl border border-[#E8DDC9] bg-[#F8F5EF] p-6 sm:p-8"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C24D4A] text-sm font-bold text-white">
                  0{index + 1}
                </div>

                <p className="text-sm leading-7 text-[#75665C]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#E8DDC9] px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C24D4A]">
            The journey begins here
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#493A35] sm:text-4xl">
            Every child has the potential to shine.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#75665C]">
            Discover an environment where curiosity is encouraged,
            values are nurtured and every learning experience
            contributes to a child's growth.
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
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </main>
    <Footer />
    </>
  );
}
