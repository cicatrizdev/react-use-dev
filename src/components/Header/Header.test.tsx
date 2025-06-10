import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router';

const mockNavigate = jest.fn();

jest.mock('react-router', () => ({
	...jest.requireActual('react-router'),
	useNavigate: () => mockNavigate,
}));

describe('Header', () => {
	test('deve renderizar o header na tela', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
		expect(screen.getByTestId('header')).toBeInTheDocument();
	});
	test('deve disparar função de navegação ao clicar no logo', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
		const logo = screen.getByAltText('logo');
		fireEvent.click(logo);
		expect(mockNavigate).toHaveBeenCalledWith('/');
		expect(mockNavigate).not.toHaveBeenCalledWith('/cart');
	});
});
