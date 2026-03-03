import { Link } from 'react-router';
import './styles/Button.css';

type ButtonProps = {
    label: string;
    to: string;
}

const Button = ({label, to}: ButtonProps) => {

    return(
        <Link className='button' to={to}>{label}</Link>
    )
}

export default Button;