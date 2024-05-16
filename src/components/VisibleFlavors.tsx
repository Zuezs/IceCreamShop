import { useContext } from 'react';
import { IceCreamContext } from './IceCreamContext';

export const VisibleFlavors = ({ fetchFlavors }: { fetchFlavors: () => string[] }) => {
  const { filter } = useContext(IceCreamContext);
  const flavors = fetchFlavors();
  const visibleFlavors = flavors.filter((flavor) => flavor.includes(filter));

  return (
    <div>
      { visibleFlavors.map((flavor) => <div key={ flavor }>{ flavor }</div>) }
    </div>
  );
};