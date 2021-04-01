import React from 'react'
import LoginForm from './LoginForm'
import styles from './Login.module.css'
import { login } from '../../../redux/auth-reducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'


class LoginContainer extends React.Component {
     render() {
          if (this.props.isAuth) return <Redirect to='/profile' />
          return (
               <div className={styles.loginContainer}>
                    <h1>Login</h1>
                    <div className={styles.formBlock}>
                         <LoginForm {...this.props} />
                    </div>
               </div>
          )
     }
}

let mapStateToProps = state => ({
     isAuth: state.auth.isAuth,
     messages: state.auth.messages,
     captcha: state.auth.captcha
})



export default compose(connect(mapStateToProps, { login }))(LoginContainer)