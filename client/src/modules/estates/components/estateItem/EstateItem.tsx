import { FC } from 'react';
import { EstateBox } from '../estateBox';
import { EstateImage } from '../estateImage';
import { EstateTitle } from '../estateTitle';

export type EstateItemProps = {
    url: string;
    text: string;
    price: string;
}

const EstateItem: FC<EstateItemProps> = ({ url, text, price })=>{
    return(
        <EstateBox>
            <EstateImage url={url} />
            <EstateTitle title={text} subTitle={price} />
        </EstateBox>
    );
};
export default EstateItem;