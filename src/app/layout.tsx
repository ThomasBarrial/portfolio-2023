import "./globals.css";

export const metadata = {
  title: "ThomasBarrial",
  description: "Thomas Barrial | CREATIVE DEVELOPER & DESIGNER",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-white">{children}</body>
    </html>
  );
}
