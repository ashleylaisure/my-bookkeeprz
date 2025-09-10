'use client'

import React from 'react'
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Eye, PenTool, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { getTimeStamp } from '@/lib/utils';
import ROUTES from '@/constants/routes';
import Link from 'next/link';


const BookCard = ({ book }: { book: Books }) => {
    // calculate progress prcentage if needed
    // const progressPercentage = book.progress ? parseFloat(book.progress.progressPercentage) : 0;

    return (
        <Card className="h-full hover:shadow-md transition-shadow cursor-pointer group">
            <CardContent className="p-4" onClick={() => {}}>
                <div className="flex space-x-4">
                    <img 
                        src={book.coverUrl || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=80&h=120"} 
                        alt={`${book.title} cover`}
                        className="w-16 h-24 object-cover rounded shadow-sm group-hover:opacity-75 transition-opacity"
                    />
                    <div className="flex-1 min-w-0">
                        <Link href={ROUTES.BOOK(book.id)}>
                            <h3 className="font-semibold text-foreground font-crimson truncate group-hover:text-primary transition-colors">{book.title}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground truncate">{book.author}</p>
                        <p className="text-sm text-muted-foreground truncate">Updated {getTimeStamp(book.createdAt)}</p>

                        {book.genre && (
                            <Badge variant="secondary" className="mt-1 text-xs">
                                {book.genre}
                            </Badge>
                        )}

                        {book.rating && (
                            <div className="flex items-center mt-2">
                                <div className="flex text-warning text-xs">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            size={12}
                                            className={i < book.rating! ? "fill-current" : ""}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* {book.status === "currently-reading" && (
                            <div className="mt-2">
                                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                    <span>Progress</span>
                                    <span>
                                        {book.progress?.currentPage || 0}
                                        {book.totalPages ? `/${book.totalPages}` : ""} pages
                                    </span>
                                </div>
                            <Progress value={progressPercentage} className="h-1" />
                            </div>
                        )} */}

                        <div className="flex items-center justify-between mt-3">
                            {/* <span className="text-xs text-muted-foreground">
                                Added {formatDistanceToNow(new Date(book.dateAdded), { addSuffix: true })}
                            </span> */}
                            <div className="flex space-x-1">
                                <Button 
                                    variant="ghost" 
                                    size="sm"
                                    
                                >
                                    <Eye size={14} />
                                </Button>
                                {book.status === "currently-reading" && (
                                    <Button 
                                        variant="ghost" 
                                        size="sm"
                                        
                                    >
                                        <PenTool size={14} />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default BookCard
