import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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
    const onSubmit = (data: any) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} />
            <p>{errors.email?.message}</p>

            <input {...register('password')} />
            <p>{errors.password?.message}</p>

            <input type="submit" />
        </form>
    )
}