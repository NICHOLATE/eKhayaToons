"use client";

import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import LandingPage from "../components/LandingPage";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <SplashScreen /> : <LandingPage />}
    </>
  );
}