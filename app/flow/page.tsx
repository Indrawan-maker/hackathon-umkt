import { Suspense } from "react";
import FlowShell from "@/components/atoms/Flows/FlowShell";

export default function FlowPage() {
  return (
    <Suspense>
      <FlowShell />
    </Suspense>
  );
}