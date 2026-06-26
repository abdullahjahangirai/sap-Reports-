import { AlertTriangle, CheckCircle, Cpu, TrendingUp } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";

const SUMMARY_CARDS = [
  {
    icon: AlertTriangle,
    color: "#f87171",
    title: "The Wall Every SAP Customer Hits",
    text: "SAP is exceptional at running the business, but mediocre at connecting it. Approvals stall in email. Invoices get keyed in twice. Reports get assembled by hand at 11pm on the last day of the month. None of that is a SAP problem — it is an automation layer problem.",
  },
  {
    icon: Cpu,
    color: "#22d3ee",
    title: "The Hybrid Architecture Answer",
    text: "No single vendor wins on every axis. The objectively defensible answer is a Hybrid Architecture: self-hosted n8n as the integration backbone, SAP BPA for governance-bound approvals, and targeted RPA only where a legacy system genuinely has no API.",
  },
  {
    icon: TrendingUp,
    color: "#34d399",
    title: "The Business Case",
    text: "12–18 automations in Year 1 deliver $75K–$300K gross labor savings at $15K–$45K platform cost — a 3×–8× net return, before accounting for error reduction, faster cycle times, and audit-readiness that compound over a multi-year program.",
  },
];

export function ExecutiveSummary() {
  return (
    <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#22d3ee",
              fontSize: 12,
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            EXECUTIVE SUMMARY
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
            The Problem & The Answer
          </h2>
        </div>
      </AnimatedSection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
          gap: 24,
          marginBottom: 48,
        }}
      >
        {SUMMARY_CARDS.map(({ icon: Icon, color, title, text }, i) => (
          <AnimatedSection key={title} delay={i * 120}>
            <div
              style={{
                padding: 32,
                borderRadius: 20,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `${color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <Icon size={22} color={color} />
              </div>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                {text}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={400}>
        <div
          style={{
            padding: "32px 40px",
            borderRadius: 20,
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.07), rgba(167,139,250,0.07))",
            border: "1px solid rgba(34,211,238,0.2)",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
            <CheckCircle
              size={24}
              color="#22d3ee"
              style={{ flexShrink: 0, marginTop: 2 }}
            />
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.75,
                fontSize: "0.95rem",
              }}
            >
              <strong style={{ color: "#fff" }}>Headline finding:</strong> any
              proposal claiming a single-vendor winner is selling, not advising.
              The recommended stack is{" "}
              <strong style={{ color: "#22d3ee" }}>n8n (self-hosted)</strong> as
              the orchestration backbone,
              <strong style={{ color: "#34d399" }}> SAP BPA</strong> for
              in-boundary approvals, and{" "}
              <strong style={{ color: "#a78bfa" }}>targeted UiPath/RPA</strong>{" "}
              only for legacy systems with no API — bought as a bounded line
              item, not the platform-wide engine.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
