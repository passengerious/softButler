import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden bg-black"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
}

export default Layout;