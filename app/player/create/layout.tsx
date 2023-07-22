import "@/styles/globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Fifa 2023",
  description: "Discover players from Fifa 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav title={"Ajouter un joueur"} main={false} />
          {children}
        </main>
      </body>
    </html>
  );
}
