import './App.css';
import CoverArt from './assets/cover-art.png';
import Logo from './assets/logo-light.png';

function App() {
  return (
		<div className="App">
			<img className='w-5' src={Logo} alt="logo" />
			<img src={CoverArt} alt="cover" />
			<h1>Intent Based Cross Chain Portfolio Management</h1>
			<span>
				folioX, Your One-Stop Portfolio Powerhouse. Build Wealth
				effortlessly with our Autonomous Intent Framework—No bridge or protocol
				worries, we curate the best for you!
			</span>
      <span>Sign Up for Early access and Newsletter</span>
      <input type="text" />
      <button>Sign Up</button>
      <div className="email">
        <a href="mailto:contact@foliox.io">contact@foliox.io</a>
      </div>
      <div className="socials">
        <div className="twitter"></div>
        <div className="instagram"></div>
        <div className="reddit"></div>
        <div className="discord"></div>
      </div>
		</div>
	);
}

export default App;
