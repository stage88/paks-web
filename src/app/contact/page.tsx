'use client'
import * as React from 'react'

import BreadCrumb from '@/components/breadCrumb'
import Page from '@/components/page'

const formAction = 'https://mailthis.to/pakscontractors'
const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.263441238843!2d149.17542021524898!3d-35.32427908027913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164c348a768bed%3A0xa50677f4168ae5fa!2s1%2F75%20Wollongong%20St%2C%20Fyshwick%20ACT%202609!5e0!3m2!1sen!2sau!4v1573129540737!5m2!1sen!2sau'

const isEmailValid = (value: string) => {
  if (value == null) {
    return true
  }

  return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) != null
}

const ValidationError = ({ field, errors }: { field: string; errors: Record<string, unknown> }) => (
  <>{errors && errors[field] && <div className="validation-error">{errors[field] as string}</div>}</>
)

interface State {
  [key: string]: any
}

class ContactUs extends React.Component<Record<string, never>, State> {
  state = {
    message: '',
    name: '',
    _replyto: '',
    _subject: '',
    isValid: false,
    errors: {
      message: null,
      name: null,
      email: null,
      subject: null,
    },
  }

  handleUserInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name: string = e.target.name
    const value: string = e.target.value
    this.setState({ [name]: value }, () => this.validate(name))
  }

  validateField(field: string, value: unknown) {
    let error = null

    switch (field) {
      case 'message':
        if (value == null || value === '') {
          error = 'Message is required.'
        }
        break
      case 'name':
        if (value == null || value === '') {
          error = 'Name is required.'
        }
        break
      case '_replyto':
        if (value == null || value === '') {
          error = 'Email is required.'
        } else if (isEmailValid(String(value)) !== true) {
          error = 'Email is not valid.'
        }
        break
      case '_subject':
        if (value == null || value === '') {
          error = 'Subject is required.'
        }
        break
      default:
        break
    }

    return error
  }

  validate(field: string | undefined = undefined) {
    const fields = ['message', 'name', '_replyto', '_subject']

    const errors = {
      ...this.state.errors,
    }

    if (field != null) {
      ;(errors as any)[field] = this.validateField(field, (this.state as any)[field])
    } else {
      for (const key of fields) {
        ;(errors as any)[key] = this.validateField(key, (this.state as any)[key])
      }
    }

    const isValid = this.isValid(errors)

    this.setState({
      errors,
      isValid,
    })

    return isValid
  }

  isValid(errors: Record<string, unknown>) {
    for (const key in errors) {
      if ((errors as any)[key] != null) {
        return false
      }
    }

    return true
  }

  onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const isValid = this.validate()
    if (!isValid) {
      event.preventDefault()
      return false
    }

    return true
  }

  render() {
    return (
      <Page>
        <BreadCrumb title="Contact" />
        <section className="contact-section section_padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="text-heading">Get in Touch</h3>
              </div>
              <div className="col-lg-8">
                <form action={formAction} method="POST" className="form-contact contact_form" id="contactForm">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control w-100"
                          name="message"
                          id="message"
                          value={this.state.message}
                          onChange={this.handleUserInput}
                          cols={30}
                          rows={9}
                          placeholder="Enter Message"
                        ></textarea>
                        <ValidationError field="message" errors={this.state.errors} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="name"
                          id="name"
                          value={this.state.name}
                          onChange={this.handleUserInput}
                          type="text"
                          placeholder="Enter your name"
                        />
                        <ValidationError field="name" errors={this.state.errors} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="_replyto"
                          id="email"
                          value={this.state._replyto}
                          onChange={this.handleUserInput}
                          type="email"
                          placeholder="Enter email address"
                        />
                        <ValidationError field="_replyto" errors={this.state.errors} />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="_subject"
                          id="subject"
                          value={this.state._subject}
                          onChange={this.handleUserInput}
                          type="text"
                          placeholder="Enter Subject"
                        />
                        <ValidationError field="_subject" errors={this.state.errors} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button type="submit" disabled={!this.state.isValid} onClick={this.onSubmit} className="button button-contactForm btn_1">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-home"></i>
                  </span>
                  <div className="media-body">
                    <h3>Fyshwick, ACT</h3>
                    <p>Unit 1 75 Wollongong St Fyshwick ACT 2609</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-tablet"></i>
                  </span>
                  <div className="media-body">
                    <h3>Paul 0411 777 877</h3>
                    <p>Mon to Fri 9am to 5pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-email"></i>
                  </span>
                  <div className="media-body">
                    <h3>
                      <a href="mailto:office@pakscontractors.com.au">office@pakscontractors.com.au</a>
                    </h3>
                    <p>Send us your query anytime</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-sm-block mb-5 pb-4 section_padding">
              <iframe src={mapUrl} width="100%" height="450" style={{ border: 0 }} aria-label="PA & KS Contractors map" />
            </div>
          </div>
        </section>
      </Page>
    )
  }
}

export default ContactUs
