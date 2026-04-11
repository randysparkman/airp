"use client";

import { useParams } from "next/navigation";
import AssessmentPage from "@/components/AssessmentPage";

export default function SlugPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  return <AssessmentPage slug={slug} />;
}
