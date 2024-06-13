import {
  InputWrapper,
  InputInnerWrapper,
  InputError,
  InputSuccess,
  DescriptionWrapper,
} from "./style";
import Image from "next/image";

const Input = (props) => {
  const renderInput = () => {
    return (
      (props.type === "text" ||
        props.type === "email" ||
        props.type === "password") && (
        <>
          <input
            type={props.type}
            id={props.id}
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
            value={props.value}
            onFocus={props.onFocus}
            disabled={props.disabled}
          />
          <span className="placeholder">
            {props.search ? "Search" : props.placeholder}
          </span>
        </>
      )
    );
  };

  const renderTextarea = () => {
    return (
      props.type === "textarea" && (
        <>
          <textarea
            id={props.id}
            onChange={props.onChange}
            value={props.value}
            onFocus={props.onFocus}
            disabled={props.disabled}
          />
          <span className="placeholder">{props.placeholder}</span>
        </>
      )
    );
  };

  const renderError = () => {
    return props.error && <InputError>{props.error}</InputError>;
  };

  const renderSucces = () => {
    return props.success && <InputSuccess>{props.success}</InputSuccess>;
  };

  const renderIcons = () => {
    return (
      props.icon && (
        <span className="icon">
          {!props.success && !props.error && !props.search && (
            <Image src={props.icon} width={20} height={20} alt="close" />
          )}
          {props.success && (
            <Image
              src="/svg/checkmark.svg"
              alt="checkmark"
              width={20}
              height={20}
            />
          )}
          {props.error && (
            <Image
              src="/svg/warning.svg"
              alt="warning"
              width={20}
              height={20}
            />
          )}
          {props.search && (
            <Image src="/svg/close-x.svg" alt="close" width={20} height={20} />
          )}
        </span>
      )
    );
  };

  const renderSearchIcon = () => {
    return (
      props.search && (
        <span className="search">
          <Image
            src="/svg/search-icon.svg"
            alt="search-icon"
            width={20}
            height={20}
          />
        </span>
      )
    );
  };

  const renderDescription = () => {
    return (
      <>
        {props.description && (
          <DescriptionWrapper isError={props.error}>
            {props.description}
          </DescriptionWrapper>
        )}
      </>
    );
  };

  return (
    <InputWrapper>
      <InputInnerWrapper
        hasValue={props.value}
        search={props.search}
        disabled={props.disabled}
        error={props.error}
        success={props.success}
      >
        {renderSearchIcon()}
        {renderInput()}
        {renderTextarea()}
        {renderIcons()}
        {props.children}
      </InputInnerWrapper>
      {renderError()}
      {renderSucces()}
      {renderDescription()}
    </InputWrapper>
  );
};

export default Input;
