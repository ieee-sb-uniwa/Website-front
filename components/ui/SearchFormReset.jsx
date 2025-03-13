"use client"

import {Link, usePathname} from '@/i18n/navigation.js';
import { XMarkIcon } from '@heroicons/react/24/outline';

const SearchFormReset = () => {
    const pathname = usePathname();
    const reset = () => {
        const form = document.querySelector('.search-form');

        if(form) form.reset();
    }

    return (
        <button type="reset" onClick={reset}>
            <Link href={pathname} className="search-btn text-white">
                <XMarkIcon className="size-7" />
            </Link>
        </button>
    )
}
export default SearchFormReset