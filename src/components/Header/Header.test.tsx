import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router';

const mockNavigate = jest.fn();

jest.mock('react-router', () => ({
	...jest.requireActual('react-router'),
	useNavigate: () => mockNavigate,
}));

describe('Header', () => {
	beforeEach(() => {
		console.log('estou rodando antes de cada teste');
	});

	beforeAll(() => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
	});

	test('deve renderizar o header na tela', () => {
		expect(screen.getByTestId('header')).toBeInTheDocument();
	});
	test('deve disparar função de navegação ao clicar no logo', () => {
		const logo = screen.getByAltText('logo');
		fireEvent.click(logo);
		expect(mockNavigate).toHaveBeenCalledWith('/');
		expect(mockNavigate).not.toHaveBeenCalledWith('/cart');
	});
	test('deve disparar função de navegação ao clicar no carrinho', () => {
		const cart = screen.getByAltText('cart');
		fireEvent.click(cart);
		expect(mockNavigate).toHaveBeenCalledWith('/cart');
	});
});
