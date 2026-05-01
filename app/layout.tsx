import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Mundo dos Bichos | Banho e Tosa em Mandaguaçu",
    description: "Banho e tosa em Mandaguaçu com cuidado, carinho, busca e entrega do seu pet.",
    keywords: [
        "Mundo dos Bichos",
        "Mandaguaçu",
        "banho e tosa",
        "pet shop",
        "busca e entrega",
        "Vila Bernardino"
    ],
    openGraph: {
        title: "Mundo dos Bichos | Banho e Tosa em Mandaguaçu",
        description: "Banho e tosa em Mandaguaçu com cuidado, carinho, busca e entrega do seu pet.",
        locale: "pt_BR",
        siteName: "Mundo dos Bichos",
        type: "website"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
