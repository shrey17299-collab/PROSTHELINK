export const metadata = {
  title: "Prosthesis App",
  description: "Prosthesis app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", margin: 0, padding: 20 }}>
        {children}
      </body>
    </html>
  );
}
