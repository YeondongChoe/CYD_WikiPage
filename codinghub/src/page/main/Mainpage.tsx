import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Label } from "../../atom/label/Label";
import { Button } from "../../atom/button/Button";
import { WikiCard } from "../../molecules/card/WikiCard";
import { PaginationBox } from "../../molecules/pagenation/PageNation";
import { useRecoilState } from "recoil";
import { PageAtom } from "../../store/util/PageNation";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../molecules/modal/Modal";
import { wikiInfoState } from "../../store/util/WikiData";

export const Main = () => {
	const [currentWikiPages, setCurrentWikiPages] = useRecoilState(wikiInfoState);
	const [page, setPage] = useRecoilState(PageAtom);
	const itemsPerPage = 5;
	const [currentPage, setCurrentPage] = useState(1);

	//현재 페이지의 첫번째 아이템이 데이타 배열에서 몇번째인지
	const startIndex = (currentPage - 1) * itemsPerPage;
	//현재 페이지의 마지막 아이템이 데이타 배열에서 몇번째인지
	const endIndex = startIndex + itemsPerPage;
	//startIndex와 endIndex를 사용해서 배열반환
	const displayedWikiPages = currentWikiPages.slice(startIndex, endIndex);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		setPage(pageNumber);
	};

	const navigate = useNavigate();
	const moveInfopage = (
		path: string,
		title: string,
		content: string,
		seq: string,
	) => {
		navigate(`/InfoPage${path}`, { state: { path, title, content, seq } });
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const modalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};

	const closeModal = (event: { stopPropagation: () => void }) => {
		event.stopPropagation();
		modalOpen();
	};

	useEffect(() => {
		setPage(1);
	}, []);

	return (
		<Container>
			{isModalOpen && (
				<Overlay onClick={closeModal}>
					<Modal
						setIsModalOpen={setIsModalOpen}
						setCurrentWikiPages={setCurrentWikiPages}
					></Modal>
				</Overlay>
			)}
			<Wrapper>
				<TitleWrapper>
					<Label text="코딩허브 위키백과" title />
					<Button text="등록하기" onClick={modalOpen} />
				</TitleWrapper>
				<WikiCardList>
					{displayedWikiPages.map((wiki, i) => (
						<WikiCard
							key={i}
							title={wiki.title}
							content={wiki.content}
							onClick={() =>
								moveInfopage(wiki.path, wiki.title, wiki.content, wiki.seq)
							}
						/>
					))}
				</WikiCardList>
				<PaginationBox
					page={page}
					itemsCountPerPage={itemsPerPage}
					totalItemsCount={currentWikiPages.length}
					onChange={handlePageChange}
				></PaginationBox>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
`;
const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
const WikiCardList = styled.li`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 20px;
	gap: 10px;
`;
const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`;
