import type { Metadata } from "next";

import { Ubuntu_Sans } from "next/font/google";

import { Layout } from "@/components";

import { GlobalStyles } from "@/styles";

const ubuntu = Ubuntu_Sans({
  subsets: ["latin"],
  variable: "--font-ubuntu",

  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// export const metadata: Metadata = {
//   title: "Telamed, seu atendimento de saúde 24hs por dia 7 dias por semana!",
//   viewport: "width=device-width, initial-scale=1",
//   description:
//     "Baixe o aplicativo telamed e tenha acesso aos melhores profissionais de saúde por um preço muito baixo!",
// };

export const metadata: Metadata = {
  title: "Telamed | Atendimento de saúde 24h",
  description:
    "Baixe o aplicativo Telamed e tenha acesso aos melhores profissionais de saúde por um preço muito baixo!",

  viewport: "width=device-width, initial-scale=1",

  openGraph: {
    title: "Telamed | Atendimento de saúde 24h",
    description:
      "Atendimento médico e psicológico 24 horas por dia, 7 dias por semana. Baixe o app Telamed.",
    url: "https://telamed.com.br", // 👈 CONFIRMA esse domínio
    siteName: "Telamed",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo-footer.png",
        width: 168,
        height: 68,
        alt: "Telamed - Atendimento de saúde 24h",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Telamed | Atendimento de saúde 24h",
    description:
      "Tenha acesso a profissionais de saúde 24h por dia com a Telamed.",
    images: ["/images/logo-footer.png"],
  },

  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${ubuntu.variable}`}>
        <GlobalStyles />

        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
