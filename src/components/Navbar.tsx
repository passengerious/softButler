import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    document.body.style.overflow = '';
  }, [isOpen]);

  const industries = [
    { name: 'FinTech', path: '/industries/fintech' },
    { name: 'SaaS', path: '/industries/saas' },
    { name: 'EdTech', path: '/industries/edtech' },
    { name: 'Logistics', path: '/industries/logistics' },
    { name: 'E-commerce', path: '/industries/ecommerce' },
    { name: 'Retail', path: '/industries/retail' },
  ];

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/who-we-are', label: 'Who We Are' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => router.pathname === path;

  const handleNavigation = (path: string) => {
    router.push(path).catch((error) => {
      console.error('Navigation error:', error);
    });
    setIsOpen(false);
  };

  const isHome = router.pathname === '/';

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-20 left-0 right-0 bottom-0 bg-black/70 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHome
          ? scrolled
            ? 'bg-black/60 backdrop-blur-sm border-b border-green-500/20'
            : 'bg-transparent'
          : scrolled
            ? 'bg-black/60 backdrop-blur-sm border-b border-green-500/20'
            : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="text-green-500 group-hover:drop-shadow-[0_0_10px_#00B476] transition-all duration-300">
              <Logo size="md" animated={false} />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-green-500 transition-colors">
              SoftButler
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => handleNavigation('/')}
              className={`relative py-2 transition-all duration-300 ${
                router.pathname === '/'
                  ? 'text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              Home
              {router.pathname === '/' && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 shadow-[0_0_10px_#00B476]"
                />
              )}
            </button>
            <button
              onClick={() => handleNavigation('/services')}
              className={`relative py-2 transition-all duration-300 ${
                router.pathname === '/services'
                  ? 'text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              Services
              {router.pathname === '/services' && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 shadow-[0_0_10px_#00B476]"
                />
              )}
            </button>
            {/* Industries Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 transition-colors ${
                  router.pathname.startsWith('/industries/')
                    ? 'text-green-500'
                    : 'text-white hover:text-green-500'
                }`}
              >
                <span>Industries</span>
                <ChevronDown size={16} className={`transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                  <div className="bg-gray-900/95 backdrop-blur-md border border-green-500/30 rounded-lg shadow-xl p-4">
                    <div className="grid grid-cols-3 gap-3 w-max">
                      {industries.map((industry) => (
                        <button
                          key={industry.path}
                          onClick={() => handleNavigation(industry.path)}
                          className={`px-5 py-3 rounded-lg text-center whitespace-nowrap transition-all ${
                            isActive(industry.path)
                              ? 'text-green-500 bg-green-500/10 border border-green-500/30'
                              : 'text-white hover:text-green-500 hover:bg-green-500/5 border border-transparent'
                          }`}
                        >
                          {industry.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {navItems.filter(item => item.path !== '/' && item.path !== '/services').map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`relative py-2 transition-all duration-300 ${
                  router.pathname === item.path
                    ? 'text-green-500'
                    : 'text-white hover:text-green-500'
                }`}
              >
                {item.label}
                {router.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 shadow-[0_0_10px_#00B476]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-green-500 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-green-500/20 fixed left-0 right-0 top-16 z-50 overflow-hidden origin-top"
          >
            <div className="py-4">
              <button
                onClick={() => handleNavigation('/')}
                className={`block w-full text-left py-3 px-6 transition-all duration-300 ${
                  router.pathname === '/'
                    ? 'text-green-500 bg-green-500/10'
                    : 'text-white hover:text-green-500 hover:bg-green-500/5'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/services')}
                className={`block w-full text-left py-3 px-6 transition-all duration-300 ${
                  router.pathname === '/services'
                    ? 'text-green-500 bg-green-500/10'
                    : 'text-white hover:text-green-500 hover:bg-green-500/5'
                }`}
              >
                Services
              </button>
              {/* Mobile Industries Dropdown */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className={`block w-full text-left py-3 px-6 transition-all duration-300 ${
                    router.pathname.startsWith('/industries/')
                      ? 'text-green-500 bg-green-500/10'
                      : 'text-white hover:text-green-500 hover:bg-green-500/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>Industries</span>
                    <ChevronDown size={16} className={`transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {mobileIndustriesOpen && (
                  <div className="pl-6 border-l-2 border-green-500/20">
                    {industries.map((industry) => (
                      <button
                        key={industry.path}
                        onClick={() => handleNavigation(industry.path)}
                        className={`block w-full text-left py-2 px-6 transition-all duration-300 ${
                          isActive(industry.path)
                            ? 'text-green-500 bg-green-500/10'
                            : 'text-gray-300 hover:text-green-500 hover:bg-green-500/5'
                        }`}
                      >
                        {industry.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {navItems.filter(item => item.path !== '/' && item.path !== '/services').map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full text-left py-3 px-6 transition-all duration-300 ${
                    router.pathname === item.path
                      ? 'text-green-500 bg-green-500/10'
                      : 'text-white hover:text-green-500 hover:bg-green-500/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;