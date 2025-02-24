import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ReactNode } from "react";
import { ToastProvider } from "@radix-ui/react-toast";
import { Toast } from "./ui/toast";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <section className="min-h-screen flex flex-col">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </section>
      <Toast />
    </ToastProvider>
  );
}
