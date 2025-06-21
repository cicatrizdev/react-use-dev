/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import type { Category } from '../../types';

export const CategoriesContext = createContext<{
	categories: Category[];
}>({
	categories: [],
});

export const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
	const {
		data: categories,
		error,
		fetchData,
	} = useFetch<Category[]>({
		url: 'http://localhost:3001/categories',
		method: 'GET',
	});

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (error) {
			console.error('Error fetching categories:', error);
		}
	}, [error]);

	return (
		<CategoriesContext.Provider value={{ categories: categories || [] }}>
			{children}
		</CategoriesContext.Provider>
	);
};
