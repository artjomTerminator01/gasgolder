import classNames from 'classnames';
import { Red_Hat_Display } from 'next/font/google';
import '../styles/_globals.scss';

import classes from '../styles/pages/_home.module.scss';
import { LocaleContextProvider } from '../components/index';
import Head from 'next/head';
const { appWrapper } = classes;
const inter = Red_Hat_Display({ subsets: ['latin'] });

export const metadata = {
  title: 'GasGolder',
  description:
    'Gasgolder: Parimad gaasikatlad Eestis. Pakume kvaliteetseid ja energiatõhusaid gaasikatlaid, mis tagavad teie kodus mugavuse ja soojuse. Avasta meie laia valikut ja leia endale sobiv lahendus!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Gasgolder - Parimad gaasikatlad Eestis</title>
        <meta
          name="description"
          content="Gasgolder: Parimad gaasikatlad Eestis. Pakume kvaliteetseid ja energiatõhusaid gaasikatlaid, mis tagavad teie kodus mugavuse ja soojuse. Avasta meie laia valikut ja leia endale sobiv lahendus!"
        />
      </Head>
      <body className={classNames(appWrapper, inter.className)}>
        <link rel="icon" href="/gas.png" sizes="any" />
        <LocaleContextProvider>{children}</LocaleContextProvider>
      </body>
    </html>
  );
}
