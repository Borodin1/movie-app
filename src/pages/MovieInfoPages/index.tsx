import { useParams } from 'react-router-dom';
import { useGetMovieInfo } from 'hooks/useGetMovieInfo';
import { DetailInfo } from 'components/DetailInfo';

const MovieInfoPages: React.FC = () => {
  const params = useParams();

  const { data } = useGetMovieInfo(params.idFilm as string);
  const genresString = data?.genres?.map((genre:{name:string}) => genre.name).join(", ");

  return <DetailInfo {...data} genresString={genresString}/>
};

export default MovieInfoPages