import styles from './Footer.module.css';
import { FooterProps } from './Footer.propps';
import cn from 'classnames';

export const Footer = ({ ...props}: FooterProps): JSX.Element => {
	return (
       <div {...props}>
            Footer
       </div>
		
	);
};