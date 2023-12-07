"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export const RegisterForm = () => {
  let [loading, setLoading] = useState(false);
  let [formValues, setFormValues] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      // Reemplazar el siguiente redirect con para loguear al usuario automaticamente una vez registrado
      signIn(undefined, { callbackUrl: "/" });
      //   const res = await signIn("credentials", {
      //     redirect: false,
      //     email: formValues.email,
      //     password: formValues.password,
      //     callbackUrl,
      //   });

      //   setLoading(false);

      //   console.log(res);
      //   if (!res?.error) {
      //     router.push(callbackUrl);
      //   } else {
      //     setError("invalid email or password");
      //   }
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        rowGap: 10,
      }}
    >
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <label htmlFor="firstname">Nombre</label>
      <input
        required
        type="text"
        name="firstname"
        value={formValues.firstname}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <label htmlFor="lastname">Apellido</label>
      <input
        required
        type="text"
        name="lastname"
        value={formValues.lastname}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <button
        style={{
          backgroundColor: `${loading ? "#ccc" : "#3446eb"}`,
          color: "#fff",
          padding: "1rem",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? "loading..." : "Register"}
      </button>
    </form>
  );
};
