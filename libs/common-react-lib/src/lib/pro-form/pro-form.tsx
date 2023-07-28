import styles from './pro-form.module.less';

/* eslint-disable-next-line */
export interface ProFormProps {}

export function ProForm(props: ProFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProForm!</h1>
    </div>
  );
}

export default ProForm;
