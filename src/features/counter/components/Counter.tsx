// features/counter/components/Counter.tsx

import React from 'react';
import { useActions } from 'typeless';
import { CounterActions, getCounterState } from '../interface';

// Create a stateless component with hooks
// NOTE: there are no type annotations, and the below code is 100% type-safe!
export function Counter() {
    // wrap actions with `dispatch`
    const { incrCount, decrCount } = useActions(CounterActions);
    // get state from store
    const { isLoading, count } = getCounterState.useState();

    return (
        <div>
            <button disabled={isLoading} onClick={incrCount}>
                {isLoading ? 'loading...' : 'increase'}
            </button>
            <button disabled={isLoading} onClick={decrCount}>
                {isLoading ? 'loading...' : 'decrease'}
            </button>
            <div>count: {count}</div>
        </div>
    );
}