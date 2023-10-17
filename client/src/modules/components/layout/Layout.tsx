import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const LayoutMain = styled('div')`
    display: flex;
    padding: 0 1rem;
    width: 100%;
    justify-content: center;
`;

const Container = styled('div')`
    width: 100%;
    max-width: 1280px;
    display: flex;
`;

export type LayoutProps = {
    className?: string;
} & PropsWithChildren;

const Layout:FC<LayoutProps> = ({ children, className })=>{
    return(
        <LayoutMain className={className}>
            <Container>
                {children}
            </Container>
        </LayoutMain>
    );
};

export default Layout;
