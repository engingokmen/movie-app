import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useSetIsAuthenticated } from '../../context/authenticate'
import { useNavigate } from 'react-router-dom'
import { texts } from '../../texts'

const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup
            .string()
            .test(
                'one-capital',
                (d) => `${d.path} doesn't include a capital letter`,
                (value) => /^(?=.*[A-Z]).*$/.test(value)
            )
            .test(
                'one-number',
                (d) => `${d.path} doesn't include a number`,
                (value) => /^(?=.*\d).*$/.test(value)
            )
            .min(8)
            .required(),
    })
    .required()

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const setIsAuthenticated = useSetIsAuthenticated()
    const navigate = useNavigate()

    const onSubmit = async () => {
        await setIsAuthenticated(true)
        navigate('movies')
    }

    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <h2>{texts.login}</h2>
                <input {...register('email')} placeholder={texts.email} />
                <p className="error-message">{errors.email?.message}</p>

                <input {...register('password')} placeholder={texts.password} />
                <p className="error-message">{errors.password?.message}</p>

                <button type="submit" className="reset-button button-primary">
                    {texts.loginButton}
                </button>
            </form>
        </div>
    )
}
