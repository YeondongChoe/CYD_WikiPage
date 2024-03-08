import React, { ChangeEvent } from "react";
import styled from "styled-components";

type InputProps = {
	value: string;
	placeholder?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, onChange, placeholder }: InputProps) => {
	return (
		<Component>
			<CustomInput
				type="text"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			></CustomInput>
		</Component>
	);
};

const Component = styled.div`
	border-bottom: 1px solid #00a495;
	flex: 1;
`;
const CustomInput = styled.input`
	width: 100%;
	padding: 5px;
	font-size: 16px;
`;
