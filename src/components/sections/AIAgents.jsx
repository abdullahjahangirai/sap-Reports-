import { useState } from "react";
import { Shield } from "lucide-react";
import { AGENTS } from "../../data";
import { AnimatedSection } from "../ui/AnimatedSection";

const DESIGN_PRINCIPLES = [
  {
    title: "Model-agnostic",
    desc: "OpenAI, Claude, or Gemini — all viable via standard API or MCP. Select per-agent based on task fit, not vendor lock-in.",
  },
  {
    title: "Explainable decisions",
    desc: "Agents produce a structured recommendation + confidence level + rationale. Not a bare approved/rejected — auditors see why.",
  },
  {
    title: "Debuggable control flow",
    desc: "Multi-step plans expressed as explicit orchestration workflows. LLM used for judgment-heavy sub-steps, not the entire control flow.",
  },
  {
    title: "Inspectable memory",
    desc: "Long-term state stored in Postgres — not opaque vector-store memory the business can't audit or query.",
  },
];

export function AIAgents() {
  const [active, setActive] = useState(0);
  const currentAgent = AGENTS[active];
  const AgentIcon = currentAgent.icon;

  return (
    <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#e879f9",
              fontSize: 12,
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            AI AGENT ARCHITECTURE
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
            7 Narrow, Accountable Agents
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              marginTop: 12,
              fontSize: "0.95rem",
            }}
          >
            Not a black-box mega-agent. Each agent has explicit scope, a stated
            confidence level, and a human checkpoint.
          </p>
        </div>
      </AnimatedSection>

      <div
        className="agents-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1.6fr)",
          gap: 32,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {AGENTS.map(({ name, icon: Icon, color }, i) => (
            <AnimatedSection key={name} delay={i * 80}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                style={{
                  padding: "16px 20px",
                  borderRadius: 14,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background:
                    active === i ? `${color}12` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${active === i ? `${color}40` : "rgba(255,255,255,0.07)"}`,
                  transition: "all 0.25s",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: `${color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color={color} />
                </div>
                <span
                  style={{
                    color: active === i ? "#fff" : "rgba(255,255,255,0.55)",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                  }}
                >
                  {name}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div
            style={{
              padding: 36,
              borderRadius: 24,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(16px)",
              position: "sticky",
              top: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${currentAgent.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AgentIcon size={26} color={currentAgent.color} />
              </div>
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem" }}>
                {currentAgent.name}
              </h3>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.75,
                fontSize: "0.9rem",
                marginBottom: 24,
              }}
            >
              {currentAgent.desc}
            </p>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 12,
                background: "rgba(248,113,113,0.06)",
                border: "1px solid rgba(248,113,113,0.2)",
              }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <Shield
                  size={16}
                  color="#f87171"
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <div>
                  <div
                    style={{
                      color: "#f87171",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                    }}
                  >
                    HUMAN CHECKPOINT
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.83rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {currentAgent.checkpoint}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: 20,
          marginTop: 60,
        }}
      >
        {DESIGN_PRINCIPLES.map(({ title, desc }, i) => (
          <AnimatedSection key={title} delay={i * 80}>
            <div
              style={{
                padding: 24,
                borderRadius: 16,
                background: "rgba(232,121,249,0.05)",
                border: "1px solid rgba(232,121,249,0.12)",
              }}
            >
              <h4
                style={{
                  color: "#e879f9",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  marginBottom: 10,
                }}
              >
                {title}
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.8rem",
                  lineHeight: 1.65,
                }}
              >
                {desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
