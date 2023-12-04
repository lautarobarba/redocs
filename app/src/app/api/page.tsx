import { ROUTES } from "@/lib/routes";
import Link from "next/link";

const ApiPage = () => {
  // Busco el año actual
  const year: string = new Date().getFullYear().toString();

  return (
    <>
      <main>
        <h1
          style={{
            textAlign: "center",
            position: "absolute",
            top: "20px",
            width: "99%",
          }}
        >
          API - REDOCS
        </h1>
        <p
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: "20px",
            width: "99%",
          }}
        >
          Documentación disponible en{" "}
          <Link href={ROUTES.API} style={{ color: "blue" }}>
            /api/docs
          </Link>
          .
        </p>
        <p
          style={{
            position: "absolute",
            bottom: "0px",
            textAlign: "center",
            width: "99%",
          }}
        >
          {year} - REDOCS
        </p>
      </main>
    </>
  );
};

export default ApiPage;
