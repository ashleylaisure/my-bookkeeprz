import ROUTES from '@/constants/routes';
import React from 'react'
import Link from 'next/link';
import { Badge } from '../ui/badge';

interface Props {
    id: string;
    name: string;
    books: number;
    showCount?: boolean;
    compact?: boolean;
}

const TagCard = ({ id, name, books, showCount, compact} : Props) => {
    

    return (
        <Link href={ROUTES.TAGS(id)} className="flex justify-between gap-2">
            <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
                <div className="flex-center space-x-2">
                    <i> ICON </i>
                    <span>{name}</span>
                </div>
            </Badge>

        {showCount && (
            <p className="small-medium text-dark500_light700">{books} books</p>
        )}
    </Link>
    )
}

export default TagCard