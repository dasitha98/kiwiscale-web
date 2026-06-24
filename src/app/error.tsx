"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <button
          onClick={reset}
          className="mt-4 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground hover:bg-gold/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
