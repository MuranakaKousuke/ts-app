// ----------------------------------------------------
// Appコンポーネントを使用してページを初期化する
// (ReduxのProviderを設けるなどの全てのページで共通する処理を実行できる)
// ----------------------------------------------------

import React from　'react';
import App, { AppContext } from 'next/app';

// ----------------------------------------------------
//
export default class extends App {
  static async getInitialProps({ Component, ctx}: AppContext) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}