import { memo, FC, ReactNode } from 'react';
type Props = {
  children: ReactNode;
  id?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const style = { marginLeft: '10px' };

export const Button: FC<Props> = memo((props) => {
  const { children, id, onClick, disabled = false } = props;

  return (
    <button id={id} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
});
