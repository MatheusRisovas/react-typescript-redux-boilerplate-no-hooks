import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import RepositoryItem from '../RepositoryItem';

interface StateProps {
  repositories: Array<Repository>;
  loading: boolean;
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

const RepositoryList: React.FC<Props> = ({ repositories, loading, loadRequest }: Props) => {
  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  if (loading) {
    return <h1> Loading... </h1>;
  }

  return (
    <ul>
      {repositories.map((repository) => (
        <RepositoryItem repository={repository} key={repository.id} />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ repositories }: ApplicationState) => ({
  repositories: repositories.data,
  loading: repositories.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
