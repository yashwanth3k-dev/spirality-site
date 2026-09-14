"use client";

import { Lottie } from "lottie-react";
import chatbotAnimation from "~/assets/hero/chatbot.json";

export default function ChatbotLottie({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Lottie src={chatbotAnimation} loop autoplay className="sp-hero-lottie" />
    </div>
  );
}
