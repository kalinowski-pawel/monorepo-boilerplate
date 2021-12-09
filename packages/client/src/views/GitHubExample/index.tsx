import React, { useEffect } from 'react';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { getGHUsers } from '../../../modules/gitHubExampleModule/actions';
import { connect } from 'react-redux';

const GitHubExample = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getGHUsers());
  }, [])  
    
  return (
    <div>
      GH component
    </div>
  )
}

export default GitHubExample;