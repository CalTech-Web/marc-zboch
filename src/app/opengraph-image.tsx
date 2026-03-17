import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Marc Zboch Academic Scholarship";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #2a5a8f 50%, #1a4a7a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Marc Zboch
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#c8a951",
              textAlign: "center",
            }}
          >
            Academic Scholarship
          </div>
          <div
            style={{
              marginTop: "24px",
              fontSize: "28px",
              color: "rgba(255,255,255,0.8)",
              textAlign: "center",
            }}
          >
            $1,000 Award for U.S. College Students
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
