"use client";

import { useMemo } from "react";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";
import { NextStudio } from "next-sanity/studio";

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "qpz2y6on";
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  // Create config only once when component mounts
  const config = useMemo(() => {
    if (!projectId) {
      return null;
    }

    return defineConfig({
      name: "luxury-womenswear",
      title: "Luxury Womenswear Fashion",
      projectId,
      dataset,
      plugins: [structureTool(), visionTool()],
      schema: {
        types: schemaTypes,
      },
    });
  }, [projectId, dataset]);

  if (!projectId) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-playfair text-foreground mb-4">
            Sanity Studio
          </h1>
          <p className="text-foreground mb-6">
            Project credentials not configured. Please add your environment
            variables to use Sanity Studio.
          </p>
          <a
            href="/setup"
            className="inline-block bg-primary text-[#0a0a0a] px-8 py-3 rounded-sm font-semibold hover:bg-[#e8d4a0] transition-colors"
          >
            Configure Now
          </a>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Initializing Sanity Studio...</p>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
