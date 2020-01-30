import { renderHook, act } from '@testing-library/react-hooks';
import { useCounterManager } from './useCounterManager';

describe('CounterManager custom hook', () => {
    test('Initial value should be received from property source', () => {
        const source = 0;
        const { result } = renderHook(() => useCounterManager(source));
        expect(result.current.count).toBe(source);
    });
    test('Increment function should increase value by 1', () => {
        const source = 0;
        const { result } = renderHook(() => useCounterManager(source));
        const prevCount = result.current.count;
        act(() => result.current.increment());
        const incrementedValue = prevCount + 1;
        expect(result.current.count).toBe(incrementedValue);
    });
    test('Decrement function should increase value by 1', () => {
        const source = 0;
        const { result } = renderHook(() => useCounterManager(source));
        const prevCount = result.current.count;
        act(() => result.current.decrement());
        const decrementedValue = prevCount - 1;
        expect(result.current.count).toBe(decrementedValue);
    });
});
