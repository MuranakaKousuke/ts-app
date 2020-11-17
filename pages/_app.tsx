// ----------------------------------------------------
// Appコンポーネントを使用してページを初期化する
// (ReduxのWrapperを設けるなどの全てのページで共通する処理を実行できる)
// ----------------------------------------------------

import React, {FC} from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store/index';

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);