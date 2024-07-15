import { ToggleWrap, ToggleInnerWrap, ToggleLabel } from "./style";

const Toggle = ({
  id,
  name,
  checked,
  onChange,
  falseLabel,
  trueLabel,
  small,
  disabled,
}) => {
  return (
    <ToggleWrap>
      <ToggleLabel checked={!checked}>{falseLabel ?? "Inactive"}</ToggleLabel>
      <ToggleInnerWrap
        className={"toggle-switch" + (small ? " small-switch" : "")}
        small={small}
      >
        <input
          type="checkbox"
          name={name}
          className="toggle-switch-checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        {id ? (
          <label className="toggle-switch-label" htmlFor={id}>
            <span
              className={
                disabled
                  ? "toggle-switch-inner toggle-switch-disabled"
                  : "toggle-switch-inner"
              }
            />
            <span
              className={
                disabled
                  ? "toggle-switch-switch toggle-switch-disabled"
                  : "toggle-switch-switch"
              }
            />
          </label>
        ) : null}
      </ToggleInnerWrap>
      <ToggleLabel checked={checked}>{trueLabel ?? "Active"}</ToggleLabel>
    </ToggleWrap>
  );
};

export default Toggle;
