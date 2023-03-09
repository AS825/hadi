import React from 'react'

export default function FilterComponent(props) {
  const { currency, options, label, onChange } = props;
    return (
      <div>
        <label>{label}</label>
        <select
        name="currency"
        id=""
        className="select-ctn"
        value={currency}
        onChange={onChange}
      >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
