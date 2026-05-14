import { motion } from 'framer-motion';
import { AlertTriangle, Home } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <AlertTriangle className="w-24 h-24 text-green-500" />
        </motion.div>
        
        <h1 className="text-6xl font-bold mb-4">404</h1>
        
        <p className="text-xl text-gray-300 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/')}
          className="px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-lg hover:bg-green-400 hover:drop-shadow-[0_0_20px_#00B476] transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <Home className="w-5 h-5" />
          Go Home
        </motion.button>
      </motion.div>
    </div>
  );
}

