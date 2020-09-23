import React from 'react';
import { useDispatch } from 'umi';
import Search from '@/components/Search';
import { Dispatch } from '@@/plugin-dva/connect';

interface IBasicLayoutProps {

}

export default (props: IBasicLayoutProps) => {

  return (
    <div className='page'>
      <div className='clearfix padding-bottom'>
        <div className='right'>
          <Search />
        </div>
      </div>
    </div>
  );
};

