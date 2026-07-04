import "@styles/globals.css";

import Nav from "@components/layout/Nav";
import Footer from "@components/layout/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { routing } from "@i18n/routing";
import { Roboto, Poppins } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin', 'greek'], 
  variable: '--font-roboto',
  style: ['normal', 'italic'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata = {
  title: "IEEE UniWA Student Branch",
  description: "Innovation and technology non-profit organization",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
      notFound();
  }
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${roboto.variable} ${poppins.variable} scroll-smooth`}>
      <body>    
        <NextIntlClientProvider messages={messages}>  
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
}