import React from 'react';

export const TextInput = ({
  type,
  className,
  value,
  name,
  maxlength,
  onChange,
  label,
  error,
  blur,
  focus
}) => {
  return (
    <div className="contact-form-vertical">
      <div className="contact-form-group">
        <div className="contact-controls">
          <input
            type={type}
            className={className}
            name={name}
            value={value}
            onChange={onChange}
            maxLength={maxlength}
          />
          <span className="floating-label">{label}</span>
        </div>
      </div>
    </div>
  );
};
