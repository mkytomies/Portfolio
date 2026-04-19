import { Link } from 'react-router';
import './styles/ErroPage.css';

const ErrorPage = () => {
	return (
		<>
			<div className="container">
				<h2>Oops page not found!</h2>
				<Link className="homeButton" to={'/'}>
					Back to Home
				</Link>
			</div>
		</>
	);
};

export default ErrorPage;
