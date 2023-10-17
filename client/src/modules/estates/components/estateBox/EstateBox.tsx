import { Container } from '../../../components';
import styled from 'styled-components';
import { FC, PropsWithChildren } from 'react';

const Box = styled(Container)`
    box-shadow: 0 0 7px -2px #4b4b4b;
    margin: .25rem;
    padding: .125rem .255rem;
    border-radius: .25rem;
    width: calc(426px - .5rem);
    height: 10rem;
`;

const EstateBox:FC<PropsWithChildren> = ({ children })=>{
    return(
        <Box direction="row">
            {children}
        </Box>
    );
};

export default EstateBox;
