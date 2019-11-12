import React, { Component } from 'react';
import FormCard from './FormCard';

class FormCardFundTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
    }
  }

  componentDidMount() {
    this.setState({ isComplete: false })
  }

  completeFundTransfer = () => {
    this.setState({ isComplete: true })
  }

  render() {
    const { isComplete } = this.state;
    const { FORM_CONTENT, FORM_CONTENT_SUCCESS } = this.props;
    return (
      isComplete
        ? (
          <FormCard
            title={FORM_CONTENT_SUCCESS.title}
            subtitle={FORM_CONTENT_SUCCESS.subtitle}
            formLabel={FORM_CONTENT_SUCCESS.formLabel}
            buttonText={FORM_CONTENT_SUCCESS.buttonText}
            buttonLinkTo={FORM_CONTENT_SUCCESS.buttonLinkTo}
            hideInput
          />
        )
        : (
          <FormCard
            title={FORM_CONTENT.title}
            subtitle={FORM_CONTENT.subtitle}
            buttonText={FORM_CONTENT.buttonText}
            placeholder={FORM_CONTENT.placeholder}
            buttonOnClick={this.completeFundTransfer}
          />
        )
    )
  }
}

export default FormCardFundTransfer;
