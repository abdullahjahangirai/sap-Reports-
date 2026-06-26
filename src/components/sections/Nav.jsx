import { Cpu } from "lucide-react";
import { useScrolledPast } from "../../hooks/useIntersection";

const NAV_LINKS = [
  ["Summary", "#summary"],
  ["Architecture", "#architecture"],
  ["Platforms", "#platforms"],
  ["AI Agents", "#agents"],
  ["Roadmap", "#roadmap"],
  ["ROI", "#roi"],
];

function scrollToSection(hash) {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Nav() {
  const scrolled = useScrolledPast(60);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "12px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled ? "rgba(8,8,14,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Cpu size={18} color="#22d3ee" />
        <span
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          SAP AutoArch
        </span>
        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem" }}>
          2026
        </span>
      </div>
      <div className="nav-links" style={{ display: "flex", gap: 6 }}>
        {NAV_LINKS.map(([label, hash]) => (
          <button
            key={label}
            type="button"
            onClick={() => scrollToSection(hash)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.78rem",
              cursor: "pointer",
              padding: "6px 12px",
              borderRadius: 8,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.45)";
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
