import TagCard from '@/components/cards/TagCard';
import React from 'react'

const popularTags = [
    { id: "1", name: "enemies to lovers", books: 100 },
    { id: "2", name: "fast paced", books: 200 },
    { id: "3", name: "slow burn", books: 150 },
    { id: "4", name: "mystery", books: 50 },
    { id: "5", name: "thriller", books: 75 },
];

const PopularTags = () => {
    return (
        <div className="mt-7 flex flex-col gap-4">
            {popularTags.map(({ id, name, books }) => (
                <TagCard
                    key={id}
                    id={id}
                    name={name}
                    books={books}
                    showCount
                    compact
                />
            ))}
        </div>
    )
}

export default PopularTags