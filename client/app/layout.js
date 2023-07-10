import TrackingProvider from "../Context/TrackingProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TrackingProvider>
        <body className={inter.className}>{children}</body>
      </TrackingProvider>
    </html>
  );
}
