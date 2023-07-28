import { render } from '@testing-library/react';

import ProList from './pro-list';

describe('ProList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProList />);
    expect(baseElement).toBeTruthy();
  });
});
