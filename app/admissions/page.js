
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const admissionSteps = [
  {
    number: "01",
    title: "Make an Enquiry",
    description:
      "Contact our school office to learn about available classes and admission requirements.",
  },
  {
    number: "02",
    title: "Visit the School",
    description:
      "Visit our campus, explore the learning environment and interact with our team.",
  },
  {
    number: "03",
    title: "Submit Application",
    description:
      "Complete the admission application form and submit the required documents.",
  },
  {
    number: "04",
    title: "Admission Confirmation",
    description:
      "Complete the verification and admission formalities as guided by the school office.",
  },
];

const classes = [
  { name: "Nursery", level: "Pre-Primary" },
  { name: "LKG", level: "Pre-Primary" },
  { name: "UKG", level: "Pre-Primary" },
  { name: "Classes I–V", level: "Primary" },
  { name: "Classes VI–VIII", level: "Middle School" },
  { name: "Classes IX–X", level: "Secondary" },
];

const documents = [
  "Completed admission application form",
  "Recent passport-size photographs",
  "Birth certificate (as applicable)",
  "Previous school records (for applicable classes)",
  "Transfer certificate (where applicable)",
  "Parent or guardian identification details",
];

export default function AdmissionsPage() {
  return (
    <>
    <Header /> 
    <main className="bg-[#f8f5ef] text-[#493a35]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#493a35] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[#e8c9a8] text-sm uppercase tracking-[3px] font-semibold">
              Admissions · Little Star Public School
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
              Give Your Child
              <span className="block text-[#e8c9a8]">
                The Right Start.
              </span>
            </h1>

            <p className="text-white/80 leading-8 mt-6 max-w-xl">
              Every child's journey begins with a strong foundation.
              Discover a learning environment where curiosity,
              confidence and growth are encouraged every day.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#admission-process"
                className="bg-[#c24d4a] text-white px-7 py-4 rounded-full font-bold text-sm hover:bg-[#a43d3b] transition"
              >
                Explore Admission Process
              </a>

              <a
                href="#contact-admissions"
                className="border border-white/50 px-7 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-[#493a35] transition"
              >
                Enquire Now
              </a>
            </div>
          </div>

          <div className="relative h-[320px] md:h-[430px] rounded-3xl overflow-hidden">
            <Image
              src="/images/admissions-hero.jpg"
              alt="Students at Little Star Public School"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c24d4a] uppercase tracking-[3px] text-xs font-bold">
            Begin Their Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            A Place to Learn, Grow and Shine
          </h2>

          <p className="text-[#75665c] leading-8 mt-6">
            At Little Star Public School, we believe that every child
            deserves an encouraging environment to explore new ideas,
            develop skills and build confidence.
            We welcome parents to learn more about our school
            and the admission process.
          </p>
        </div>
      </section>

      {/* CLASSES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-[#c24d4a] uppercase tracking-[3px] text-xs font-bold">
              Academic Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Classes Offered
            </h2>
            <p className="text-[#75665c] mt-4">
              Learning opportunities from early childhood through secondary education.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {classes.map((item) => (
              <div
                key={item.name}
                className="p-7 rounded-2xl border border-[#e8ddc9] hover:border-[#c24d4a] hover:shadow-lg transition"
              >
                <p className="text-xs text-[#c24d4a] font-bold uppercase tracking-widest">
                  {item.level}
                </p>
                <h3 className="text-2xl font-bold mt-3">
                  {item.name}
                </h3>
                <p className="text-sm text-[#75665c] mt-3">
                  Contact the admission office for class availability and eligibility.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section id="admission-process" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[#c24d4a] uppercase tracking-[3px] text-xs font-bold">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Admission Process
          </h2>
          <p className="text-[#75665c] mt-4">
            Four simple steps to begin your child's school journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-7 shadow-sm">
              <span className="text-4xl font-bold text-[#c24d4a]/30">
                {step.number}
              </span>
              <h3 className="font-bold text-xl mt-5">
                {step.title}
              </h3>
              <p className="text-sm text-[#75665c] leading-7 mt-3">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-[#e8ddc9]/50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative min-h-[350px] rounded-3xl overflow-hidden">
            <Image
              src="/images/admission-documents.jpg"
              alt="School admission documentation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[#c24d4a] uppercase tracking-[3px] text-xs font-bold">
              Be Prepared
            </p>

            <h2 className="text-3xl font-bold mt-4">
              Documents to Keep Ready
            </h2>

            <p className="text-[#75665c] leading-7 mt-4">
              Parents may be asked to provide the following documents.
              Please confirm the exact requirements with the school office.
            </p>

            <ul className="space-y-4 mt-7">
              {documents.map((document) => (
                <li key={document} className="flex gap-3 items-start">
                  <span className="text-[#c24d4a] font-bold">✓</span>
                  <span className="text-sm">{document}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* SCHOOL VISIT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl overflow-hidden grid md:grid-cols-2 items-center shadow-sm">

          <div className="relative min-h-[320px]">
            <Image
              src="/images/school-visit.jpg"
              alt="Little Star Public School campus"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <p className="text-[#c24d4a] uppercase tracking-[3px] text-xs font-bold">
              Experience Our School
            </p>
            <h2 className="text-3xl font-bold mt-4">
              We Invite You to Visit Us
            </h2>
            <p className="text-[#75665c] leading-8 mt-5">
              Choosing a school is an important decision.
              Visit our campus, meet our team and learn more
              about the opportunities available for your child.
            </p>
            <a
              href="#contact-admissions"
              className="inline-block mt-7 bg-[#c24d4a] text-white px-7 py-4 rounded-full text-sm font-bold hover:bg-[#7a3032] transition"
            >
              Plan a School Visit
            </a>
          </div>

        </div>
      </section>

      {/* FEE ENQUIRY */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Have Questions About Fees?
          </h2>
          <p className="text-[#75665c] leading-7 mt-4">
            Contact our school office to obtain the latest fee structure,
            payment details and admission-related information.
          </p>
          <a
            href="#contact-admissions"
            className="inline-block mt-6 border border-[#c24d4a] text-[#c24d4a] px-7 py-3 rounded-full font-bold text-sm hover:bg-[#c24d4a] hover:text-white transition"
          >
            Enquire About Fees
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact-admissions" className="bg-[#493a35] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#e8c9a8] uppercase tracking-[3px] text-xs font-bold">
            Take the First Step
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-5">
            Let's Begin Your Child's Journey Together.
          </h2>
          <p className="text-white/75 mt-5 leading-7">
            Get in touch with Little Star Public School for admission
            enquiries, school visits and further assistance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">
            <Link
              href="/contact"
              className="bg-[#c24d4a] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#a43d3b] transition"
            >
              Contact Our School
            </Link>

            <Link
              href="/"
              className="border border-white/40 px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-[#493a35] transition"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

    </main>
    <Footer />
    </>
  );
}
