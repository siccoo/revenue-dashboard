import { TFilter, TTransaction } from '../../../../types';
import { capitalizeFirstLetter } from '../../../../utils/capitalize';

export const filterByType = (data: TTransaction[] | undefined, filterCriteria: TFilter): TTransaction[] | undefined => {
    if (!filterCriteria.type || !filterCriteria.type.length) {
      return data;
    }
  
    return data?.filter((item) => filterCriteria.type.includes(capitalizeFirstLetter(item.type) + 's'));
  };
