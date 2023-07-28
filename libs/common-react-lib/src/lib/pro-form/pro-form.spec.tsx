import { render } from '@testing-library/react';

import ProForm from './pro-form';

describe('ProForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProForm />);
    expect(baseElement).toBeTruthy();
  });
});
