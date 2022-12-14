export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-Br', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};
