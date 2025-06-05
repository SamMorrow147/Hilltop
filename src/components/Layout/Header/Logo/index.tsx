import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC<{ size?: number; mobileSize?: number }> = ({ size = 150, mobileSize }) => {
  const desktopSize = size;
  const responsiveMobileSize = mobileSize || size;

  return (
    <Link href="/" className="flex items-center justify-center transition-all duration-300">
      <Image
        src="/images/logo/new-logo.png"
        alt="Hilltop Bar & Grill Logo"
        width={desktopSize}
        height={desktopSize}
        style={{ objectFit: 'contain' }}
        className="hidden md:block"
        quality={100}
        priority
      />
      <Image
        src="/images/logo/new-logo.png"
        alt="Hilltop Bar & Grill Logo"
        width={responsiveMobileSize}
        height={responsiveMobileSize}
        style={{ objectFit: 'contain' }}
        className="block md:hidden"
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;
