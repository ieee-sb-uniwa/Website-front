import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export const metadata = {
  title: "IEEE UniWA Student Branch",
  description: "Innovation and technology non-profit organization",
};

const RootLayout = async ({ children, params }) => {
  const { locale } = params;
  // Fetch messages for the current locale
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/assets/logos/sblogo.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/assets/logos/sblogo.png" type="image/x-icon" />
      </head>
      <body>    
        <NextIntlClientProvider messages={messages}>  
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
          </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;