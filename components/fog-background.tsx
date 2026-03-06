export function FogBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Primary mint orb */}
      <div
        className="fog-orb"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          left: "-5%",
          background: "radial-gradient(circle, var(--fog-primary), transparent 70%)",
          animation: "fog-drift-1 25s ease-in-out infinite",
        }}
      />
      {/* Secondary yellow orb */}
      <div
        className="fog-orb"
        style={{
          width: 500,
          height: 500,
          top: "40%",
          right: "-10%",
          background: "radial-gradient(circle, var(--fog-secondary), transparent 70%)",
          animation: "fog-drift-2 30s ease-in-out infinite",
        }}
      />
      {/* Primary mint orb (dimmer) */}
      <div
        className="fog-orb"
        style={{
          width: 450,
          height: 450,
          bottom: "-5%",
          left: "30%",
          background: "radial-gradient(circle, var(--fog-tertiary), transparent 70%)",
          animation: "fog-drift-3 35s ease-in-out infinite",
        }}
      />
    </div>
  );
}
