import React from "react";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";

//components
import Nav from "@/components/Nav";
import { Hero } from "./Hero";
import { Sec1 } from "./Sec1";
import { Sec2 } from "./Sec2";
import { Sec3 } from "./Sec3";
import { Sec4 } from "./Sec4";
import { Sec6 } from "./Sec6";
import Footer from "@/components/Footer";
import { Sec5 } from "./Sec5";

//fonts
export const inter = Inter({ subsets: ["latin"] });
export const playfair = Playfair_Display({ subsets: ["latin"] });

function Home() {
  return (
    <div>
      <Nav />
      {/* Hero Section */}
      <Hero />
      {/* What Are Truts Ecosystem offerings? */}
      <Sec1 />
      {/* How to Access Truts Offerings */}
      <Sec2 />
      {/* Ecosystem Offerings */}
      <Sec3 />
      {/* Benefits for Businesses */}
      <Sec4 />
      {/* Ecosystem Partners */}
      <Sec5 />
      {/* Faq */}
      <Sec6 />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
