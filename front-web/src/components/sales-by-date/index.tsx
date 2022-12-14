import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';

const initialData = [
  {
    x: '2020-01-01',
    y: 45
  },
  {
    x: '2020-01-02',
    y: 55
  },
  {
    x: '2020-01-03',
    y: 39
  },
  {
    x: '2020-01-04',
    y: 25
  },
  {
    x: '2020-01-05',
    y: 35
  },
  {
    x: '2020-01-06',
    y: 20
  },
  {
    x: '2020-01-07',
    y: 50
  },
  {
    x: '2020-01-01',
    y: 30
  }
];
function SalesByDate() {
  const [salesByDate, setSalesByDate] = useState();

  useEffect(() => {
    makeRequest
      .get('/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE')
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução das vendas</h4>
        <span className="sales-by-date-period">01/01/2017 a 31/01/2017</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">R$ 464.988,00</h2>
          <span className="sales-by-date-quantity-label">Vendas no período</span>
          <span className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: initialData }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
