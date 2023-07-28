import styles from './common-react-lib.module.less';

/* eslint-disable-next-line */
export interface CommonReactLibProps {}

export function CommonReactLib(props: CommonReactLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonReactLib!</h1>
    </div>
  );
}

export default CommonReactLib;
