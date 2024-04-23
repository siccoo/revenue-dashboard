import { startOfDay} from 'date-fns';
import { TFilter, TTransaction } from '../../../../types';

export const filterByDateRange = (data: TTransaction[] | undefined, filterCriteria: TFilter): TTransaction[] | undefined => {
    let filteredData = data
    if (filterCriteria.startDate && filterCriteria.endDate) {
        const startDate = startOfDay(new Date(filterCriteria.startDate));
        const endDate = startOfDay(new Date(filterCriteria.endDate));

        filteredData = filteredData?.filter(item => {
            const itemDate = startOfDay(new Date(item.date));
            return itemDate >= startDate && itemDate <= endDate;
        });

    }
    return filteredData
}

