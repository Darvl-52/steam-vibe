import './Icon.scss';
import { Icon as MinistaIcon } from "minista";
import clsx from "clsx";

interface Props {
  className?: string;
  name?: string;
  hasFill?: boolean;
}

export const Icon = ({className, name, hasFill}: Props) => {
  return (
    <span className={clsx(className, 'icon')}>
            <MinistaIcon
              fill={hasFill ? 'currentColor' : 'none'}
              stroke={hasFill ? 'none' : 'currentColor'}
              iconId={name}
            />
        </span>
  )
}