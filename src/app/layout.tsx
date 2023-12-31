import classNames from 'classnames';
import { Red_Hat_Display } from 'next/font/google';
import '../styles/_globals.scss';

import classes from '../styles/pages/_home.module.scss';
import { LocaleContextProvider } from '../components/index';
const { appWrapper } = classes;
const inter = Red_Hat_Display({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={classNames(appWrapper, inter.className)}>
        <LocaleContextProvider>{children}</LocaleContextProvider>
      </body>
    </html>
  );
}
