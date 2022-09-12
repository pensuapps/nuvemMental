import Loading from '../src/Loading';
import Home from './Home';
import { useState, useEffect } from 'react';

export default function Index () {
	const [ loading, setLoading ] = useState(true);
	
	useEffect(() => {
		const id = setTimeout(() => setLoading(false), 3000);
		return () => clearTimeout(id);
	}, []);

	return (
		<div>
			{loading? 
				<Loading /> 
				: <Home />
			}
		</div>
	);
}
