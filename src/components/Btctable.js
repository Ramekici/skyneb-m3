import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Btctable = () => (
  <TradingViewWidget
    symbol="BTCUSD"
    theme={Themes.DARK}
    locale="tr"
    height="360px"
    width="100%"
    toolbar_bg="#f1f3f6"
    enable_publishing={false}
    hide_side_toolbar={false}
    allow_symbol_change={true}
    details={true}
    hotlist={true}
    calendar={true}
    show_popup_button={true}
  />
);

export default Btctable;


