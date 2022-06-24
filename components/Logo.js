import Image from "next/image";

export const Logo = () => {
  return (
     
    <Image
        src="/assets/logo-png.png"
        alt="serdev logo"
        layout="fixed"
        width={160}
        loading='lazy'
        height={60}
  />
  );
};
