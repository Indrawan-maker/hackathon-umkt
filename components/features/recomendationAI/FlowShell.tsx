"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import StepLevel from "@/components/features/recomendationAI/StepLevel";
import StepKeluhan from "@/components/features/recomendationAI/StepKeluhan";
import StepDurasi from "@/components/features/recomendationAI/StepDurasi";
import StepResult from "@/components/features/recomendationAI/StepResult";
import type { Result } from "@/types/flow";

export default function FlowShell() {
  const searchParams = useSearchParams();
  const areas = searchParams.get("areas")?.split(",") ?? [];
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [selectedDur, setSelectedDur] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/recomendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          areas,
          level: selectedLevel,
          keluhan,
          durasi: selectedDur,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.data);
        setStep(3);
      } else {
        setError(data.message || "Terjadi kesalahan");
      }
    } catch {
      setError("Gagal menghubungi server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl">

        <button
          onClick={() => router.push("/#pilihAreaTubuh")}
          className="mb-5 text-sm text-stone-500 hover:text-stone-800 transition"
        >
          ← Ganti area tubuh
        </button>

        {areas.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {areas.map((a) => (
              <span
                key={a}
                className="px-3 py-1 rounded-full bg-stone-200 text-stone-700 text-xs"
              >
                {a}
              </span>
            ))}
          </div>
        )}

        <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
          {step === 0 && (
            <StepLevel
              selected={selectedLevel}
              onSelect={setSelectedLevel}
              onNext={handleNext}
            />
          )}
          {step === 1 && (
            <StepKeluhan
              value={keluhan}
              onChange={setKeluhan}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 2 && (
            <StepDurasi
              selected={selectedDur}
              onSelect={setSelectedDur}
              onSubmit={handleSubmit}
              onBack={handleBack}
              loading={loading}
              error={error}
            />
          )}
          {step === 3 && result && (
            <StepResult result={result} />
          )}
        </div>

      </div>
    </div>
  );
}