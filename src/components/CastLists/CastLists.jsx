import CastListsItem from './CastListsItem';
import { CastListUl } from './CastLists.styled';

const CastList = ({ castsData: { cast = [] } }) => {
  return (
    <CastListUl>
      {cast.length > 0
        ? cast.map(({ name, character, profile_path, credit_id }) => (
            <CastListsItem
              name={name}
              character={character}
              profile_path={profile_path}
              key={credit_id}
            />
          ))
        : "We don't have any cast list for this movie"}
    </CastListUl>
  );
};

export default CastList;
