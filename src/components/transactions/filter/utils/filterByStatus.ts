import { TFilter, TTransaction } from '../../../../types';
import { capitalizeFirstLetter } from '../../../../utils/capitalize';

export const filterByStatus = (data: TTransaction[] | undefined, filterCriteria: TFilter): TTransaction[] | undefined => {
    if (!filterCriteria.status || !filterCriteria.status.length) {
      return data;
    }
  
    return data?.filter((item) => filterCriteria.status.includes(capitalizeFirstLetter(item.status)));
  };
