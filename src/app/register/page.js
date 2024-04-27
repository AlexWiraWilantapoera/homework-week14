"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/fetching/users";
import Link from "next/link";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    await createUser({
      name,
      email,
      password,
    });
    router.push("/login");
  }

  return (
    <>
      <div>
        <h1 style={{ display: "block", margin: "5px" }}>Register</h1>
      </div>
      <div>
        <input
          style={{ display: "block", margin: "5px", paddingRight: "10px" }}
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ display: "block", margin: "5px", paddingRight: "10px" }}
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ display: "block", margin: "5px", paddingRight: "10px" }}
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>REGISTER</button>{" "}
        <Link href={"/login"}>
          <button>CANCEL</button>
        </Link>
      </div>
    </>
  );
}
