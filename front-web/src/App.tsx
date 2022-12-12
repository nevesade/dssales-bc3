import './App.css';
import Header from './components/header';
import Filter from './components/header/filter';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            labels={['Uberlândia', 'Ituiutaba', 'Araguari']}
            name={'Lojas'}
            series={[40, 30, 30]}
          />
          <PieChartCard
            labels={['Crédito', 'Débito', 'Dinheiro']}
            name={'Pagamento'}
            series={[20, 50, 30]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
