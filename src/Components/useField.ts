import { ChangeEventHandler, useCallback, useState } from 'react';

type UseFieldType<V = undefined, Element = HTMLInputElement> = [V, ChangeEventHandler<Element>];

export const useField = <
  V extends string | null | undefined = undefined,
  Element extends HTMLInputElement | HTMLSelectElement = HTMLInputElement
>(
  initialValue: V | (() => V),
): UseFieldType<V, Element> => {
  const [value, setValue] = useState<V>(initialValue);
  const onChange = useCallback<ChangeEventHandler<Element>>(
    event => {
      const newValue = event.currentTarget.value as V;
      setValue(newValue);
    },
    [setValue],
  );

  return [value, onChange];
};
