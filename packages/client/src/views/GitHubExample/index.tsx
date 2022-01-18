import React, { memo, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import { createStructuredSelector } from 'reselect';
import { map } from 'lodash';
import { getGHUsers } from '../../../modules/gitHubExampleModule/actions';
import { selectFetching, selectGHUsers } from '../../../modules/gitHubExampleModule/selectors';
import UserCard from 'shared/src/components/UserCard/UserCard';
import Button from 'shared/src/components/Button/Button';

import styles from './styles.module.scss';

interface PropsInterface {
  getGHUsers: () => void,
  data: [],
  fetching: boolean;
}

const GitHubExample: React.FC<PropsInterface> = (props) => {

  const fetchUsers = useCallback(() => {
    props.getGHUsers();
  }, [getGHUsers]);

  const label = useMemo(() => {
    return props.fetching ? 'Fetching...' : 'Fetch users';
  }, [props.fetching])
  return (
    <>
      <div className={styles.action}>
        <Button onClick={fetchUsers} color='primary' variant='contained' label={label} />
      </div>
      <div className={styles.list}>
        {!props.fetching && props.data && map((props.data), user => (
          <UserCard key={user.login} src={user.avatar_url} alt={user.login} name={user.login} />
        ))}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      getGHUsers: getGHUsers
    },
    dispatch
  );

export default connect(
  createStructuredSelector({
    data: selectGHUsers,
    fetching: selectFetching
  }),
  mapDispatchToProps
)(memo(GitHubExample));