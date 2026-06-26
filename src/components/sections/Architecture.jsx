import { useState } from "react";
import { Network, Shield } from "lucide-react";
import { ARCH_NODES, NODE_DETAILS } from "../../data";
import { AnimatedSection } from "../ui/AnimatedSection";

export function Architecture() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#34d399",
              fontSize: 12,
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            REFERENCE ARCHITECTURE
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
            How the Layers Connect
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              marginTop: 12,
              fontSize: "0.95rem",
            }}
          >
            Click any layer for details.
          </p>
        </div>
      </AnimatedSection>

      <div
        className="architecture-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "start",
        }}
      >
        <AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {ARCH_NODES.map((node, i) => (
              <div key={node.id}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setActiveNode(activeNode === node.id ? null : node.id)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveNode(activeNode === node.id ? null : node.id);
                    }
                  }}
                  style={{
                    padding: "18px 24px",
                    borderRadius: 14,
                    cursor: "pointer",
                    background:
                      activeNode === node.id
                        ? `${node.border}18`
                        : `${node.color}90`,
                    border: `1px solid ${activeNode === node.id ? node.border : `${node.border}40`}`,
                    transition: "all 0.25s ease",
                    transform:
                      activeNode === node.id ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  <div
                    style={{
                      color: node.border,
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    {node.label}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.75rem",
                      marginTop: 4,
                    }}
                  >
                    {node.sub}
                  </div>
                </div>
                {i < ARCH_NODES.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "6px 0",
                    }}
                  >
                    <div
                      style={{
                        width: 2,
                        height: 20,
                        background: `linear-gradient(${ARCH_NODES[i].border}, ${ARCH_NODES[i + 1].border})`,
                        opacity: 0.4,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div style={{ position: "sticky", top: 100 }}>
            {activeNode ? (
              <div
                style={{
                  padding: 32,
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: 16,
                  }}
                >
                  {NODE_DETAILS[activeNode].title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.75,
                    fontSize: "0.9rem",
                  }}
                >
                  {NODE_DETAILS[activeNode].body}
                </p>
              </div>
            ) : (
              <div
                style={{
                  padding: 32,
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px dashed rgba(255,255,255,0.1)",
                  textAlign: "center",
                }}
              >
                <Network
                  size={40}
                  color="rgba(255,255,255,0.15)"
                  style={{ marginBottom: 16 }}
                />
                <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.9rem" }}>
                  Click any architecture layer on the left to see details about
                  how it works and why it&apos;s designed that way.
                </p>
              </div>
            )}

            <div
              style={{
                marginTop: 24,
                padding: 20,
                borderRadius: 14,
                background: "rgba(248,113,113,0.06)",
                border: "1px solid rgba(248,113,113,0.2)",
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Shield
                  size={18}
                  color="#f87171"
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: "#f87171" }}>
                    Non-negotiable principle:
                  </strong>{" "}
                  human approval gate before any write-back that moves money,
                  changes a contract, or alters master data. AI agents recommend;
                  humans authorize; the platform executes and logs.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
