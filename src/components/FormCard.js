import React, { Component } from 'react'
import Button from './Button'
import '../styles/FormCard.css'

function setGlobalVar(key, value) {
  window[key] = value;
}

class FormCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    }
  }

  updateInputText = e => {
    this.setState({ inputText: e.target.value })
  }

  render() {
    const { inputText } = this.state
    const {
      title,
      subtitle,
      formLabel,
      buttonText,
      setInputGlobalVariableOnButtonClick,
      buttonLinkTo,
      placeholder,
      hideInput,
      buttonOnClick,
      isComplete,
    } = this.props
    const isFormInput = inputText.length > 0
    const disableButton = (
      isComplete
        ? false
        : isFormInput
          ? false
          : true
        : true
    )
    const onClick = (
      buttonOnClick
        ? buttonOnClick
        : (
          setInputGlobalVariableOnButtonClick
            ? setGlobalVar(setInputGlobalVariableOnButtonClick, inputText)
            : () => {}
        ) : () => {}
    )
    return (
      <div className={'cardWrapper'}>
        <div className={'cardContentContainer'}>
          <div className={'cardContentTitles'}>
            <div className={'cardTitle'}>
              {title}
            </div>
            {subtitle && (
              <div className={'cardSubtitle'}>
                {subtitle}
              </div>
            )}
          </div>
          <div className={'cardFormLabel'}>
            {formLabel}
          </div>
          {!hideInput && (
            <div className={'cardFormInputWrapper'}>
              <input
                type={'text'}
                className={'cardFormInput'}
                onChange={this.updateInputText}
                placeholder={placeholder}
              />
            </div>
          )}
        </div>
        <div className={'formButtonWrapper'}>
          <Button
            buttonText={buttonText}
            linkTo={buttonLinkTo}
            disabled={disableButton}
            onClick={onClick}
          />
        </div>
      </div>
    )
  }
}

export default FormCard;
