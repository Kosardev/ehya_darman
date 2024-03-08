import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import {productList} from "@/lib/types";


type PaginationT={
    currentPage: number,
    totalCount: number,
    productsPerPage: number,
    onPageChange:(number)=>void,
}
export function DefaultPagination({ totalCount, productsPerPage, currentPage, onPageChange}:PaginationT) {
    const totalPages = Math.ceil(totalCount / productsPerPage);

    const prev = () => {
        if (currentPage === 0) return;
        onPageChange(currentPage - 1);
    };

    const next = () => {
        if (currentPage === totalPages-1) return;
        onPageChange(currentPage + 1);
    };

    const getItemProps = (index) => ({
        variant: currentPage === index ? "filled" : "text",
        color: "gray",
        onClick: () => onPageChange(index),
    });

    // Generate pagination buttons dynamically
    const paginationButtons = [];
    for (let i = 0; i < totalPages; i++) {
        paginationButtons.push(
            <IconButton key={i} {...getItemProps(i)}>
                {i+1}
            </IconButton>
        );
    }

    return (
        <div className="flex items-center gap-4 justify-center w-full mb-4">
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={prev}
                disabled={currentPage === 0}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" /> قبلی
            </Button>
            <div className="flex items-center gap-2">{paginationButtons}</div>
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={next}
                disabled={currentPage === totalPages-1}
            >
                بعدی <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}