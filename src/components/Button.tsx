import { Link } from 'react-router';
import './styles/Button.css';

type ButtonProps = {
    label: string;
    to: string;
}

const Button = ({label, to}: ButtonProps) => {

    return(
        <Link role='link' className='button' to={to} data-cy="button">{label}</Link>
    )
}

export default Button;