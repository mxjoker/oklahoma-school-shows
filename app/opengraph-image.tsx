import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Funky Monkey Magic | Oklahoma School Assembly Shows";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A0A2E 0%, #5B2D8E 50%, #7B3FBE 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(224, 33, 138, 0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 215, 0, 0.1)",
          }}
        />

        {/* Emoji */}
        <div style={{ fontSize: "80px", marginBottom: "20px", display: "flex" }}>🎩✨</div>

        {/* Brand name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "800",
            color: "#FFD700",
            letterSpacing: "-1px",
            marginBottom: "12px",
            display: "flex",
          }}
        >
          Funky Monkey Magic
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          School Assembly Shows for Elementary Students
        </div>

        {/* State chips */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["🌾 Oklahoma", "⭐ Texas", "🦅 Arkansas", "🌻 Kansas", "🎡 Missouri"].map((state) => (
            <div
              key={state}
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "999px",
                padding: "8px 18px",
                fontSize: "18px",
                color: "white",
                display: "flex",
              }}
            >
              {state}
            </div>
          ))}
        </div>

        {/* URL strip */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            fontSize: "20px",
            color: "rgba(255,255,255,0.45)",
            display: "flex",
          }}
        >
          oklahomaschoolshows.com
        </div>
      </div>
    ),
    { ...size }
  );
}
