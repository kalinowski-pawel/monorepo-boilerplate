import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import { createStructuredSelector } from 'reselect';
import { map } from 'lodash';
import { getGHUsers } from '../../../modules/gitHubExampleModule/actions';
import { selectFetching, selectGHUsers } from '../../../modules/gitHubExampleModule/selectors';

import styles from './styles.module.scss';

interface PropsInterface {
	getGHUsers: () => void,
	data: [],
	fetching: boolean;
}

const GitHubExample: React.FC<PropsInterface> = (props) => {

  useEffect(() => {
    props.getGHUsers();
  }, [props.getGHUsers]);

  return (
    <>
      <div className={styles.container}>
        <title>GitHub users</title>
        {!props.fetching && props.data && map((props.data), user => (
          <div key={user.login} className={styles.container__row}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={user.login} src={user.avatar_url} width={50}/>
            <span>{user.login}</span>
          </div>

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
)(GitHubExample);