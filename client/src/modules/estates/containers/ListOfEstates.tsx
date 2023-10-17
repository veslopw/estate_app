import { FC, useMemo } from 'react';
import { EstateContainer } from '../components/estateContainer';
import { EstateItem } from '../components/estateItem';

type Estates = {
    name: string;
    price: string;
    img: string;
    id: string | number
}

type ListOfEstates = {
    estates: Estates[],
    loading?: boolean;
    errorMessage?: string | null;
}
const ListOfEstates: FC<ListOfEstates> = ({ estates, loading, errorMessage })=>{

    const estateData = useMemo(()=>{
        return estates.map(({ name, price, img, id })=>{
            return <EstateItem key={id} url={img} price={price} text={name} />;
        });
    },[estates]);

    if (errorMessage) {
        return <div>Error: {errorMessage}</div>;
    }

    return(
        <EstateContainer>
            {loading ? 'Loading...' : estateData}
        </EstateContainer>
    );
};

export default ListOfEstates;