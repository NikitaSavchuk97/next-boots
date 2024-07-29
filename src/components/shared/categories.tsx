import { FC } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const categoriesList = ["Кроссовки","Кеды","Сандали","Ботинки",]

const Categories: FC<Props> = ({ className }) => {
	return <div className={cn('inline-flex gap-1 bg-gray-150 p-1 rounded-2xl', className)}>
		
	</div>;
};

export default Categories;
