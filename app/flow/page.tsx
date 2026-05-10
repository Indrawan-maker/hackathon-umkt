import { Suspense } from "react";
import FlowShell from "@/components/features/recomendationAI/FlowShell";

export default function FlowPage() {
  return (
    <Suspense>
      <FlowShell />
    </Suspense>
  );
}