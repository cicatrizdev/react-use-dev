export interface WithFormProps {
	value: unknown;
	onChange?: (value: unknown) => void;
	onBlur?: () => void;
	onFocus?: () => void;
	touched?: boolean;
	disabled?: boolean;
	required?: boolean;
}

export interface WithFormConfig {
	initialValue?: unknown;
	required?: boolean;
	disabled?: boolean;
}

export type WrappedComponentProps<P> = P & WithFormProps;
