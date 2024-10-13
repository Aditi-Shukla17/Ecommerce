"use client"
import "./globals.css";
import Footer from "@/Component/Shared/Footer/Footer";
// import Navbar from "@/Component/Shared/Header/Navbar";
import Testimonial from "@/Component/Shared/Testimonial/Testimonial";
import Cta from "@/Component/Shared/CTA/Cta";
import FAQ from "@/Component/Shared/FAQ/Faq";
import ClientProvider from "@/Redux/ClientProvider";
import Nav from "@/Component/Shared/Header/Nav";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define the routes where you don't want to show the navbar and footer
  const noLayoutRoutes = ["/login","/signup","/reset-password", "forgot-password"]; 

  // Conditionally show/hide Nav and Footer based on route
  const shouldRenderLayout = !noLayoutRoutes.includes(pathname);
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {/* <Navbar /> */}
          {shouldRenderLayout && <Nav />} 
          {children}
          {shouldRenderLayout && <>
            <Testimonial />
          <FAQ />
          <Cta />
          <Footer />
          </>} 
          
        </ClientProvider>
      </body>
    </html>
  );
}
