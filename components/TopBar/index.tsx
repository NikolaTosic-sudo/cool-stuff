import { FC } from "react";
import Image from "next/image";
import { TopBarWrap, BackButton } from "./style";
import Link from "next/link";
import { useRouter } from "next/router";

const TopBar: FC = () => {
  const router = useRouter();
  const showBackButton = () => {
    return router.route !== "/" ? true : false;
  };

  return (
    <TopBarWrap>
      {showBackButton() && (
        <BackButton onClick={() => router.back()}>
          <Image
            src="/images/arrow-back.svg"
            height={15}
            width={14}
            alt="Back button"
          />
        </BackButton>
      )}
    </TopBarWrap>
  );
};

export default TopBar;
