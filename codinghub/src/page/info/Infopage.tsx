import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Label } from "../../atom/label/Label";
import { useLocation, useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Button } from "../../atom/button/Button";
import { PageAtom } from "../../store/util/PageNation";
import { useSetRecoilState, useRecoilState } from "recoil";
import { Input } from "../../atom/input/Input";
import { Textarea } from "../../atom/textarea/Textarea";
import { wikiInfoState } from "../../store/util/WikiData";

type InfoPageProps = {
	seq?: string;
	title?: string;
	content?: string;
	path?: string;
};

export const InfoPage = ({
	seq: propSeq = "",
	title: propTitle = "",
	content: propContent = "",
	path: propPath = "",
}: InfoPageProps) => {
	const location = useLocation();
	const navigate = useNavigate();
	const history = createBrowserHistory();

	const [wikiPages, setWikiPages] = useRecoilState(wikiInfoState);

	const [seq, setSeq] = useState<string>(propSeq);
	const [title, setTitle] = useState<string>(propTitle);
	const [content, setContent] = useState<string>(propContent);
	const [path, setPath] = useState<string>(propPath);
	console.log(seq);
	console.log(title);
	console.log(content);
	console.log(path);

	const setPage = useSetRecoilState(PageAtom);

	//본문의 내용 중 데이터의 타이틀과 같은 값이 있다면 해당 페이지로 이동
	const handleWordClick = (word: string) => {
		const matchedWiki = wikiPages.find((wiki) => wiki.title.includes(word));

		if (matchedWiki) {
			// 클릭한 단어와 매칭되는 페이지로 이동
			history.push(`/InfoPage${matchedWiki.path}`, {
				state: {
					seq: matchedWiki.seq,
					title: matchedWiki.title,
					content: matchedWiki.content,
					path: matchedWiki.path,
				},
			});
			setSeq(matchedWiki.seq);
			setTitle(matchedWiki.title);
			setContent(matchedWiki.content);
			setPath(matchedWiki.path);
		}
	};

	const moveToMainPage = () => {
		navigate("/");
		setPage(1);
	};
	const [isEdit, setIsEdit] = useState(false);
	const editWiki = () => {
		setIsEdit(true);
	};
	const saveWiki = (seq: string) => {
		const pageIndex = wikiPages.findIndex((wiki) => wiki.seq === seq);
		console.log(seq);

		if (pageIndex !== -1) {
			setWikiPages((prevWikiPages) => {
				const updatedWikiPages = [...prevWikiPages];
				updatedWikiPages[pageIndex] = { seq, title, content, path };
				return updatedWikiPages;
			});
		}
		setIsEdit(false);
	};

	console.log(wikiPages);

	useEffect(() => {
		// location.state가 존재하면 해당 값을 초기값으로 설정
		if (location.state) {
			setSeq(location.state.seq || "");
			setTitle(location.state.title || "");
			setContent(location.state.content || "");
			setPath(location.state.path || "");
		}
	}, [location.state]);

	return (
		<Container>
			<Wrapper>
				<TitleWrapper>
					{isEdit ? (
						<Input
							value={title as string}
							onChange={(e) => setTitle(e.target.value)}
						></Input>
					) : (
						<Label text={title as string} title />
					)}
					<Button text="메인페이지로 돌아가기" onClick={moveToMainPage} />
				</TitleWrapper>
				<ButtonWrapper>
					{isEdit ? (
						<Button
							text="저장"
							width="100px"
							reverse
							onClick={() => saveWiki(seq)}
						/>
					) : (
						<Button text="수정" width="100px" reverse onClick={editWiki} />
					)}
				</ButtonWrapper>
				{isEdit ? (
					<ClickableWordWrapper>
						<Textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
						></Textarea>
					</ClickableWordWrapper>
				) : (
					<ClickableWordWrapper>
						{content.split(" ").map((word: string, index: number) => (
							<ClickableWord
								key={index}
								onClick={() => handleWordClick(word)}
								$clickable={wikiPages.some((wiki) => wiki.title.includes(word))}
							>
								{word}
							</ClickableWord>
						))}
					</ClickableWordWrapper>
				)}
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
	gap: 10px;
	padding-bottom: 10px;
`;
const ClickableWordWrapper = styled.div`
	padding-top: 20px;
`;
const ClickableWord = styled.span<{ $clickable: boolean }>`
	cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
	color: ${({ $clickable }) => ($clickable ? "blue" : "inherit")};
	cursor: pointer;
	margin-right: 2px;

	&:hover {
		text-decoration: underline;
	}
`;
const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
