import { Suspense } from "react";
import FlowShell from "@/features/recomendation/FlowShell";

export default function FlowPage() {
  return (
    <Suspense>
      <FlowShell />
    </Suspense>
  );
}