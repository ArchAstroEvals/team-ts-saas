import "./globals.css";
import SiteNav from "../components/SiteNav.jsx";
import SiteFooter from "../components/SiteFooter.jsx";

export const metadata = {
  title: "Acme SaaS",
  description: "Team SaaS starter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <SiteNav />
        </header>
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
