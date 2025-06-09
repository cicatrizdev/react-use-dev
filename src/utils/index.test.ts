import { formatPrice, calculateTotalPrice, calculateTotalPriceWithDiscount } from '.';

describe('Testando funções utilitárias do projeto', () => {
	test('deve formatar o preço corretamente', () => {
		expect(formatPrice(10)).toBe('R$10,00');
	});
});
