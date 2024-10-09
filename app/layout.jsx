import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";

export const metadata = {
  title: "IEEE UniWA Student Branch",
  description: "Innovation and technology non-profit organization",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      <link rel="icon" href="/assets/logos/sblogo.png" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/assets/logos/sblogo.png" />
    </head>
    <body>

      {/*
        <div className='main'>
          <div className='gradient' />
        </div>
      */}
        <main className='overflow-hidden'>
          <Nav/>
          {children}
        </main>
        <div>
          <Footer/>
        </div>
    </body>
  </html>
);

export default RootLayout;