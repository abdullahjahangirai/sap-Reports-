import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { USE_CASES } from "../../data";
import { useIntersection } from "../../hooks/useIntersection";
import { AnimatedSection } from "../ui/AnimatedSection";

export function UseCases() {
  const [activeDept, setActiveDept] = useState(null);
  const sectionRef = useRef(null);
  const visible = useIntersection(sectionRef);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "100px 24px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span
          style={{
            color: "#a78bfa",
            fontSize: 12,
            letterSpacing: "0.15em",
            fontWeight: 600,
          }}
        >
          AUTOMATION OPPORTUNITY MAP
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
          104 Automatable SAP Processes
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            marginTop: 12,
            fontSize: "0.95rem",
          }}
        >
          Click any department card to expand its full use-case list.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))",
          gap: 16,
          marginBottom: 32,
        }}
      >
        {USE_CASES.map(({ dept, icon: Icon, color, count, items }, i) => {
          const isActive = activeDept === dept;

          return (
            <div
              key={dept}
              role="button"
              tabIndex={0}
              onClick={() => setActiveDept(isActive ? null : dept)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveDept(isActive ? null : dept);
                }
              }}
              style={{
                padding: 24,
                borderRadius: 18,
                cursor: "pointer",
                background: isActive ? `${color}12` : "rgba(255,255,255,0.03)",
                border: `1px solid ${isActive ? `${color}50` : "rgba(255,255,255,0.07)"}`,
                transition: "all 0.3s ease",
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0) scale(1)"
                  : "translateY(30px) scale(0.97)",
                transitionDelay: `${i * 60}ms`,
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
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} color={color} />
                </div>
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 100,
                    background: `${color}20`,
                    color,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {count}
                </div>
              </div>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                {dept}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>
                use cases
              </p>

              {isActive && (
                <ul
                  style={{
                    marginTop: 16,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {items.map((item) => (
                    <li
                      key={item}
                      style={{ display: "flex", gap: 8, alignItems: "flex-start" }}
                    >
                      <ChevronRight
                        size={12}
                        color={color}
                        style={{ marginTop: 3, flexShrink: 0 }}
                      />
                      <span
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "0.78rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <AnimatedSection delay={600}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            padding: "20px 32px",
            borderRadius: 16,
            background: "rgba(167,139,250,0.06)",
            border: "1px solid rgba(167,139,250,0.15)",
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              color: "#a78bfa",
              lineHeight: 1,
            }}
          >
            104
          </div>
          <div>
            <div
              style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}
            >
              Total use cases mapped across 9 SAP functional areas
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.82rem",
                marginTop: 4,
              }}
            >
              Prioritized in Discovery phase using an effort/impact matrix — not
              all are built in Phase 1
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
