import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/transitionProvider";

// Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryan Singh | Software Engineer III @ Google Cloud",
  description:
    "Software Engineer III on Google Cloud Platform's Cloud VPN team, building reliable and scalable cloud networking systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J5G7PEH2Z3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J5G7PEH2Z3');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
