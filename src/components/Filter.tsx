import { useContext } from 'react';
import { Input, InputLabel } from '@mui/material';
import { IceCreamContext } from './IceCreamContext';

export const Filter = () => {
  const { filter, updateFilter } = useContext(IceCreamContext);
  return (
    <div>
      <InputLabel>Search for your favorite flavor</InputLabel>
      <Input value={ filter } onChange={ (event) => updateFilter(event.target.value) } />
    </div>
  );
};