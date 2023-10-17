import { Button } from '../../../components';
import styled from 'styled-components';
import { FC } from 'react';

const ButtonBox = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 1280px;
    padding-bottom: .3rem;
    padding-top: .3rem;
    background-color: #fff;
`;

const Span = styled('span')`
    align-items: center;
    display: inline-flex;
`;

type EstatePaginationProps = {
    next: () => void;
    prev: () => void;
    page: number
}

const EstatePagination: FC<EstatePaginationProps>  = ({ prev, next, page })=>{
    return(
        <ButtonBox>
            <Button onClick={prev}>&#x2039;</Button>
            <Span>{page} of 21</Span>
            <Button onClick={next}>&#x203A;</Button>
        </ButtonBox>
    );
};
export default EstatePagination;
