import './styles.css';
import { ReactComponent as Avatar } from '../../assets/avatar-icon.svg';

function SalesSummaryCard() {
  return (
    <div className="sales-summary-card base-card">
      <Avatar />
      <h3 className="sales-summary-card-value">534.00</h3>
      <span className="sales-summary-card-label">Média</span>
    </div>
  );
}

export default SalesSummaryCard;
