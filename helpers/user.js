import { useEffect, useState } from "react";

export const makeObservable = (target) => {
  let listeners = [];
  let value = target;

  function get() {
    return value;
  }

  function set(newValue) {
    if (value === newValue) return;
    value = newValue;
    listeners.forEach((l) => l(value));
  }

  function subscribe(listenerFunc) {
    listeners.push(listenerFunc);
    return () => unsubscribe(listenerFunc);
  }

  function unsubscribe(listenerFunc) {
    listeners = listeners.filter((l) => l !== listenerFunc);
  }

  return {
    get,
    set,
    subscribe,
  };
};

const genericStore = makeObservable({ genericState: true });

export const useGenericStoreObservable = () => {
  const [genericState, setGenericState] = useState(genericStore.get());
  const changeGenericState = (data) => {
    return genericStore.set({ ...genericState, ...data });
  };
  useEffect(() => {
    return genericStore.subscribe(setGenericState);
  }, []);

  return {
    genericState,
    changeGenericState,
  };
};
