import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useCommonHooks from './use-common-hooks';

describe('useCommonHooks', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCommonHooks());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
