import styled from 'styled-components';
import { Container as BaseContainer, ContainerProps } from '../../../components';
import { FC } from 'react';

const Container = styled(BaseContainer)`
    flex-flow: wrap;
    align-content: baseline;
    justify-content: center;
    padding-bottom: 3rem;
`;

const EstateContainer:FC<Omit<ContainerProps, 'className' | 'direction'>> = ({ children })=>{
    return(
        <Container>
            {children}
        </Container>
    );
};

export default EstateContainer;