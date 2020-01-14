import React, {useState, createContext} from "react";
import {element, object} from "prop-types";

export const FormContext = createContext({
  handleInputChange: () => undefined,
  value: {}
})

const FormProvider = ({children, initialValues = {}}) => {
  const [state, setState] = useState(initialValues)

  function handleInputChange({target: {name, value}}) {
    setState(state => ({
      ...state,
      [name]: value
    }))
  }

  const context = {
    handleInputChange,
    values: state
  }

  return (
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  )
}
export default FormProvider;
