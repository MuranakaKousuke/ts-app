// ----------------------------------------------------
// Appコンポーネントを使用してページを初期化する
// (ReduxのProviderを設けるなどの全てのページで共通する処理を実行できる)
// ----------------------------------------------------

import React from　'react';
import { Provider } from 'react-redux';
import App, { AppContext } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore, ReduxStoreInstance } from '../store';

// ----------------------------------------------------
//
type Props = {
  store: ReduxStoreInstance;
}

// ----------------------------------------------------
//
export default withRedux(initStore)(
  class extends App<Props> {
    static async getInitialProps({ Component, ctx}: AppContext) {
      let pageProps = {}
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
      return { pageProps }
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  }
)