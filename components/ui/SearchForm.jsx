import Form from "next/form";
import SearchFormReset from "@/components/ui/SearchFormReset";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchForm = ({ query, placeholder }) => {
    return (
        <Form action="" scroll={false} className="search-form">
            <input
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder={placeholder}
                maxLength={50} 
            />

            <div className="flex gap-2">
                {query && <SearchFormReset />}

                <button type="submit" className="search-btn text-p4">
                    <MagnifyingGlassIcon className="size-7" />
                </button>
            </div>
        </Form>
    );
};

export default SearchForm;
