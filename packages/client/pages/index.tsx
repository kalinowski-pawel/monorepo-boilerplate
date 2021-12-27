import { Button } from 'shared';
import GitHubExample from '../src/views/GitHubExample';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <header>Example page</header>
      <Button />
      <GitHubExample />
    </div>
  );
}
