import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC<{ size?: number }> = ({ size = 120 }) => {
  return (
    <Link href="/" className="flex items-center justify-center rounded-full bg-white p-2 shadow-md" style={{ width: size, height: size }}>
      <Image
        src="/images/logo/HilltopLogo.png"
        alt="Hilltop Bar & Grill Logo"
        width={size - 4}
        height={size - 4}
        style={{ borderRadius: '50%', objectFit: 'contain' }}
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;
