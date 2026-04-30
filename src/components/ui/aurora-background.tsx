"use client";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  children,
  showRadialGradient = true,
  style,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#f8faff",
        overflow: "hidden",
        ...style,
      }}
      {...props}
    >
      {/* Aurora layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-10px",
            backgroundImage: [
              "repeating-linear-gradient(100deg,#fff 0%,#fff 7%,transparent 10%,transparent 12%,#fff 16%)",
              "repeating-linear-gradient(100deg,#3b82f6 10%,#a5b4fc 15%,#93c5fd 20%,#ddd6fe 25%,#60a5fa 30%)",
            ].join(","),
            backgroundSize: "300% 200%",
            backgroundPosition: "50% 50%, 50% 50%",
            filter: "blur(10px)",
            animation: "aurora 60s linear infinite",
            opacity: 0.55,
            willChange: "transform",
            maskImage: showRadialGradient
              ? "radial-gradient(ellipse at 80% 0%, black 10%, transparent 70%)"
              : "none",
            WebkitMaskImage: showRadialGradient
              ? "radial-gradient(ellipse at 80% 0%, black 10%, transparent 70%)"
              : "none",
          }}
        />
        {/* After-layer for depth */}
        <div
          style={{
            position: "absolute",
            inset: "-10px",
            backgroundImage: [
              "repeating-linear-gradient(100deg,#fff 0%,#fff 7%,transparent 10%,transparent 12%,#fff 16%)",
              "repeating-linear-gradient(100deg,#6366f1 10%,#818cf8 15%,#93c5fd 20%,#c4b5fd 25%,#60a5fa 30%)",
            ].join(","),
            backgroundSize: "200% 100%",
            backgroundPosition: "50% 50%, 50% 50%",
            animation: "aurora 60s linear infinite",
            animationDelay: "-15s",
            mixBlendMode: "difference",
            opacity: 0.25,
          }}
        />
      </div>

      {/* Page content */}
      <div style={{ position: "relative", zIndex: 1, flex: 1 }}>
        {children}
      </div>
    </div>
  );
};
