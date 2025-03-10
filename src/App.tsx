import { Box, FormControlLabel, InputLabel, Radio, RadioGroup, Stack } from '@mui/material';
import { useState, useCallback } from 'react';
import { IceCreamContext } from './components/IceCreamContext';
import { Header } from './components/Header';
import { Filter } from './components/Filter';
import { VisibleFlavors } from './components/VisibleFlavors';

enum IceCreamShop {
  WHATS_THE_SCOOP = "What's the Scoop",
  CONE_KINGDOM = "Cone Kingdom",
  WENDYS = "Wendy's",
}

export const App = () => {
  const [iceCreamShop, setIceCreamShop] = useState(IceCreamShop.WHATS_THE_SCOOP);
  const [filter, setFilter] = useState("");
  const updateFilter = (filter: string) => {
    setFilter(filter);
  }

  const fetchFlavors = useCallback((): string[] => {
    switch (iceCreamShop) {
      case IceCreamShop.WHATS_THE_SCOOP:
        return ["vanilla", "chocolate", "strawberry", "mint chip", "rocky road", "birthday cake", "cookie dough", "coffee", "pistachio", "butter pecan", "cotton candy", "bubble gum", "peanut butter", "black cherry"];
      case IceCreamShop.CONE_KINGDOM:
        return ["ube", "matcha oreo", "corn bread", "fruit loops", "s'mores", "black sesame", "lemon", "funnel cake"]
      case IceCreamShop.WENDYS:
        return ["chocolate frosty", "vanilla frosty", "strawberry frosty"]
    }
  }, [iceCreamShop]);

  return (
    <Box pl={ 3 } pt={ 3 }>
      <InputLabel>Viewing ice cream from</InputLabel>
      <RadioGroup row name="ice-cream-shop" value={ iceCreamShop } onChange={ (_e, shop) => setIceCreamShop(shop as IceCreamShop) }>
        <FormControlLabel value={ IceCreamShop.WHATS_THE_SCOOP } control={ <Radio /> } label={ IceCreamShop.WHATS_THE_SCOOP } />
        <FormControlLabel value={ IceCreamShop.CONE_KINGDOM } control={ <Radio /> } label={ IceCreamShop.CONE_KINGDOM } />
        <FormControlLabel value={ IceCreamShop.WENDYS } control={ <Radio /> } label={ IceCreamShop.WENDYS } />
      </RadioGroup>
      <Stack spacing={ 3 } direction="column">
        <Header fetchFlavors={ fetchFlavors } />
        <IceCreamContext.Provider value={ { flavors: [], filter, updateFilter } }>
          <Filter />
          <VisibleFlavors fetchFlavors={ fetchFlavors } />
        </IceCreamContext.Provider>
      </Stack>
    </Box>
  );
}