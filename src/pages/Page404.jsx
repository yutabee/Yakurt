import React from 'react'
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <>
          <div>
              <h2>ページが見つかりません。</h2>
            <Link to='/'>トップに戻る</Link>
          </div>
    </>
  );
};
