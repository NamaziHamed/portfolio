import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#12141c",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(150,130,255,0.35), transparent 55%), radial-gradient(circle at 90% 20%, rgba(80,220,200,0.18), transparent 50%)",
          color: "#f3f4f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #a99bff, #5fe0c8)",
              color: "#15132a",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            HN
          </div>
          <div style={{ fontSize: 26, color: "#a7abbd" }}>hnamazi.vercel.app</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 40, color: "#a99bff", marginTop: 8 }}>{profile.role}</div>
          <div style={{ fontSize: 28, color: "#a7abbd", marginTop: 28 }}>
            Web apps · Desktop tools · Privacy-preserving cryptography
          </div>
        </div>
      </div>
    ),
    size,
  );
}
