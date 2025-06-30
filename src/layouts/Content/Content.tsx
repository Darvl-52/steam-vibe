import './Content.scss';
import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  isResetPaddingTop: boolean
}

export const Content = ({children, isResetPaddingTop = false}: Props) => {

  return (
    <main className={clsx('content', {
      ['content--reset-padding-top']: isResetPaddingTop,
    })}
    >
      {children}
    </main>
  )
}