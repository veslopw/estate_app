import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

type Direction = 'row' | 'column'

const BaseContainer = styled('div')<{direction: Direction}>`
    display: flex;
    flex-direction: ${({ direction })=> direction};
    width: 100%;
`;

export type ContainerProps = {
    className?: string;
    direction?: Direction;
} & PropsWithChildren;

const Container: FC<ContainerProps> = ({ children, className, direction = 'column' })=>{
    return(
        <BaseContainer className={className} direction={direction}>{children}</BaseContainer>
    );
}; 

export default Container;
