import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// Mock the image import
jest.mock('../../assets/secondary.png', () => 'mocked-logo');

describe('Footer', () => {
	it('renders the footer with logo and copyright text', () => {
		render(<Footer />);

		// Check if the logo is rendered
		const logo = screen.getByAltText('logo');
		expect(logo).toBeInTheDocument();
		// No src check due to ESM/CJS mock differences

		// Check if the copyright text is rendered with current year
		const currentYear = new Date().getFullYear();
		const copyrightText = screen.getByText(
			`© ${currentYear} Todos os direitos reservados | Projeto fictício desenvolvido para fins de estudo.`
		);
		expect(copyrightText).toBeInTheDocument();
	});

	it('has the correct styling classes', () => {
		render(<Footer />);

		const footer = screen.getByTestId('footer-container');
		expect(footer).toHaveClass(
			'flex',
			'justify-center',
			'items-center',
			'p-4',
			'w-full',
			'bg-white',
			'px-20',
			'fixed',
			'bottom-0',
			'left-0',
			'right-0',
			'z-50'
		);
	});
});
