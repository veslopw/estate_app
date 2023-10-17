import { FC, useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { Container } from '../../components';
import ListOfEstates from './ListOfEstates.tsx';
import { EstatePagination } from '../components/estatePagination';

const EstatesContainer: FC = ()=>{
    const [page, setPage] = useState<number>(1);

    const { isLoading, error, data } = useQuery(['items', page], () =>
        fetch(`http://localhost:8000/api/items?page=${page}`,{
            mode: 'cors'
        }).then(res => {
            return res.json();
        }
        ).catch((err)=>{
            console.log('err: ', err);
        })
    );

    const handleNextPage = useCallback(()=>{
        if(page < 21){
            setPage(page + 1);
        }
    },[page]);

    const handlePrevPage = useCallback(()=>{
        if (page > 1) {
            setPage(page - 1);
        }
    },[page]);
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const err = error?.message;
    const estateList = data || [];
    return(
        <Container direction="column">
            <ListOfEstates estates={estateList} errorMessage={err} loading={isLoading}/>
            <EstatePagination page={page} next={handleNextPage} prev={handlePrevPage} />
        </Container>
    );
};

export default EstatesContainer;