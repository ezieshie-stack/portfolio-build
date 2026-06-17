import type { ChangeEvent } from "react";

type CommonProps = {
  label?: string;
  id: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  name?: string;
  autoComplete?: string;
};

type InputProps = CommonProps & {
  type?: string;
  multiline?: false;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TextareaProps = CommonProps & {
  multiline: true;
  rows?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

type Props = InputProps | TextareaProps;

export function Input(props: Props) {
  const { label, id, required, placeholder, className, name, autoComplete } = props;
  return (
    <div className={`ds-input-group ${className ?? ""}`.trim()}>
      {label && (
        <label htmlFor={id} className="ds-input-label">
          {label}
          {required && <span className="req">*</span>}
        </label>
      )}
      {props.multiline ? (
        <textarea
          id={id}
          name={name}
          rows={props.rows ?? 5}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          className="ds-textarea"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={props.type ?? "text"}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          className="ds-input"
        />
      )}
    </div>
  );
}
