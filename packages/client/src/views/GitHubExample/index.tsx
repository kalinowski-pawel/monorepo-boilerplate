import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { map } from 'lodash';
import { getGHUsers } from '../../../modules/gitHubExampleModule/actions';
import { selectGHUsers } from '../../../modules/gitHubExampleModule/selectors';

import styles from './styles.module.scss';

interface PropsInterface {
  getGHUsers: unknown,
  data: [],
}

const GitHubExample: React.FC<PropsInterface> = (props) => {

  useEffect(() => {
    props.getGHUsers;
  }, []);

  return (
    <div>
      <title>GitHub users</title>
      {props.data && map(props.data, user => (
        <div key={user.login} className={styles.row}>
          <img src={user.avatar_url} width={50}/>
          <div >{user.login}</div>
        </div>
        
      ))}
    </div>
  );
};

GitHubExample.defaultProps = {
  data: []
}

export default connect(
  createStructuredSelector({
    data: selectGHUsers
  }),
  getGHUsers
)(GitHubExample);