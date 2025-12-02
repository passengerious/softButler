import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { AlertTriangle, Home } from 'lucide-react';

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
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
        
        <h1 className="text-6xl font-bold mb-4">
          {statusCode || 'Error'}
        </h1>
        
        <p className="text-xl text-gray-300 mb-8">
          {statusCode === 404
            ? "The page you're looking for doesn't exist."
            : statusCode === 500
            ? "Something went wrong on our end."
            : "An unexpected error occurred."}
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

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

