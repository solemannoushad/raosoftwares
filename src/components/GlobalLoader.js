"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "./Loading";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    // Simulate a short delay for the loader (optional, for UX)
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? <Loading /> : null;
} 