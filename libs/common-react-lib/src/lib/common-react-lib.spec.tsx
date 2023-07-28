import { render } from '@testing-library/react';

import CommonReactLib from './common-react-lib';

describe('CommonReactLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonReactLib />);
    expect(baseElement).toBeTruthy();
  });
});
