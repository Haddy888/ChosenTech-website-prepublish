import "./globals.css";

export const metadata = {
  title: "Chosen Technology | Proactive IT Solutions",
  description: "Managed IT, network engineering, cybersecurity, cloud and project technology services.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}