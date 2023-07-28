import styles from './pro-list.module.less';

/* eslint-disable-next-line */
export interface ProListProps {}

export function ProList(props: ProListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProList!</h1>
    </div>
  );
}

export default ProList;
