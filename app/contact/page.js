
import Link from "next/link";
import EnquiryForm from "../../components/home/EnquiryForm";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const schoolAddress =
  "Main Branch, Power House Road, Sarbahal, Jharsuguda, Odisha 768201";

const phoneNumber = "+918763220914";
const displayPhone = "+91 8763220914";
const emailAddress = "lsps.jsg@gmail.com";

const mapQuery = encodeURIComponent(
  "Little Star Public School, Power House Road, Sarbahal, Jharsuguda, Odisha 768201"
);

const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

function ContactIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  return null;
}

function ContactCard({ icon, title, children, link, linkText }) {
  return (
    <div className="rounded-2xl border border-[#E8DDC9] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#C24D4A]/10 text-[#C24D4A]">
        <ContactIcon type={icon} />
      </div>

      <h3 className="text-xl font-bold text-[#493A35]">
        {title}
      </h3>

      <div className="mt-3 text-sm leading-7 text-[#75665C]">
        {children}
      </div>

      <a
        href={link}
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#C24D4A] transition hover:text-[#7A3032]"
      >
        {linkText}
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export default function ContactPage() {
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
            Get in Touch
            <span className="block text-[#E8DDC9]">
              We Are Here to Help
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Have questions about admissions, academics or school
            activities? Contact us. Our team will be happy to assist you.
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
              Contact Us
            </span>
          </div>
        </div>

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 pb-10 pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#C24D4A]">
            Contact Information
          </p>

          <h2 className="text-3xl font-bold text-[#493A35] md:text-4xl">
            Connect With Our School
          </h2>

          <p className="mt-5 leading-8 text-[#75665C]">
            Whether you are a parent, student or prospective family,
            we welcome your questions and enquiries. Reach us through
            the following contact details.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-5 pb-20 pt-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">

          <ContactCard
            icon="location"
            title="Visit Our School"
            link={mapDirectionsUrl}
            linkText="Get Directions"
          >
            <p>{schoolAddress}</p>
            <p className="mt-2 font-semibold text-[#493A35]">
              Main Branch
            </p>
          </ContactCard>

          <ContactCard
            icon="phone"
            title="Call Us"
            link={`tel:${phoneNumber}`}
            linkText="Call Now"
          >
            <p>Speak with our school team for enquiries and assistance.</p>
            <p className="mt-2 font-semibold text-[#493A35]">
              {displayPhone}
            </p>
          </ContactCard>

          <ContactCard
            icon="email"
            title="Email Us"
            link={`mailto:${emailAddress}`}
            linkText="Send Email"
          >
            <p>
              Write to us for admission enquiries and other school-related
              information.
            </p>
            <p className="mt-2 break-all font-semibold text-[#493A35]">
              {emailAddress}
            </p>
          </ContactCard>

        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#C24D4A]">
                Find Us
              </p>

              <h2 className="text-3xl font-bold text-[#493A35] md:text-4xl">
                Visit Little Star Public School
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#75665C]">
                Find our Main Branch at Power House Road, Sarbahal,
                Jharsuguda, Odisha.
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/2d9V5C67rvTWw7sD7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#C24D4A] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#A93F3C]"
            >
              Get Directions →
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E8DDC9] bg-[#F8F5EF] shadow-sm">
            <iframe
              title="Little Star Public School location on Google Maps"
              src={mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-5 flex flex-col gap-2 text-sm text-[#75665C] md:flex-row md:items-center md:justify-between">
            <p>{schoolAddress}</p>

            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#C24D4A] hover:text-[#7A3032]"
            >
              Open in Google Maps ↗
            </a>
          </div>

        </div>
      </section>

      <EnquiryForm />

      {/* FINAL CTA */}
      <section className="bg-[#493A35] px-5 py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-3xl">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E8DDC9]">
            We Look Forward to Hearing From You
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Let Us Help You
            <span className="block text-[#E8DDC9]">
              Take the Next Step
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            For admission-related questions or general information,
            get in touch with Little Star Public School.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center rounded-full bg-[#C24D4A] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#A93F3C]"
            >
              Call Our School
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#493A35]"
            >
              Send an Email
            </a>
          </div>

        </div>
      </section>

    </main>
    <Footer />
    </>
  );
}
