import styles from './Layout.module.css';
import { LayoutProps } from './Layout.propps';
import cn from 'classnames';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { Component, FunctionComponent } from 'react';

export const Layout = ({ children}: LayoutProps): JSX.Element => {
	return (
        <>
        <Header/>
        <div>
            <Sidebar/>
            <div>
                {children}
            </div>
        </div>
        <Footer/>
        </>
		
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return(
            <Layout>
                <Component {...props}/>
                </Layout>
        );

    };
};