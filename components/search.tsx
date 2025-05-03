import { Input, InputGroup } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import SearchProductFilter from "./search-product-filter";
import styles from "./../styles/search.module.css";

export default function CustomSearch({ showSearchParamsSelect, additionalFilterType, defaultSearchParams, search }:
    { showSearchParamsSelect: boolean, additionalFilterType?: string, defaultSearchParams: any, search: any }) {
    const [selectedValue, setSelectedValue] = useState('');
    const [searchParams, setSearchParams] = useState<Record<string, any>>({});
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        setSearchParams(defaultSearchParams);
    }, [defaultSearchParams])

    const searchByParam = () => {
        const params = { ...searchParams, searchParam: selectedValue };
        search(params);
    }

    const addSearchParams = (param: string, value: any) => {
        console.log("Search param" + param + "-" + value)
        setSearchParams({ ...searchParams, [param]: value });
    }

    const resetFilter = () => {
        setSearchParams({});
        setSelectedValue('');
        setShowFilter(false);
        search({});
    }

    return (
        <div>
            <InputGroup flex="1" startElement={<Search />}>
                <Input placeholder="Search by parameter"
                    value={selectedValue}
                    onChange={(e) => { setSelectedValue(e.target.value) }} />
            </InputGroup>

            <div onClick={() => setShowFilter(!showFilter)} className={styles.show_filter_link}>
                {!showFilter ? 'Show More Filter \u25BC' : 'Hide Filter \u25B2'}
            </div>
            {showFilter && (
                <>
                    {additionalFilterType === 'PRODUCT' &&
                        <SearchProductFilter addSearchParams={(name: string, value: any) => addSearchParams(name, value)} searchParams={searchParams} />
                    }
                </>
            )
            }
            <div className={styles.search_buttons}>
                <button className="btn_light_green_sm mt-16" onClick={() => searchByParam()}>Search</button>
                <button className="txt_light_green" onClick={() => resetFilter()}>Reset filter</button>
            </div>
        </div>
    )
}