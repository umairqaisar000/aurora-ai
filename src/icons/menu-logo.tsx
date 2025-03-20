import Image from 'next/image'

type MenuLogoProps = {
  onClick(): void
}

export const MenuLogo = ({ onClick }: MenuLogoProps) => {
  return (
    <Image
      onClick={onClick}
      src="/images/logo-2.svg"
      alt="LOGO"
      className="animate-fade-in opacity-0 delay-300 fill-mode-forwards"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={0}
      height={0}
    />
  )
}
