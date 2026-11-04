import "./globals.css";
import EnquiryPopup from "../components/home/EnquiryPopup";

export const metadata = {
  title: "Little Star Public School | Nursery to Class X",
  description:
    "Little Star Public School provides a nurturing learning environment from Nursery to Class X.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <EnquiryPopup />
      </body>
    </html>
  );
}