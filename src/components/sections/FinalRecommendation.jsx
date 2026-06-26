import { AlertTriangle } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";

const RECOMMENDATIONS = [
  {
    num: "01",
    color: "#22d3ee",
    title: "n8n, self-hosted",
    sub: "Integration & AI-orchestration backbone",
    body: "Connects to SAP via OData today (community node, production-proven). Costs orders of magnitude less than proprietary RPA at scale. No vendor lock-in (fair-code, self-hostable indefinitely). Strongest native AI/agent integration story of any platform evaluated.",
  },
  {
    num: "02",
    color: "#34d399",
    title: "SAP Build Process Automation",
    sub: "Governance-bound in-SAP approvals",
    body: "For workflows that must stay fully inside the SAP governance boundary — particularly approval processes already living in SAP Fiori/Work Zone, or any process where the compliance posture requires the workflow engine itself to be BTP-resident.",
  },
  {
    num: "03",
    color: "#a78bfa",
    title: "Targeted RPA (UiPath)",
    sub: "Legacy systems with no API — no more",
    body: "Only where a specific legacy system has no usable API: old Windows-only applications, green-screen terminals, third-party tools with no integration surface. Bought as a small, bounded line item — not the platform-wide automation engine.",
  },
];

export function FinalRecommendation() {
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
            FINAL RECOMMENDATION
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
            The Honest Answer
          </h2>
        </div>
      </AnimatedSection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
          gap: 20,
          marginBottom: 48,
        }}
      >
        {RECOMMENDATIONS.map(({ num, color, title, sub, body }, i) => (
          <AnimatedSection key={num} delay={i * 120}>
            <div
              style={{
                padding: 32,
                borderRadius: 20,
                height: "100%",
                background: `${color}08`,
                border: `1px solid ${color}30`,
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: `${color}50`,
                  lineHeight: 1,
                  marginBottom: 20,
                }}
              >
                {num}
              </div>
              <h3
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "1rem",
                  marginBottom: 6,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: `${color}cc`,
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                {sub}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                }}
              >
                {body}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={400}>
        <div
          style={{
            padding: "28px 36px",
            borderRadius: 20,
            background: "rgba(251,191,36,0.06)",
            border: "1px solid rgba(251,191,36,0.2)",
          }}
        >
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <AlertTriangle
              size={22}
              color="#fbbf24"
              style={{ flexShrink: 0, marginTop: 2 }}
            />
            <div>
              <h4 style={{ color: "#fbbf24", fontWeight: 700, marginBottom: 10 }}>
                The Honest Caveat
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                }}
              >
                If the client already has a mature, well-funded UiPath or SAP BPA
                program with sunk investment and trained staff, the right answer
                may be &quot;extend what you have,&quot; not &quot;replatform.&quot;
                This recommendation is the objectively best{" "}
                <em>greenfield or near-greenfield</em> answer. Any proposal should
                validate the client&apos;s existing automation footprint in Phase 1
                (Discovery) before this recommendation is finalized.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
