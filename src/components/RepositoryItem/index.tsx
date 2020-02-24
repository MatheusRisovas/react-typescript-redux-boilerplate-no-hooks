import React from 'react';

import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
  repository: Repository;
}

type Props = OwnProps;

const RepositoryItem = ({ repository }: Props) => <li>{repository.name}</li>;

export default RepositoryItem;
