import "./globals.css";

export const metadata = {
  title: "Amari's Portfolio",
  description: "Virtual Assistant & BSIT Student Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 
          bg-[#FFF5F7] is a very light "Bubblegum Mist" pink.
          text-black ensures your text is crisp and readable.
      */}
      <body className="bg-[#FFF5F7] text-black antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}