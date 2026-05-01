import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "-0.5px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        ND
      </div>
    ),
    { ...size }
  );
}
