import React, {FC} from 'react';

interface IShowProps {
  type?: 'js' | 'css',
  value: boolean | undefined,
  children: React.ReactNode
}

export default (props: IShowProps) => {
  const {
    type = 'js',
    value,
    children
  } = props;
  return type === 'js' ? (
    <>
      {
        value && children
      }
    </>
  ) : (
    <div style={{visibility: value ? 'visible' : 'hidden'}}>
      {children}
    </div>
  );
}
