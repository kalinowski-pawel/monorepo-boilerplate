import { createSelector } from 'reselect';

const selectStore = state => state.gitHub

export const selectGHUsers = createSelector(
  selectStore,
  state => state
);
