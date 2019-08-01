import React, { StatelessComponent } from 'react';
import pagination from '../utils/pagination';
import Link, { LinkProps } from 'next/link';

export interface PaginationProps {
    current: number;
    total: number;
    limit: number;
    linkProps?: (page: number) => LinkProps
};

const Pagination: StatelessComponent<PaginationProps> = ({
    current,
    total,
    limit,
    linkProps,
}) => {
    const paginationRange = pagination(current, total, limit);
    return (
        <div>
            {paginationRange.map((page, index) => {
                if (page === -1) {
                    return <span key={`${page}${index}`}>...</span>
                }

                let buttonProps = {};
                if (page === current) {
                    buttonProps = {
                        ...buttonProps,
                        disabled: true,
                    }
                }

                return (
                    <Link key={page} {...(typeof linkProps === 'function' ? linkProps(page) : {})}>
                        <a><button {...buttonProps}>{page}</button></a>
                    </Link>
                )
            })}
        </div>
    );
};

export default Pagination;