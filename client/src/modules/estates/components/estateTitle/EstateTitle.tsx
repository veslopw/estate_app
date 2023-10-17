import styled from 'styled-components';
import { FC } from 'react';

const Box = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: .25rem;
    width: 209px;
`;

const Title = styled('h4')`
  font-weight: 500;
  margin: 0;
`;


type EstateTitleProps = {
    title?: string;
    subTitle?: string;
}

const EstateTitle: FC<EstateTitleProps> = ({ title, subTitle })=>{
    return(
        <Box>
            <Title>{title}</Title>
            <Title>{subTitle}</Title>
        </Box>
    );
};

export default EstateTitle;
