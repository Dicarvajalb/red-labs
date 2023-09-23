import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Red labs',
  description: 'red labs site',
}

import TransitionComponent from '../../transition/TransitionComponent';
import { TransitionProvider } from '../../context/TransitionProvider';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <html lang="es">
      <TransitionProvider>
        <body className={inter.className}>
          <Link href={"/galery"}>gelery</Link>
          <Link href={"/"}>home</Link>
          <TransitionComponent>{children}</TransitionComponent>
        </body>
      </TransitionProvider>
    </html>
    
  );
};

export default Layout;
