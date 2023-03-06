import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/navigation/Nav";
import Hero from "@/components/main/Hero";
import MobileNav from "@/components/navigation/MobileNav";
import Expirience from "@/components/main/Expirience";
import RequestForm from "@/components/main/RequestForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="wrapper">
      <Nav />
      <MobileNav />
      <Hero />
      <Expirience />
      <RequestForm />
    </div>
  );
}
