
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const leadership = [
  {
    name: "Mr. Gurfan Khan",
    role: "Director",
    image: "/images/team/director.jpg",
    description:
      "Providing leadership and direction with a commitment to quality education, values and the overall development of students.",
  },
  {
    name: "Principal",
    role: "Principal",
    image: "/images/team/principal.jpg",
    description:
      "Guiding academic activities and supporting teachers and students in creating a positive learning environment.",
  },
];

const teamCategories = [
  {
    title: "Teaching Staff",
    description:
      "Our teachers guide students through every stage of their learning journey, encouraging curiosity, confidence and academic growth.",
    image: "/images/team/teaching-staff.jpg",
  },
  {
    title: "Administrative Staff",
    description:
      "Our administrative team supports the daily functioning of the school and helps ensure a smooth experience for students and parents.",
    image: "/images/team/administrative-staff.jpg",
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
        <p className="mt-4 leading-7 text-[#75665C]">{description}</p>
      )}
    </div>
  );
}

export default function OurTeamPage() {
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
            The People Behind
            <span className="block text-[#E8DDC9]">
              Our School
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Every child's journey is shaped by the people who teach,
            guide and support them. Meet the team working together
            to create a meaningful learning experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <Link
              href="/"
              className="text-white/70 transition hover:text-white"
            >
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="font-semibold text-[#E8DDC9]">
              Our Team
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
              Our Strength
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#493A35] md:text-4xl">
              A Team Committed to
              <span className="text-[#C24D4A]"> Every Child</span>
            </h2>

            <p className="mt-6 leading-8 text-[#75665C]">
              At Little Star Public School, we believe that a
              supportive school environment begins with dedicated
              people. Our team works together to encourage learning,
              nurture individual abilities and support the overall
              development of every student.
            </p>

            <p className="mt-4 leading-8 text-[#75665C]">
              From school leadership to classroom teachers and
              administrative staff, every role contributes to
              making the school a welcoming place to learn and grow.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#E8DDC9]">
              <Image
                src="/images/team/school-team.jpg"
                alt="Little Star Public School team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-2xl bg-[#C24D4A]/15" />
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="School Leadership"
            title="Guiding Our Vision"
            description="Leadership that supports the school's educational direction and the development of its students."
          />

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {leadership.map((person) => (
              <article
                key={person.role}
                className="overflow-hidden rounded-2xl border border-[#E8DDC9] bg-[#F8F5EF] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/4] bg-[#E8DDC9]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                <div className="p-7">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C24D4A]">
                    {person.role}
                  </p>

                  <h3 className="text-2xl font-bold text-[#493A35]">
                    {person.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#75665C]">
                    {person.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STAFF CATEGORIES */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Our People"
            title="Working Together"
            description="Different responsibilities, one shared purpose: supporting students throughout their school journey."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {teamCategories.map((category) => (
              <article
                key={category.title}
                className="group overflow-hidden rounded-2xl border border-[#E8DDC9] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#E8DDC9]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-7 md:p-8">
                  <h3 className="text-2xl font-bold text-[#493A35]">
                    {category.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#75665C]">
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="bg-[#493A35] px-5 py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E8DDC9]">
            One School. One Team.
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Together, We Shape
            <span className="block text-[#E8DDC9]">
              Brighter Futures
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            We believe that meaningful education is a collective
            effort. Through guidance, encouragement and teamwork,
            we aim to help every student discover their potential
            and move forward with confidence.
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
