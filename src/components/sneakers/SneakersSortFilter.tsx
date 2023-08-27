import React from 'react';
import { useSneakerContext } from './SneakerContext';
import Button from '../Button';
import './SneakersHeader.scss';
import { FILTERS } from '../../lib/consts';

interface SneakersSortFilterProps {
  className?: string;
}

const SneakersSortFilter: React.FC<SneakersSortFilterProps> = ({ className }) => {
  const { filterName, updateFilterName, sneakersCount, searchText } = useSneakerContext();

  const getClass = () => {
    let str = 'sneakers-filter flex gap-10 flex-center flex-right';

    if (className) {
      str += ` ${className}`;
    }

    return str +  `${sneakersCount === 0 ? ' visibility-hidden' : ''}`;
  }

  return (
    <div className={getClass()}>
      <span className="text-sm">
        Sort by:
      </span>
      <Button
        icon={<img src="/icons/calendar.svg" alt="calendar" />}
        text="Oldest Year"
        size="sm"
        outline
        active={filterName === FILTERS.OLDEST}
        onClick={() => updateFilterName(FILTERS.OLDEST)}
      />
      <Button
        icon={<img src="/icons/size.svg" alt="size" />}
        text="Smallest Size"
        size="sm"
        outline
        active={filterName === FILTERS.SMALLEST}
        onClick={() => updateFilterName(FILTERS.SMALLEST)}
      />
      <Button
        iconText="$"
        text="Lowest Price"
        size="sm"
        outline
        active={filterName === FILTERS.CHEAPEST}
        onClick={() => updateFilterName(FILTERS.CHEAPEST)}
      />
    </div>
  );
}

export default SneakersSortFilter;
