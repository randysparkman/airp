import { Suspense } from "react";
import AssessmentPage from "@/components/AssessmentPage";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <AssessmentPage />
    </Suspense>
  );
}
