import styles from './Header.module.css';
import { HeaderProps } from './Header.propps';
import cn from 'classnames';

export const Header = ({ ...props}: HeaderProps): JSX.Element => {
	return (
       <div {...props}>
            Header
       </div>
		
	);
};