import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Label } from "../../atom/label/Label";
import { Button } from "../../atom/button/Button";
import { Input } from "../../atom/input/Input";
import { Textarea } from "../../atom/textarea/Textarea";
import { wikiPages } from "../../dummy";

type ModalProps = {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setCurrentWikiPages: React.Dispatch<
		React.SetStateAction<
			{
				seq: string;
				path: string;
				title: string;
				content: string;
			}[]
		>
	>;
};

export const Modal = ({ setIsModalOpen, setCurrentWikiPages }: ModalProps) => {
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [placeholder, setPlaceholder] = useState<string>("");

	const handleModalContentClick = (event: { stopPropagation: () => void }) => {
		event.stopPropagation();
	};

	const handleSaveClick = () => {
		if (title && content) {
			// 새로운 항목을 wikiPages에 추가
			const newPage = {
				seq: `${wikiPages.length + 1}`,
				path: `/page${wikiPages.length + 1}`, // 다음 페이지 경로
				title,
				content,
			};

			// 기존 데이터를 변경하지 않고 새로운 배열을 생성
			const updatedWikiPages = [...wikiPages, newPage];
			setCurrentWikiPages((prev) => [...prev, newPage]);
			console.log(updatedWikiPages);

			// 모달 닫기
			setIsModalOpen(false);
		} else {
			setPlaceholder("필수입력값 입니다.");
		}
	};

	return (
		<ModalWrapper onClick={handleModalContentClick}>
			<TitleWrapper>
				<Label text="제목" />
				<Input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder={placeholder}
				/>
			</TitleWrapper>
			<BodyWrapper>
				<Label text="내용" />
				<Textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder={placeholder}
				/>
			</BodyWrapper>
			<Button text="저장" onClick={handleSaveClick} />
		</ModalWrapper>
	);
};

const ModalWrapper = styled.div`
	width: 500px;
	height: 600px;
	padding: 10px;
	background-color: white;
	border: 1px solid #00a495;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
const BodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
