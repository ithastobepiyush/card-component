"use client";
import React from "react";
import { CaseStudyCard, CaseStudy } from "@/components/CaseStudyCard";

const caseStudies: CaseStudy[] = [
  {
    id: "mastercard",
    title: "Mastercard’s Emotional Marketing Approach",
    description: "Hover on this card to see the Case Summary",
    image: "https://drbrandagency.com/wp-content/uploads/2025/01/11-1024x576.jpg",
    href: "/case-studies/mastercard",
  },
  {
    id: "nike",
    title: "Nike's 'Just Do It' Campaign",
    description: "Building a global sports community through inspiration.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    href: "/case-studies/nike",
  },
  {
    id: "apple",
    title: "Apple's 'Think Different'",
    description: "A look into one of the most iconic tech campaigns.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    href: "/case-studies/apple",
  },
  {
    id: "coca-cola",
    title: "Coca-Cola's 'Share a Coke'",
    description: "Personalization at scale in global beverage marketing.",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000&auto=format&fit=crop",
    href: "/case-studies/coca-cola",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">
          Case Studies
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-neutral-500 dark:text-neutral-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Explore our most successful marketing campaigns and strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-10">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </div>
  );
}
