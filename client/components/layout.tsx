import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

export default function Layout(
  { children }: { children: ReactNode | ReactNode[]},
) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
