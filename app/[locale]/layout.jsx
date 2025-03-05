import "@styles/globals.css";

import Nav from "@components/layout/Nav";
import Footer from "@components/layout/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { routing } from "@i18n/routing";

export const metadata = {
  title: "IEEE UniWA Student Branch",
  description: "Innovation and technology non-profit organization",
};

const RootLayout = async ({ children, params }) => {
  const { locale } = params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
      notFound();
  }
  // Fetch messages for the current locale
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
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