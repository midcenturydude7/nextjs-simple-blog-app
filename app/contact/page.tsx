"use client";
import React from "react";

const Contact = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("Hey!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
