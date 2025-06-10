import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
	test('deve renderizar o header na tela', () => {
		render(<Header />);
		expect(screen.getByTestId('header')).toBeInTheDocument();
	});
});
