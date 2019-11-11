import React, { Component } from 'react'
import Button from './Button'
import './FormCard.css'

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
      buttonTextLeft,
      buttonTextRight,
      onClickNext,
    } = this.props
    const isFormInput = inputText.length > 0
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
          <div className={'cardFormInputWrapper'}>
            <input
              type={'text'}
              className={'cardFormInput'}
              onChange={this.updateInputText}
            />
          </div>
        </div>
        <div className={'formButtonWrapper'}>
          <Button
            buttonText={buttonTextLeft}
            onClick={onClickNext}
            disabled={!isFormInput}
          />
        </div>
      </div>
    )
  }
}

export default FormCard
