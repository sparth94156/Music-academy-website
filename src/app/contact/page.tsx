"use client";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import test from "node:test";

const Page = () => {
  const [email,setEmail] = useState('')
  const [text,setText] = useState('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submitted")
  }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
        <div className="mt-50">
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
          </p>
        </div>
        <div className="flex items-center justify-center max-w-full mt-5">
          <form className="flex flex-col space-y-4 w-[500px]"
          onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-black text-white p-2 rounded-lg outline-none border text-sm border-neutral-800"
              required
            />
            <textarea
              value={text}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your message"
              className="bg-black text-white p-2 h-[100px] rounded-lg outline-none border text-sm border-neutral-800"
              required
            />
            <button type="submit" className="bg-green-500 max-w-36 p-2 text-sm rounded-lg hover:bg-green-600">
              Send message
            </button>
          </form>
        </div>
      <BackgroundBeams />
    </div>
  );
};

export default Page;
