import { useCallback, useState } from "react";
import isEmail from "validator/es/lib/isEmail";


function Validation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);

  function onChange(e) {
    const target = e.target;
    const { name, value } = target;
    if (name === 'email' && !isEmail(value)) {
      target.setCustomValidity(
        'Укажите правильно e-mail в формате name@example.ru'
      );
    } else {
      target.setCustomValidity('');
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setValid(target.closest('form').checkValidity());
  }

  const resetValidation = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValid(newIsValid);
      setValues(newValues);
      setErrors(newErrors);
    },
    [setValid, setValues, setErrors]
  );

  return {
    values,
    errors,
    isValid,
    onChange,
    resetValidation,
  };
}

export default Validation;
