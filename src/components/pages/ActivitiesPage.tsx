"use client";
import { useState } from "react";
import AutoSlider from "@/components/ui/AutoSlider";

const activities = [
  {
    id: 1,
    title: "Youth Leadership Summit 2023",
    date: "2023-08-15",
    images: [
      { src: "/assets/about/about-4.jpeg", alt: "Youth Leadership Summit" },
      { src: "/assets/about/about-5.jpeg", alt: "Youth Leadership Summit" },
    ],
    description: "A national summit bringing together youth leaders and policymakers for dialogue and action.",
    details: "The summit featured workshops, keynote speeches, and collaborative sessions focused on youth empowerment and policy reform.",
  },
  {
    id: 2,
    title: "ICT Skills Training",
    date: "2023-05-10",
    images: [
      { src: "/assets/about/about-6.jpeg", alt: "ICT Skills Training" },
      { src: "/assets/about/about-7.jpeg", alt: "ICT Skills Training" },
    ],
    description: "Digital skills bootcamp for young people in Sierra Leone.",
    details: "Participants learned web development, digital marketing, and entrepreneurship from industry experts.",
  },
];

export default function ActivitiesPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="page-wrap">
      {/* Hero */}
      <section className="page-hero hero-activities-bg" data-ghost="ACTIVITIES">
        <div className="page-hero-eyebrow">YACAP · Sierra Leone</div>
        <h1 className="page-hero-h1">
          Activities &amp;<br />
          <em className="hero-h1-accent">Initiatives</em>
        </h1>
        <p className="page-hero-subtitle">Events and initiatives led by Sheku Foryoh and YACAP across Sierra Leone and beyond.</p>
      </section>

      {/* Activities Grid */}
      <section className="impact-cards-section">
        <div className="section-label section-label-mb">Recent Activities</div>
        <div className="impact-cards-grid">
          {activities.map((activity) => (
            <article key={activity.id} className="impact-card activity-card-img">
              <AutoSlider
                slides={activity.images}
                imgWidth={260}
                imgHeight={170}
                interval={3800}
              />
              <div className="activity-card-body">
                <div className="impact-card-category">{activity.date}</div>
                <h3 className="impact-card-title">{activity.title}</h3>
                <p className="impact-card-body">{activity.description}</p>
                <button
                  type="button"
                  className="btn-outline activity-card-btn"
                  onClick={() => setOpen(open === activity.id ? null : activity.id)}
                >
                  {open === activity.id ? "Hide Details" : "Learn More"}
                </button>
                {open === activity.id && (
                  <p className="impact-card-body activity-card-details">
                    {activity.details}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
