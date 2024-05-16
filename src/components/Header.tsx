import { useEffect, useState } from 'react';

export const Header = ({ fetchFlavors }: { fetchFlavors: () => string[] }) => {
  const [renderCount, setRenderCount] = useState(0);
  const flavors = fetchFlavors();
  useEffect(() => setRenderCount(renderCount => renderCount + 1), [fetchFlavors]);

  return (
    <div>
      <h1>Choose from our { flavors.length } options</h1>
      <p>Header rendered { renderCount } times</p>
    </div>
  );
}