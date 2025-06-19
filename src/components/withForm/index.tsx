import { useCallback, useState, type ComponentType } from 'react';

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

export type WithFormHOC = <P extends object>(
	WrappedComponent: ComponentType<WrappedComponentProps<P>>,
	config?: WithFormConfig
) => ComponentType<Omit<P, keyof WithFormProps> & WithFormConfig>;

const withForm: WithFormHOC = <P extends object>(
	WrappedComponent: ComponentType<WrappedComponentProps<P>>,
	config?: WithFormConfig
) => {
	const EnhancedComponent: ComponentType<Omit<P, keyof WithFormProps> & WithFormConfig> = (
		props
	) => {
		const {
			initialValue,
			required = false,
			disabled = false,
			...componentProps
		} = { ...config, ...props };

		const [value, setValue] = useState(initialValue);
		const [touched, setTouched] = useState(false);

		const handleChange = useCallback(
			(newValue: unknown) => {
				setValue(newValue);
				setTouched(true);

				if ('onChange' in props && typeof props.onChange === 'function') {
					props.onChange(newValue);
				}
			},
			[props]
		);

		const handleBlur = useCallback(() => {
			setTouched(true);

			if ('onBlur' in props && typeof props.onBlur === 'function') {
				props.onBlur();
			}
		}, [props]);

		const handleFocus = useCallback(() => {
			if ('onFocus' in props && typeof props.onFocus === 'function') {
				props.onFocus();
			}
		}, [props]);

		const enhancedProps: WrappedComponentProps<P> = {
			...(componentProps as P),
			value,
			onChange: handleChange,
			onBlur: handleBlur,
			onFocus: handleFocus,
			touched,
			disabled: disabled || Boolean((props as Record<string, unknown>).disabled),
			required: required || Boolean((props as Record<string, unknown>).required),
		};

		return <WrappedComponent {...enhancedProps} />;
	};

	const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	EnhancedComponent.displayName = `withForm(${displayName})`;

	return EnhancedComponent;
};

export default withForm;
