"use client";

import { useState } from "react";
import {
  revalidateProductPages,
  revalidateCollectionPages,
  revalidateCategoryPages,
  revalidateAllContent,
} from "@/lib/revalidate";

interface RevalidateStatus {
  type: string;
  loading: boolean;
  message: string;
  success: boolean | null;
}

export default function RevalidatePage() {
  const [status, setStatus] = useState<Record<string, RevalidateStatus>>({
    products: { type: "products", loading: false, message: "", success: null },
    collections: {
      type: "collections",
      loading: false,
      message: "",
      success: null,
    },
    categories: {
      type: "categories",
      loading: false,
      message: "",
      success: null,
    },
    all: { type: "all", loading: false, message: "", success: null },
  });

  const handleRevalidate = async (
    type: "products" | "collections" | "categories" | "all",
  ) => {
    setStatus((prev) => ({
      ...prev,
      [type]: { ...prev[type], loading: true, message: "Revalidating..." },
    }));

    try {
      let result;

      switch (type) {
        case "products":
          result = await revalidateProductPages();
          break;
        case "collections":
          result = await revalidateCollectionPages();
          break;
        case "categories":
          result = await revalidateCategoryPages();
          break;
        case "all":
          result = await revalidateAllContent();
          break;
      }

      setStatus((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          loading: false,
          message: result.message,
          success: result.success,
        },
      }));

      console.log("Revalidation result:", result);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setStatus((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          loading: false,
          message: `Error: ${errorMessage}`,
          success: false,
        },
      }));
      console.error("Revalidation error:", error);
    }
  };

  const revalidationItems = [
    {
      id: "products",
      title: "Products",
      description: "Revalidate all product pages and listings",
      icon: "📦",
    },
    {
      id: "collections",
      title: "Collections",
      description: "Revalidate all collection pages",
      icon: "🎨",
    },
    {
      id: "categories",
      title: "Categories",
      description: "Revalidate all category pages",
      icon: "📂",
    },
    {
      id: "all",
      title: "All Content",
      description: "Revalidate everything at once",
      icon: "🔄",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-[#2d2d2d] bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-playfair text-[#d4af37] mb-2">
            Content Revalidation
          </h1>
          <p className="text-[#b0b0b0]">
            Manually trigger cache revalidation for your content without
            deploying
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Info Box */}
        <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#fafafa] mb-3">
            How It Works
          </h2>
          <ul className="space-y-2 text-sm text-[#b0b0b0]">
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] mt-0.5">→</span>
              <span>
                <strong>Manual Revalidation:</strong> Click any button below to
                immediately refresh content cache
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] mt-0.5">→</span>
              <span>
                <strong>Automatic Webhooks:</strong> Set up Sanity webhooks to
                trigger revalidation automatically when content changes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] mt-0.5">→</span>
              <span>
                <strong>Zero Downtime:</strong> Content updates are applied
                instantly without redeploying your application
              </span>
            </li>
          </ul>
        </div>

        {/* Revalidation Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {revalidationItems.map((item) => {
            const itemStatus = status[item.id];
            const isLoading = itemStatus.loading;
            const isSuccess = itemStatus.success === true;
            const isError = itemStatus.success === false;

            return (
              <div
                key={item.id}
                className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-sm p-6 hover:border-[#d4af37] smooth-transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#fafafa] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#b0b0b0]">{item.description}</p>
                  </div>
                </div>

                {/* Status Message */}
                {itemStatus.message && (
                  <div
                    className={`text-sm p-3 rounded-sm mb-4 ${
                      isSuccess
                        ? "bg-green-900/20 text-green-300 border border-green-900/50"
                        : isError
                          ? "bg-red-900/20 text-red-300 border border-red-900/50"
                          : "bg-blue-900/20 text-blue-300 border border-blue-900/50"
                    }`}
                  >
                    {itemStatus.message}
                  </div>
                )}

                {/* Button */}
                <button
                  onClick={() => handleRevalidate(item.id as any)}
                  disabled={isLoading}
                  className={`w-full py-2 px-4 rounded-sm font-semibold transition-all ${
                    isLoading
                      ? "bg-[#3a3a3a] text-[#b0b0b0] cursor-not-allowed"
                      : "bg-[#d4af37] text-[#0a0a0a] hover:bg-[#e8d4a0]"
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⚙</span>
                      Revalidating...
                    </span>
                  ) : (
                    "Revalidate Now"
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Setup Instructions */}
        <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-sm p-6">
          <h2 className="text-lg font-semibold text-[#fafafa] mb-4">
            Setup Automatic Webhooks
          </h2>
          <div className="space-y-4 text-sm text-[#b0b0b0]">
            <p>
              To automatically revalidate content when you publish changes in
              Sanity Studio:
            </p>
            <ol className="space-y-3 ml-4 list-decimal">
              <li>Go to your Sanity project dashboard</li>
              <li>Navigate to Settings → API → Webhooks</li>
              <li>Click "Create Webhook"</li>
              <li>
                Set the URL to:{" "}
                <code className="bg-[#0a0a0a] px-2 py-1 rounded text-[#d4af37]">
                  {typeof window !== "undefined"
                    ? `${window.location.origin}/api/revalidate`
                    : "YOUR_DOMAIN/api/revalidate"}
                </code>
              </li>
              <li>
                Add header:{" "}
                <code className="bg-[#0a0a0a] px-2 py-1 rounded text-[#d4af37]">
                  X-Sanity-Webhook-Secret: YOUR_SECRET
                </code>
              </li>
              <li>Select events: Publish, Create, Update, Delete</li>
              <li>Click Create</li>
            </ol>
            <p className="mt-4 text-[#b0b0b0]">
              Set your webhook secret in the environment variable:{" "}
              <code className="bg-[#0a0a0a] px-2 py-1 rounded text-[#d4af37]">
                SANITY_WEBHOOK_SECRET
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
