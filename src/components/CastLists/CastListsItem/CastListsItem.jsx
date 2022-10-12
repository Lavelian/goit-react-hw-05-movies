import { ListsItem } from './CastListsItem.styled';
const CastListsItem = ({ name, character, profile_path = '' }) => {
  const urlImg = 'https://image.tmdb.org/t/p/w500' + profile_path;
  return (
    <ListsItem>
      <img src={urlImg} alt={name} />
      <p>{name}</p>
      <p> Character: {character}</p>
    </ListsItem>
  );
};

export default CastListsItem;
