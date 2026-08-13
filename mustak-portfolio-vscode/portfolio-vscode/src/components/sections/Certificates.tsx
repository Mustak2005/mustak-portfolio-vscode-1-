import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { ExternalLink } from "lucide-react";
// EDIT: Replace these imports with your own certificate images in src/assets/
import cert1 from "@assets/cert1.jpg";
import cert2 from "@assets/cert2.jpg";
import cert3 from "@assets/cert3.jpg";
import cert4 from "@assets/cert4.jpg";
import cert5 from "@assets/cert5.jpg";
import cert6 from "@assets/cert6.jpg";

export function Certificates() {
  // EDIT: Update certificate titles, issuers, dates, and images
  const certificates = [
    {
      title: "The Joy of Computing using Python",
      issuer: "NPTEL – IIT Madras",
      date: "Jul – Oct 2025",
      image: cert5,
    },
    {
      title: "Data Structures using C",
      issuer: "CodeTantra",
      date: "Jul 2025",
      image: cert6,
    },
    {
      title: "Product Engineering and Design Thinking",
      issuer: "NPTEL – IIT Kharagpur",
      date: "Jan – Mar 2026",
      image: cert1,
    },
    {
      title: "Understanding Incubation and Entrepreneurship",
      issuer: "NPTEL – IIT Bombay",
      date: "Jan – Apr 2026",
      image: cert2,
    },
    {
      title: "Java Full Stack Developer Virtual Internship",
      issuer: "EduSkills / AICTE",
      date: "Jan – Mar 2026",
      image: cert3,
    },
    {
      title: "Acquiring Data – AI Fundamentals (ASCEND)",
      issuer: "Accenture / FutureSkills Prime",
      date: "Nov 2025",
      image: cert4,
    },
  ];

  return (
    <section id="certificates" className="py-24 relative bg-[#050510]">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,128,255,0.3)] to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Certifications"
          subtitle="Formal recognition of my learning and capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-xl overflow-hidden group hover:border-[#00BFFF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,128,255,0.15)] flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden border-b border-[rgba(255,255,255,0.05)]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#00BFFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-base font-semibold text-[#E8E8FF] mb-1 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-[#8888AA] mb-1">
                  Issued by: <span className="text-[#00BFFF]">{cert.issuer}</span>
                </p>
                <p className="text-xs text-[#8888AA] mb-5">{cert.date}</p>

                <button
                  onClick={() => window.open(cert.image, "_blank")}
                  className="flex items-center gap-2 text-sm font-medium text-white bg-[rgba(255,255,255,0.05)] hover:bg-[#0080FF] py-2 px-4 rounded-lg transition-colors border border-[rgba(255,255,255,0.1)] hover:border-transparent w-fit"
                >
                  View <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
