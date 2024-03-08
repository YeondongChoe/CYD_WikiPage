import React, { ChangeEvent } from "react";
import styled from "styled-components";

type TextareaProps = {
	value: string;
	placeholder?: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = ({ value, onChange, placeholder }: TextareaProps) => {
	return (
		<Component>
			<CustomInputTextarea
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</Component>
	);
};

const Component = styled.div``;
const CustomInputTextarea = styled.textarea`
	width: 100%;
	height: 450px;
	padding: 5px;
	font-size: 14px;
`;
