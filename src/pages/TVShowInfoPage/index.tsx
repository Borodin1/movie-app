import { DetailInfo } from 'components/DetailInfo';
import { useGetDetailTVShow } from 'hooks/useGetDetailTVShow';
import { useParams } from 'react-router-dom';

const TVShowInfoPage = ()=>{
    const params = useParams();

    const { data } = useGetDetailTVShow(params.idTVShow as string);
    const genresString = data?.genres?.map((genre:{name:string}) => genre.name).join(", ");
  
    return <DetailInfo {...data} genresString={genresString}/>
}

export default TVShowInfoPage