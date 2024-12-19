// bugSolution.js
import React, { useState, useEffect, useCallback } from 'react';
import { useSyncExternalStore } from 'react';

const externalStore = {
  data: 0,
  subscribe: (callback) => {
    return () => {};
  },
  getSnapshot: () => externalStore.data,
};

function MyComponent() {
  const [localState, setLocalState] = useState(0);
  const data = useSyncExternalStore(externalStore.subscribe, externalStore.getSnapshot);

  const updateData = useCallback(() => {
    setTimeout(() => {
      externalStore.data++;
    }, 1000);
  }, []);

  useEffect(() => {
    updateData();
    setLocalState(data); // Update local state only after external store update
  }, [data, updateData]);

  return (
    <div>
      <p>External Store Data: {data}</p>
      <p>Local State Data: {localState}</p>
    </div>
  );
}

export default MyComponent;