"use client";

import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import EnquiryForm from "../components/home/EnquiryForm";

const slides = [
  {
    image: "/images/slider/school-1.jpg",
    label: "Learning · Growing · Achieving",
    title: "A brighter tomorrow begins here.",
  },
  {
    image: "/images/slider/school-2.jpg",
    label: "Discover · Explore · Create",
    title: "Every child has the potential to shine.",
  },
  {
    image: "/images/slider/school-3.jpg",
    label: "Building Strong Foundations",
    title: "Learning that inspires confidence.",
  },
  {
    image: "/images/slider/school-4.jpg",
    label: "Beyond the Classroom",
    title: "Experiences that shape young minds.",
  },
  {
    image: "/images/slider/school-5.jpg",
    label: "Our School · Our Family",
    title: "Growing together, achieving together.",
  },
];

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

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const previous = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }


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

            <div className="relative min-h-[340px] md:min-h-[440px] rounded-[32px] overflow-hidden shadow-xl group">

      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          <div className="absolute bottom-10 left-6 right-6 md:left-10 text-white">
            <p className="text-xs uppercase tracking-[3px] font-semibold">
              {slide.label}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-3 max-w-lg">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Previous button */}
      <button
        onClick={previous}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10
        w-10 h-10 rounded-full bg-white/80 hover:bg-white
        text-[#493a35] text-xl transition"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10
        w-10 h-10 rounded-full bg-white/80 hover:bg-white
        text-[#493a35] text-xl transition"
      >
        ›
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 right-6 z-10 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-7 bg-white"
                : "w-2 bg-white/60"
            }`}
          />
        ))}
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
          <div className="relative min-h-[320px] rounded-3xl overflow-hidden shadow-lg">
  <Image
    src="/images/school-img.jpg"
    alt="Students and learning environment at Little Star Public School"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

  <div className="absolute bottom-6 left-6 right-6 text-white">
    <p className="text-xs uppercase tracking-[3px] font-semibold">
      Our School · Our Community
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      A community of learners
    </h3>
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

        <EnquiryForm />

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

            <div className="relative min-h-[300px] overflow-hidden rounded-3xl">
  <Image
    src="/images/school-events.jpg"
    alt="Students participating in school events and activities"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
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