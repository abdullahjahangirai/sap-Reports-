import { AnimatedSection } from "../ui/AnimatedSection";

const ROI_METRICS = [
  {
    label: "Manual hours eliminated per use case",
    value: "15–25 hrs/mo",
    color: "#22d3ee",
  },
  {
    label: "Blended fully-loaded cost of manual labor",
    value: "$35–$55/hr",
    color: "#a78bfa",
  },
  {
    label: "Annual savings per mid-complexity use case",
    value: "$6,300–$16,500",
    color: "#34d399",
  },
  {
    label: "Use cases targeted in Year 1 (Phases 2–3)",
    value: "12–18",
    color: "#fb923c",
  },
  {
    label: "Estimated Year 1 gross labor savings",
    value: "$75K–$300K",
    color: "#4ade80",
    highlight: true,
  },
  {
    label: "Year 1 platform + infrastructure cost",
    value: "$15K–$45K",
    color: "#f87171",
  },
  {
    label: "Indicative Year 1 net ROI",
    value: "3× – 8×",
    color: "#fbbf24",
    highlight: true,
  },
];

const STAKEHOLDER_PITCHES = [
  {
    role: "CFO",
    color: "#22d3ee",
    pitch:
      "Automation converts variable headcount cost on repetitive transactional work into a fixed, predictable infrastructure cost — and shortens days-to-close and days-payable-outstanding cycles that show up in working capital.",
  },
  {
    role: "CIO",
    color: "#a78bfa",
    pitch:
      "A self-hosted-first hybrid architecture keeps data inside the client's own infrastructure and SAP boundary wherever it matters, reducing the audit and data-residency burden versus routing sensitive SAP data through multiple third-party SaaS tools.",
  },
  {
    role: "CTO",
    color: "#34d399",
    pitch:
      "An open, fair-code orchestration core avoids the multi-year lock-in and bot-count cost escalation that defines the RPA vendor category, while still allowing targeted, best-of-breed RPA where a legacy system genuinely demands it.",
  },
  {
    role: "CEO",
    color: "#fb923c",
    pitch:
      "The program is positioned as a capability the organisation owns and compounds — every workflow built adds reusable integration plumbing for the next one — not a one-off project that ends when the consulting engagement ends.",
  },
];

export function ROI() {
  return (
    <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#4ade80",
              fontSize: 12,
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            BUSINESS CASE
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
            Illustrative Year 1 ROI
          </h2>
        </div>
      </AnimatedSection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: 24,
        }}
      >
        {ROI_METRICS.map(({ label, value, color, highlight }, i) => (
          <AnimatedSection key={label} delay={i * 80}>
            <div
              style={{
                padding: "24px 28px",
                borderRadius: 18,
                background: highlight ? `${color}10` : "rgba(255,255,255,0.03)",
                border: `1px solid ${highlight ? `${color}30` : "rgba(255,255,255,0.07)"}`,
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.78rem",
                  marginBottom: 10,
                  lineHeight: 1.5,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  color: highlight ? color : "#fff",
                  fontSize: highlight ? "1.8rem" : "1.4rem",
                  fontWeight: 800,
                }}
              >
                {value}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: 20,
          marginTop: 48,
        }}
      >
        {STAKEHOLDER_PITCHES.map(({ role, color, pitch }, i) => (
          <AnimatedSection key={role} delay={i * 80}>
            <div
              style={{
                padding: 24,
                borderRadius: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: `${color}20`,
                  color,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  display: "inline-block",
                  marginBottom: 14,
                }}
              >
                {role}
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.82rem",
                  lineHeight: 1.7,
                }}
              >
                {pitch}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
