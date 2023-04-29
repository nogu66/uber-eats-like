import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import { Restaurants } from './containers/Restaurants.jsx';
import { Foods } from './containers/Foods.jsx';
import { Orders } from './containers/Orders.jsx';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/restaurants" element={<Restaurants />} />
				<Route path="/foods" element={<Foods />} />
				<Route path="/orders" element={<Orders />} />
				<Route
					exact
					path="/restaurants/:restaurantsId/foods"
					element={<Foods />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
