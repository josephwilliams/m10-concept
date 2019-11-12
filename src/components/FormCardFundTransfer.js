import React, { Component } from 'react';
import classnames from 'classnames';
import FormCard from './FormCard';
import Button from './Button';

class FormCardFundTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextRecipient: '',
    }
  }

  updateInputRecipient = e => {
    this.setState({ inputTextRecipient: e.target.value })
  }

  render() {
    const { FORM_CONTENT, FORM_CONTENT_SUCCESS, isComplete } = this.props;
    const isFormInput = FORM_CONTENT.inputTextAmount.length > 0
    return (
      isComplete
        ? (
          <FormCard
            title={FORM_CONTENT_SUCCESS.title}
            subtitle={FORM_CONTENT_SUCCESS.subtitle}
            formLabel={FORM_CONTENT_SUCCESS.formLabel}
            buttonText={FORM_CONTENT_SUCCESS.buttonText}
            buttonLinkTo={FORM_CONTENT_SUCCESS.buttonLinkTo}
            isComplete
            hideInput
          />
        )
        : (
          <div className={'cardWrapper'}>
            <div className={'cardContentContainer'}>
              <div className={'cardContentTitles'}>
                <div className={'cardTitle'}>
                  {FORM_CONTENT.title}
                </div>
                {FORM_CONTENT.subtitle && (
                  <div className={'cardSubtitle'}>
                    {FORM_CONTENT.subtitle}
                  </div>
                )}
              </div>
              <div className={'cardFormLabel'}>
                {FORM_CONTENT.formLabel}
              </div>
              {!FORM_CONTENT.hideInput && (
                <div className={'cardFormInputWrapper'}>
                  <input
                    type={'number'}
                    className={'cardFormInput'}
                    onChange={FORM_CONTENT.onInputChange}
                    placeholder={FORM_CONTENT.placeholder}
                  />
                </div>
              )}
              {FORM_CONTENT.includeRecipient && (
                <div className={'cardFormInputWrapper'}>
                  <input
                    type={'text'}
                    className={'cardFormInput'}
                    onChange={this.updateInputRecipient}
                    placeholder={FORM_CONTENT.placeholder}
                  />
                </div>
              )}
            </div>
            <div className={'formButtonWrapper'}>
              <Button
                buttonText={FORM_CONTENT.buttonText}
                linkTo={FORM_CONTENT.buttonLinkTo}
                disabled={!isFormInput}
                onClick={FORM_CONTENT.buttonOnClick}
              />
            </div>
          </div>
        )
    )
  }
}

export default FormCardFundTransfer;
