import Loading from '../src/Loading';
import Home from '../src/Home';
import Stats from '../components/Stats';
import { useState, useEffect } from 'react';
import Question from '../components/Question';

export default function Index () {
	const [ loading, setLoading ] = useState(true);
	
	useEffect(() => {
		const id = setTimeout(() => setLoading(false), 3000);
		return () => clearTimeout(id);
	}, []);

	return (
		<div>
			{/* {loading? 
				<Loading /> 
				: <Home />
			} */}
			<Question />
		</div>
	);
}
