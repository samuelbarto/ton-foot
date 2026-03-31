import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "radial-gradient(circle at top left, rgba(103, 181, 255, 0.4), transparent 34%), radial-gradient(circle at bottom right, rgba(143, 209, 255, 0.36), transparent 30%), linear-gradient(180deg, #eff8ff 0%, #f9fdff 100%)",
          color: "#12344f",
          fontFamily: "Segoe UI, Arial, sans-serif",
          padding: "52px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "34px",
            border: "1px solid #d4e5f7",
            background: "linear-gradient(180deg, #ffffff 0%, #f5fbff 100%)",
            boxShadow: "0 24px 60px rgba(17, 76, 129, 0.10)",
            padding: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
              <div
                style={{
                  width: "104px",
                  height: "104px",
                  borderRadius: "24px",
                  background: "#1E88E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "70px",
                    height: "70px",
                    borderRadius: "16px",
                    border: "4px solid white",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "4px",
                    height: "70px",
                    background: "white",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "18px",
                    height: "18px",
                    borderRadius: "999px",
                    border: "4px solid white",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "62px",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    display: "flex",
                  }}
                >
                  TON FOOT
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    color: "#356485",
                    display: "flex",
                  }}
                >
                  Coaching football enfants a Paris et proche banlieue
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: "999px",
                border: "1px solid #d4e5f7",
                background: "#eff7ff",
                color: "#4f708e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 20px",
                fontSize: "20px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Beta
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "920px",
            }}
          >
            <div
              style={{
                fontSize: "78px",
                fontWeight: 900,
                lineHeight: 1.03,
                letterSpacing: "-0.04em",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              Le terrain du plaisir, de la liberte et de la progression.
            </div>

            <div
              style={{
                fontSize: "29px",
                lineHeight: 1.4,
                color: "#4f708e",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              Une plateforme pensee pour les parents et les enfants : progresser sans pression, avec du
              plaisir et un cadre rassurant.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "14px" }}>
              {["6-13 ans", "Paris + proche banlieue", "Waitlist ouverte"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    padding: "12px 18px",
                    borderRadius: "999px",
                    border: "1px solid #d4e5f7",
                    background: "#dff0ff",
                    color: "#1e5a89",
                    fontSize: "21px",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "20px",
                color: "#4f708e",
              }}
            >
              ton-foot.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
