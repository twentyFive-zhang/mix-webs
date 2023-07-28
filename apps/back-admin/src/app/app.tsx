// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.less';

import NxWelcome from './nx-welcome';
import { ProForm } from '@jiangliuer/common-react-lib';

export function App() {
  return (
    <div>
      <NxWelcome title="back-admin" />
      <ProForm></ProForm>
    </div>
  );
}

export default App;
