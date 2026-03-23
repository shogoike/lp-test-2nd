"use client";

import { Lightbulb } from "lucide-react";
import { roadmapSteps } from "@/lib/guideContent";

const stepColors = [
  { icon: "#D88FA3", iconBg: "#3A2035", ring: "rgba(216,143,163,0.2)", line: "#3A506A" },
  { icon: "#D88FA3", iconBg: "#3A2035", ring: "rgba(216,143,163,0.2)", line: "#3A506A" },
  { icon: "#D88FA3", iconBg: "#3A2035", ring: "rgba(216,143,163,0.2)", line: "#3A506A" },
  { icon: "#D88FA3", iconBg: "#3A2035", ring: "rgba(216,143,163,0.2)", line: "#3A506A" },
  { icon: "#D88FA3", iconBg: "#3A2035", ring: "rgba(216,143,163,0.2)", line: "#3A506A" },
];

export default function Roadmap() {
  return (
    <section className="w-full py-12 md:py-16" style={{ background: "#1F3044" }}>
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1.5 text-sm font-bold rounded-full mb-3"
            style={{ background: "#2E4A62", color: "#D88FA3" }}
          >
            ロードマップ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#FFFFFF" }}>
            退職までの5ステップ
          </h2>
          <p className="text-sm" style={{ color: "#8A9BAD" }}>一つずつ、焦らず進めていきましょう</p>
        </div>

        <div className="relative">
          {roadmapSteps.map((step, index) => {
            const sc = stepColors[index];
            const IconComponent = step.icon;
            const isLast = index === roadmapSteps.length - 1;

            return (
              <div key={step.step} className="relative flex gap-4 md:gap-6 pb-10 last:pb-0">
                {!isLast && (
                  <div
                    className="absolute left-5 md:left-6 top-14 w-0.5"
                    style={{ height: "calc(100% - 2.5rem)", background: sc.line }}
                  />
                )}

                <div className="flex-shrink-0 relative">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: sc.iconBg,
                      boxShadow: `0 0 0 4px ${sc.ring}, 0 0 0 6px #1F3044`,
                    }}
                  >
                    <IconComponent size={20} style={{ color: sc.icon }} />
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold border shadow-sm"
                    style={{ background: "#1F3044", color: "#8A9BAD", borderColor: "#3A506A" }}
                  >
                    {step.step}
                  </span>
                </div>

                <div className="flex-grow">
                  <div
                    className="rounded-2xl p-5 md:p-6 transition-shadow duration-300"
                    style={{ background: "#243A50", border: "1px solid #2E4A62" }}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#8A9BAD" }}>
                        Step {step.step}
                      </span>
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full border"
                        style={{ background: "#2E4A62", color: "#C5CED8", borderColor: "#3A506A" }}
                      >
                        {step.timing}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "#FFFFFF" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#C5CED8" }}>
                      {step.action}
                    </p>

                    {step.tips && (
                      <div
                        className="flex items-start gap-2 p-3 rounded-xl border"
                        style={{ background: "#1B2A3C", borderColor: "#2E4A62" }}
                      >
                        <Lightbulb size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#D88FA3" }} />
                        <p className="text-xs leading-relaxed" style={{ color: "#A0B0C0" }}>
                          {step.highlight
                            ? (() => {
                                const parts = step.tips.split(step.highlight);
                                return <>{parts[0]}<strong className="font-bold" style={{ color: "#FFFFFF" }}>{step.highlight}</strong>{parts[1]}</>;
                              })()
                            : step.tips}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
