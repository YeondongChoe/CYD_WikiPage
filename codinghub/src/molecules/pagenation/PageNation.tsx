import React from "react";
import Pagination from "react-js-pagination";
import { styled } from "styled-components";

type PaginationBox = {
	itemsCountPerPage: number;
	totalItemsCount: number;
	onChange: (e: number) => void;
	page: number;
};

export const PaginationBox = ({
	itemsCountPerPage,
	totalItemsCount,
	onChange,
	page,
}: PaginationBox) => {
	return (
		<Component>
			<Pagination
				activePage={page}
				itemsCountPerPage={itemsCountPerPage}
				totalItemsCount={totalItemsCount}
				pageRangeDisplayed={5}
				prevPageText={"<"}
				nextPageText={">"}
				onChange={onChange}
			/>
		</Component>
	);
};

const Component = styled.div`
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		gap: 30px;
		margin-top: 10px;

		li {
			// .active에 focus 안 주어도 자동 focus됨
			&.disabled:active,
			&.active > a {
				color: red;
				font-weight: bold;
			}

			&:hover > a {
				color: red;
			}

			&:nth-child(1),
			&:nth-child(2),
			&:nth-last-child(1),
			&:nth-last-child(2) {
				a {
					font-size: var(--third-title-font-size);
				}
			}

			a {
				text-decoration: none;
				color: black;
				font-size: var(--third-title-font-size);
			}
		}
	}
`;
