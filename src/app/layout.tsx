import type { Metadata } from "next";

import { Ubuntu_Sans } from "next/font/google";

import { Layout } from "@/components";

import { GlobalStyles } from "@/styles";

const ubuntu = Ubuntu_Sans({
  subsets: ["latin"],
  variable: "--font-ubuntu",

  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Telamed, seu atendimento de saúde 24hs por dia 7 dias por semana!",
  viewport: "width=device-width, initial-scale=1",
  description:
    "Baixe o aplicativo telamed e tenha acesso aos melhores profissionais de saúde por um preço muito baixo!",
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
