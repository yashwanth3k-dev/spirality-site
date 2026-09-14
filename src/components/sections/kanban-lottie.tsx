"use client";

import { Lottie } from "lottie-react";
import kanbanAnimation from "~/assets/hero/kanban.json";

export default function KanbanLottie({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Lottie src={kanbanAnimation} loop autoplay className="sp-hero-lottie" />
    </div>
  );
}
