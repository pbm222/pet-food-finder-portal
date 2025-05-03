'use client';

import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomPagination({ setSelectedPage, totalElements, currentPage, pageSize }:
    { setSelectedPage: any, totalElements: number, currentPage: number, pageSize: number }) {

    const page = currentPage + 1;

    const selectPage = (selectedPage: number) => {
        const pageNumber = selectedPage - 1;
        setSelectedPage(pageNumber);
    }

    return (
        <Pagination.Root
            count={totalElements}
            pageSize={pageSize}
            defaultPage={1}
            page={page}
            onPageChange={(e) => selectPage(e.page)}>
            <ButtonGroup variant="ghost" size="sm">
                <Pagination.PrevTrigger asChild>
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                    render={(page) => (
                        <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                            {page.value}
                        </IconButton>
                    )}
                />

                <Pagination.NextTrigger asChild>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                </Pagination.NextTrigger>
            </ButtonGroup>
        </Pagination.Root>
    )
}