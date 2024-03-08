import React from "react";
import styled from "styled-components";

type ButtonProps = {
	text: string;
	onClick?: () => void;
	width?: string;
	reverse?: boolean;
};

export const Button = ({ text, onClick, width, reverse }: ButtonProps) => {
	return (
		<Component $width={width} $reverse={reverse} onClick={onClick}>
			<CustomSpan>{text}</CustomSpan>
		</Component>
	);
};

const Component = styled.div<{ $width?: string; $reverse?: boolean }>`
	width: ${(props) => props.$width || "auto"};
	height: 30px;
	padding: 5px;
	${({ $reverse }) =>
		$reverse
			? `color: #00a495; border: 1px solid #00a495;`
			: `background-color: #00a495; color: white;`}
	cursor: pointer;
`;
const CustomSpan = styled.span`
	display: flex;
	justify-content: center;
	font-size: 14px;
	width: 100%;
`;
