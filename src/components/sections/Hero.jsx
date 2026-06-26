import { ChevronDown, Zap } from "lucide-react";
import { useScrollPosition } from "../../hooks/useIntersection";

export function Hero() {
  const scrollY = useScrollPosition();

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          zIndex: 0,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 100,
            border: "1px solid rgba(34,211,238,0.3)",
            background: "rgba(34,211,238,0.06)",
            marginBottom: 32,
          }}
        >
          <Zap size={14} color="#22d3ee" />
          <span
            style={{
              color: "#22d3ee",
              fontSize: 13,
              letterSpacing: "0.08em",
              fontWeight: 500,
            }}
          >
            ENTERPRISE SAP AUTOMATION RESEARCH · JUNE 2026
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 28,
            color: "#fff",
          }}
        >
          The Automation Layer
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SAP Never Gave You
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: 680,
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          A production-grade reference architecture, 104 automatable SAP
          processes, and an evidence-based comparison of 11 automation platforms
          — distilled into a single recommendation.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            marginBottom: 64,
          }}
        >
          {[
            ["104", "Use Cases Mapped"],
            ["11", "Platforms Evaluated"],
            ["3×–8×", "Year 1 ROI"],
            ["5", "Implementation Phases"],
          ].map(([num, label]) => (
            <div
              key={label}
              style={{
                padding: "16px 28px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#22d3ee",
                  lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 4,
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 12, letterSpacing: "0.1em" }}>
            SCROLL TO EXPLORE
          </span>
          <ChevronDown size={18} className="bounce-icon" />
        </div>
      </div>
    </section>
  );
}
