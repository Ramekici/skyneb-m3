import './App.scss';
import Btctable from './components/Btctable';
import MiddleTable from './components/middle/MiddleTable';
import LeftPaneUp from './components/left-pane/LeftPaneUp';
import MarketNews from './components/left-pane/MarketNews';
import Orderbook from './components/right-pane/Orderbook';
import Orders from './components/middle/Orders';
import RightBott from './components/right-pane/RightBott';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="left-pane">
          <LeftPaneUp/>
          <MarketNews/>
        </div>
        <div className="middle-pane">
          <Btctable/>
          <MiddleTable/>
          <Orders/>
        </div>
        <div className="right-pane">
          <Orderbook/>
          <RightBott/>
        </div>
      </div>
    </div>
  );
}

export default App;
