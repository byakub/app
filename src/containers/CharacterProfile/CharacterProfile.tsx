import React, { useEffect } from 'react';

import {
  HandleCharacterAction,
  ICharacter,
} from 'store';

import { useParams } from 'react-router-dom';

import { Profile } from 'components';

interface ICharacterProfile {
  character: ICharacter;
  handleCharacterAction: HandleCharacterAction;
}

interface IParamTypes {
  id: string;
}

export const CharacterProfile: React.FC<ICharacterProfile> = props => {

  const { id } = useParams<IParamTypes>();

  const {
    character,
    handleCharacterAction
  } = props;

  useEffect(() => {
    handleCharacterAction(Number(id));
  }, [id]);
  
  return (
    <>
      <Profile character={character}/>
    </>
  );
};

export default CharacterProfile;
