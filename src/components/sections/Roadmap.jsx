import { Clock } from "lucide-react";
import { ROADMAP } from "../../data";
import { AnimatedSection } from "../ui/AnimatedSection";

const KPIS = [
  "Workflow execution success rate",
  "Mean time to resolve a failed execution",
  "Manual hours displaced per month",
  "Dollar value of exceptions caught before posting",
  "Approval cycle time (before vs. after)",
  "Platform cost per executed process",
];

export function Roadmap() {
  return (
    <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#60a5fa",
              fontSize: 12,
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            IMPLEMENTATION ROADMAP
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem,4vw,3rem)",
              fontWeight: 800,
              color: "#fff",
              marginTop: 12,
              letterSpacing: "-0.02em",
            }}
          >
            5 Phases to Full Automation
          </h2>
        </div>
      </AnimatedSection>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {ROADMAP.map(({ phase, title, duration, color, items }, i) => (
          <AnimatedSection key={phase} delay={i * 120}>
            <div
              style={{
                padding: "28px 32px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: 32,
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color,
                    lineHeight: 1,
                  }}
                >
                  {phase}
                </div>
              </div>
              <div>
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginBottom: 16,
                  }}
                >
                  {title}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "5px 12px",
                        borderRadius: 100,
                        fontSize: "0.75rem",
                        background: `${color}12`,
                        color: `${color}cc`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  padding: "8px 16px",
                  borderRadius: 100,
                  whiteSpace: "nowrap",
                  background: `${color}12`,
                  color,
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  border: `1px solid ${color}30`,
                }}
              >
                <Clock size={12} style={{ display: "inline", marginRight: 6 }} />
                {duration}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={700}>
        <div
          style={{
            marginTop: 48,
            padding: "28px 32px",
            borderRadius: 20,
            background: "rgba(96,165,250,0.06)",
            border: "1px solid rgba(96,165,250,0.15)",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}
          >
            KPIs TRACKED THROUGHOUT
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {KPIS.map((kpi) => (
              <span
                key={kpi}
                style={{
                  padding: "6px 14px",
                  borderRadius: 100,
                  fontSize: "0.78rem",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {kpi}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
