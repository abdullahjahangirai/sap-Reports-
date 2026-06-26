import { useState } from "react";
import { X } from "lucide-react";
import { PLATFORMS, PLATFORM_CRITERIA, SCORE_COLORS } from "../../data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { ScoreBar } from "../ui/ScoreBar";

export function PlatformComparison() {
  const [selected, setSelected] = useState(null);

  return (
    <section style={{ padding: "100px 24px", maxWidth: 1400, margin: "0 auto" }}>
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#fb923c",
              fontSize: 12,
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            PLATFORM COMPARISON
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
            11 Automation Engines Evaluated
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              marginTop: 12,
              fontSize: "0.95rem",
            }}
          >
            Click a platform card to see its full score breakdown.
          </p>
        </div>
      </AnimatedSection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
          gap: 16,
          marginBottom: 40,
        }}
      >
        {PLATFORMS.map((platform, i) => (
          <AnimatedSection key={platform.name} delay={i * 80}>
            <div
              role="button"
              tabIndex={0}
              onClick={() =>
                setSelected(
                  selected?.name === platform.name ? null : platform
                )
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(
                    selected?.name === platform.name ? null : platform
                  );
                }
              }}
              style={{
                padding: 24,
                borderRadius: 18,
                cursor: "pointer",
                background:
                  selected?.name === platform.name
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.03)",
                border: `1px solid ${selected?.name === platform.name ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)"}`,
                transition: "all 0.25s",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <h3
                  style={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem" }}
                >
                  {platform.name}
                </h3>
                {platform.tag && (
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      padding: "3px 8px",
                      borderRadius: 100,
                      background: `${platform.tagColor}20`,
                      color: platform.tagColor,
                      border: `1px solid ${platform.tagColor}40`,
                    }}
                  >
                    {platform.tag}
                  </span>
                )}
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "0.78rem",
                  marginBottom: 16,
                  lineHeight: 1.5,
                }}
              >
                {platform.arch}
              </p>
              <div
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <span
                  style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem" }}
                >
                  Enterprise cost:{" "}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                  }}
                >
                  {platform.cost}
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {selected && (
        <AnimatedSection>
          <div
            style={{
              padding: 40,
              borderRadius: 24,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 32,
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div>
                <h3
                  style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem" }}
                >
                  {selected.name}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.85rem",
                    marginTop: 6,
                  }}
                >
                  Best for: {selected.bestFor}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 16px",
                  color: "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <X size={14} /> Close
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))",
                gap: 20,
              }}
            >
              {PLATFORM_CRITERIA.map(({ key, label }) => (
                <div key={key}>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.75rem",
                      marginBottom: 8,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {label}
                  </div>
                  <ScoreBar
                    value={selected[key]}
                    color={SCORE_COLORS[selected[key]]}
                  />
                  <div
                    style={{
                      color: SCORE_COLORS[selected[key]],
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      marginTop: 6,
                    }}
                  >
                    {selected[key]}/5
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection delay={400}>
        <p
          style={{
            color: "rgba(255,255,255,0.25)",
            fontSize: "0.8rem",
            textAlign: "center",
            marginTop: 32,
          }}
        >
          No platform scores well across every dimension — which is the entire
          point of the Hybrid Architecture recommendation.
        </p>
      </AnimatedSection>
    </section>
  );
}
