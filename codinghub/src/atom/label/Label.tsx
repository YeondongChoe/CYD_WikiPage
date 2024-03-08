import React from "react";
import styled from "styled-components";

type LabelProps = {
	text: string;
	title?: boolean;
};

export const Label = ({ text, title }: LabelProps) => {
	return (
		<Component $title={title}>
			<span>{text}</span>
		</Component>
	);
};

const Component = styled.span<{ $title?: boolean }>`
	font-size: ${({ $title }) => ($title ? "20px;" : "16px;")};
`;
