import GitHubExample from '../src/views/GitHubExample';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.container__header}>This is Example page</header>
      <div className={styles.container__content}>
        <GitHubExample />
      </div>
    </div>
  );
}
