'use client';

import CustomPagination from "@/components/custom-pagination";
import ProductCard from "@/components/product-card";
import CustomSearch from "@/components/search";
import { setIsLoading } from "@/redux/slices/loadingSlice";
import { clearSearch } from "@/redux/slices/searchSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { getAllProducts, getProductsByParams } from "@/service/product";
import { Page } from "@/types/page";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from "../../../styles/product-list.module.css";

export default function ProductList() {
    const dispatch = useDispatch<AppDispatch>();
    const { search } = useSelector((state: RootState) => state.search);
    const [products, setProducts] = useState<Product[]>([])
    const [page, setPage] = useState<Page>({ page: 0, size: 2, totalElements: 1 })
    const [isSearching, setIsSearching] = useState(false);
    const [searchParams, setSearchParams] = useState<Record<string, any>>({});

    useEffect(() => {
        const isInitialSearch = Object.keys(search).length > 0;
        if (isInitialSearch) {
            setSearchParams(search);
        }

        if (!isSearching && !isInitialSearch) {
            fetchProducts();
        } else {
            const params = isInitialSearch ? search : searchParams;
            fetchProductsByParams(params, page);
            if (isInitialSearch) dispatch(clearSearch())
        }
    }, [page.page])

    const fetchProducts = () => {
        dispatch(setIsLoading(true));

        getAllProducts(page)
            .then((response) => {
                setProducts(response.content);
                setPage({ ...page, totalElements: response.totalElements });
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(setIsLoading(false)));
    }

    const fetchProductsByParams = (params: any, page: Page) => {
        dispatch(setIsLoading(true));

        getProductsByParams(params, page)
            .then((response) => {
                setProducts(response.content);
                setPage({ ...page, totalElements: response.totalElements });
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(setIsLoading(false)));
    }

    const searchProduct = async (searchParams: any) => {
        const isSearching = Object.keys(searchParams).length === 0 ? false : true;
        const resetPage = { page: 0, size: 2, totalElements: 1 };

        setIsSearching(isSearching);
        setSearchParams(searchParams);

        fetchProductsByParams(searchParams, resetPage);
    };

    const handlePageChange = (pageNumber: number) => {
        setPage({ ...page, page: pageNumber });
    };

    return (
        <section className="inner_layout">
            <CustomSearch
                defaultSearchParams={searchParams}
                showSearchParamsSelect={false}
                additionalFilterType={'PRODUCT'}
                search={(searchParams: any) => searchProduct(searchParams)} />

            <div className={styles.product_list}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </div>

            <CustomPagination
                setSelectedPage={(page: number) => handlePageChange(page)}
                totalElements={page.totalElements}
                currentPage={page.page}
                pageSize={page.size}>
            </CustomPagination>
        </section >
    )
}