import React from "react";
import styled from "styled-components";
import { Label } from "../../atom/label/Label";

type WikiCardProps = {
	title: string;
	content: string;
	onClick: () => void;
};

export const WikiCard = ({ title, content, onClick }: WikiCardProps) => {
	return (
		<Component onClick={onClick}>
			<Wrapper>
				<Label text={title} />
				<div>{content}</div>
			</Wrapper>
		</Component>
	);
};

const Component = styled.div`
	width: 600px;
	height: 150px;
	border: 1px solid #00a495;
`;
const Wrapper = styled.div`
	padding: 10px;
	cursor: pointer;
	div {
		padding-top: 10px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		max-height: 150px;
		-webkit-line-clamp: 4;
	}
`;
