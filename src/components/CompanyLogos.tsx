// Real company logos
// Priority: local files from /public/logos/, fallback to CDN URLs
// To use local logos, add them to /public/logos/ folder with names: novapost.png, monobank.png, etc.

import React from 'react';
import Image from 'next/image';

const LogoImage = ({
  src,
  alt,
  fallbackText,
  cdnUrl,
  className,
}: {
  src: string;
  alt: string;
  fallbackText: string;
  cdnUrl?: string;
  className?: string;
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [hasError, setHasError] = React.useState(false);
  
  if (hasError) {
    return (
      <div className="logo-fallback text-4xl md:text-6xl font-bold text-white/30 whitespace-nowrap">
        {fallbackText}
      </div>
    );
  }

  return (
    <div className={`relative ${className ?? "h-16 md:h-20 lg:h-24 w-40"}`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-contain"
        onError={() => {
          if (cdnUrl && imgSrc === src) {
            setImgSrc(cdnUrl);
            return;
          }
          setHasError(true);
        }}
      />
    </div>
  );
};

export function NovaPostLogo() {
  return (
    <div className="flex items-center gap-3">
      <LogoImage 
        src="/logos/nova.png" 
        alt="Nova Post" 
        fallbackText="NOVA DIGITAL"
        cdnUrl="https://logo.clearbit.com/novapost.ua"
        className="h-20 md:h-24 lg:h-28 w-auto object-contain max-w-[320px]"
      />
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">NOVA DIGITAL</span>
    </div>
  );
}

export function MonobankLogo() {
  return (
    <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">MONOBANK</div>
  );
}

export function FozzyGroupLogo() {
  return (
    <div className="flex items-center gap-3">
      <LogoImage 
        src="/logos/fozzy.png" 
        alt="Fozzy Group" 
        fallbackText="FOZZY"
        cdnUrl="https://logo.clearbit.com/fozzy.ua"
      />
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">FOZZY</span>
    </div>
  );
}

export function SigmaLogo() {
  return (
    <div className="flex items-center gap-3">
      <LogoImage 
        src="/logos/sigma.png" 
        alt="Sigma Software" 
        fallbackText="SIGMA"
        cdnUrl="https://logo.clearbit.com/sigma.software"
        className="h-16 md:h-20 lg:h-24 w-auto object-contain max-w-[300px] brightness-110"
      />
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">SIGMA</span>
    </div>
  );
}

export function GridDynamicsLogo() {
  return (
    <div className="flex items-center gap-3">
      <LogoImage 
        src="/logos/grid.png" 
        alt="Grid Dynamics" 
        fallbackText="Grid Dynamics"
        cdnUrl="https://logo.clearbit.com/griddynamics.com"
      />
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">GRID DYNAMICS</span>
    </div>
  );
}

export function KyivstarLogo() {
  return (
    <div className="flex items-center gap-3">
      <LogoImage 
        src="/logos/kyivstar.png" 
        alt="Kyivstar" 
        fallbackText="Kyivstar"
        cdnUrl="https://logo.clearbit.com/kyivstar.ua"
      />
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">KYIVSTAR</span>
    </div>
  );
}

export function AkvelonLogo() {
  return (
    <LogoImage 
      src="/logos/akvelon.png" 
      alt="Akvelon" 
      fallbackText="akvelon"
      cdnUrl="https://logo.clearbit.com/akvelon.com"
    />
  );
}

export function SoftServeLogo() {
  return (
    <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">SOFTSERVE</div>
  );
}

export function EPAMLogo() {
  return (
    <LogoImage 
      src="/logos/epam.png" 
      alt="EPAM Systems" 
      fallbackText="EPAM"
      cdnUrl="https://logo.clearbit.com/epam.com"
      className="h-14 md:h-16 lg:h-20 w-auto object-contain max-w-[260px] brightness-110"
    />
  );
}

export function SamsungLogo() {
  return (
    <LogoImage 
      src="/logos/samsung.png" 
      alt="Samsung" 
      fallbackText="SAMSUNG"
      cdnUrl="https://logo.clearbit.com/samsung.com"
    />
  );
}

export function CheckmarxLogo() {
  return (
    <LogoImage 
      src="/logos/checkmarx.png" 
      alt="Checkmarx" 
      fallbackText="Checkmarx"
      cdnUrl="https://logo.clearbit.com/checkmarx.com"
      className="h-16 md:h-20 lg:h-24 w-auto object-contain max-w-[300px] brightness-110"
    />
  );
}

function CompanyLogo({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center px-8 md:px-12 grayscale opacity-50 hover:opacity-75 hover:scale-110 transition-all duration-300 text-gray-300 select-none">
      {children}
    </div>
  );
}

export { CompanyLogo };
