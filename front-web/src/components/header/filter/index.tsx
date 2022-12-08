import './styles.css';
import 'flatpickr/dist/themes/material_green.css';

import FlatPicker from 'react-flatpickr';
import FlatPickerlib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

FlatPickerlib.localize(Portuguese);

function Filter() {
  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <div className="filter-container  base-card">
      <FlatPicker
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Selecione um período"
        options={{
          mode: 'range',
          dateFormat: 'd/m/y',
          showMonths: 2
        }}
      />

      <select className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;
