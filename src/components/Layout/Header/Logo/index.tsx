import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center justify-center rounded-full bg-white p-2 shadow-md" style={{ width: 120, height: 120 }}>
      <Image
        src="/images/logo/HilltopLogo.png"
        alt="Hilltop Bar & Grill Logo"
        width={116}
        height={116}
        style={{ borderRadius: '50%', objectFit: 'contain' }}
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;
