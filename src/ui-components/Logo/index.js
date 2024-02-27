import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={`/`}>
        <Image src={"/bg.png"} width={"70"} height={"70"} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
