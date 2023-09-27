import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Red labs',
  description: 'red labs site',
}
const Layout = ({ children }) => {
  return (
    <html lang="es">
        <body className={inter.className}>
         {children}
        </body>
    </html>
    
  );
};

export default Layout;
