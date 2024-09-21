import React from "react";
import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <FeatureCard
        icon="🛸"
        title="Quick Start"
        description="Create a room link in no time. No sign-up needed."
      />
      <FeatureCard
        icon="🔐"
        title="Privacy First"
        description="Keep your chats safe with passcode protection."
      />
      <FeatureCard
        icon="🌐"
        title="Universal Access"
        description="Compatible with any device that has a modern browser."
      />
    </section>
  );
}
