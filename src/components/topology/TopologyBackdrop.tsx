export function TopologyBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 bg-topology" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-20 640 C 180 640, 220 220, 420 260 S 620 520, 820 360 S 1020 120, 1220 160"
          stroke="hsl(var(--field))"
          strokeWidth="1"
        />
        <path
          d="M-40 200 C 160 240, 260 480, 460 440 S 700 160, 900 220 S 1100 420, 1240 380"
          stroke="hsl(var(--field))"
          strokeWidth="1"
        />
        <path
          d="M100 100 C 280 140, 320 300, 480 280"
          stroke="hsl(var(--signal) / 0.25)"
          strokeWidth="1.25"
        />
        {[
          [420, 260],
          [820, 360],
          [460, 440],
          [900, 220],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill="hsl(var(--background))"
            stroke="hsl(var(--field))"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  )
}
