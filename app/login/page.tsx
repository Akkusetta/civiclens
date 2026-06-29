"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 flex">

      {/* Left Side */}
      <section className="hidden lg:flex w-1/2 bg-gradient-to-br from-green-600 to-emerald-700 text-white p-16 flex-col justify-between">

        <div>
          <h1 className="text-5xl font-black">
            CivicLens
          </h1>

          <p className="mt-6 text-xl text-green-100 leading-relaxed">
            Building the public intelligence layer for every city.
          </p>
        </div>

        <div className="space-y-8">

          <div className="flex gap-4">
            <div className="text-3xl">📍</div>

            <div>
              <h3 className="font-bold text-xl">
                Community Reports
              </h3>

              <p className="text-green-100">
                Report issues around you in seconds.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-3xl">🤖</div>

            <div>
              <h3 className="font-bold text-xl">
                AI Insights
              </h3>

              <p className="text-green-100">
                Discover trends and community intelligence.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-3xl">🌍</div>

            <div>
              <h3 className="font-bold text-xl">
                Interactive Maps
              </h3>

              <p className="text-green-100">
                {"Explore what's happening around your city."}
              </p>
            </div>
          </div>

        </div>

        <p className="text-green-100">
          © 2026 CivicLens
        </p>

      </section>

      {/* Right Side */}

      <section className="flex-1 flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          <Link
            href="/"
            className="text-green-700 font-medium hover:underline"
          >
            ← Back to Home
          </Link>

          <h2 className="text-4xl font-black text-slate-900 mt-8">
            Welcome Back
          </h2>

          <p className="text-slate-500 mt-2">
            Sign in to continue helping your community.
          </p>

          <form className="mt-10 space-y-6">

            <div>

              <label className="block mb-2 font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div>

              <label className="block mb-2 font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Sign In
            </button>

          </form>

          <div className="mt-6 flex items-center">
            <div className="flex-grow h-px bg-slate-300" />
            <span className="mx-4 text-slate-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-slate-300" />
          </div>

          <button
            className="mt-6 w-full border border-slate-300 rounded-xl py-3 hover:bg-slate-100 transition"
          >
            Continue with Google
          </button>

          <p className="text-center mt-8 text-slate-600">
            {"Don't have an account?"}
            <Link
              href="/signup"
              className="text-green-600 font-semibold hover:underline"
            >
              Create one
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}