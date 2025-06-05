import Form from "next/form";
import SearchFormReset from "@/components/ui/SearchFormReset";
import { PiMagnifyingGlassBold } from "react-icons/pi";

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

                <button type="submit" className="search-btn text-black">
                    <PiMagnifyingGlassBold className="size-6" />
                </button>
            </div>
        </Form>
    );
};

export default SearchForm;
