import './Logo.scss';
import clsx from "clsx";

type Props = {
  loading?: 'lazy' | 'eager';
  className?: string;
}

export const Logo = ({loading = 'lazy', className}: Props) => {
  const title = 'Home'

  return (
    <a
      className={clsx(className, 'logo')}
      href='/'
      title={title}
      aria-label={title}
    >
      <img
        src="/logo.svg"
        alt=""
        className="logo__image"
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}