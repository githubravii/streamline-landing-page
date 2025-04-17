"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleGoLive = () => {
    window.location.href = "/detection-model"; // Update with the actual route or URL of your detection model
  };

  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-3xl md:text-3xl lg:text-5xl">
          Welcome to the Accident Detection Model
          <br />
    ResQAlert
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Our AI-Powered Accident Detection Model is designed to help you detect accidents in real-time and alert the authorities immediately.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" onClick={handleGoLive}>
          Get Start...
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
      </div>
    </section>
  );
}