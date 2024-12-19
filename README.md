# React 19 - useSyncExternalStore Infinite Loop Bug

This repository demonstrates a bug encountered when using `useSyncExternalStore` in React 19 alongside asynchronous state updates within a `useEffect` hook. The bug manifests as an infinite loop, caused by the interaction between the asynchronous nature of `setState` and the synchronization mechanism of `useSyncExternalStore`. 

The `bug.js` file contains the buggy code, while `bugSolution.js` offers a corrected version using `useCallback` and careful handling of asynchronous operations.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the infinite loop in the console of the browser.

## Solution
The solution involves refactoring the code to use `useCallback` and to ensure the state updates happen in a manner that's compatible with `useSyncExternalStore`'s synchronization behavior.