import React from 'react'
import styles from './LoginForm.module.css'
import { Form, Field } from 'react-final-form'


let LoginForm = props => {
     const onSubmit = async values => {
          props.login(values.email, values.password, values.rememberMe, values.captcha)
     }
     return (
          <Form
               onSubmit={onSubmit}
               validate={values => {
                    const errors = {}
                    if (!values.email) {
                         errors.email = styles.required
                    }
                    if (!values.password) {
                         errors.password = styles.required
                    }
                    return errors
               }}
               render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                         <div className={styles.emailAndPasswordContainer}>
                              <Field name="email">
                                   {({ input, meta }) => {
                                        let hasError = meta.error && meta.touched && meta.error;

                                        return (<div>
                                             <input className={`${styles.input} ${hasError}`} {...input} type="text" placeholder="email..." />
                                        </div>)
                                   }}
                              </Field>
                              <Field name="password">
                                   {({ input, meta }) => {
                                        let hasError = meta.error && meta.touched && meta.error;

                                        return (<div>
                                             <input className={`${styles.input} ${hasError}`} {...input} type="password" placeholder="password..." />
                                        </div>)
                                   }}
                              </Field>
                         </div>
                         <div className={styles.rememberMe}>
                              <Field name="rememberMe" id='rememberMe' component="input" type="checkbox" />
                              <label htmlFor='rememberMe' >
                                   remember me
                              </label>
                         </div>
                         <div>
                              {!props.captcha
                                   ? null
                                   : <div className={styles.captchContainer}>
                                        <img className={styles.captcha} src={props.captcha} alt='captcha' />
                                        <Field autoFocus={true} className={styles.input} name="captcha" component="input" />
                                   </div>}
                              <p className={styles.error}>{props.messages}</p>
                         </div>
                         <div className={styles.buttons}>
                              <button className={styles.button} type="submit" disabled={submitting}>
                                   Login
                              </button>
                              <button className={styles.button} type="button" onClick={form.reset} disabled={submitting || pristine}>
                                   Reset
                              </button>
                              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                         </div>
                    </form>
               )}
          />
     )
}

export default LoginForm