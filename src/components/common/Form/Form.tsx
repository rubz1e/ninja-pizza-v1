import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

const Form = ({ title, handleClick }: FormProps) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });

  const onSubmit = () => {
    reset();
  };

  const regularExpressionEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regularExpressionPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  return (
    <div className='form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='text' className='form-label'>
          Ваша почта
          <input
            placeholder='Почта'
            className='form-text'
            {...register('text', {
              onChange: (e) => setEmail(e.target.value),
              required: true,
              pattern: regularExpressionEmail,
            })}
          />
          {errors.text?.type === 'required' && <p className='form-alert'>Почта обязательна к заполнению!</p>}
          {errors.text?.type === 'pattern' && <p className='form-alert'>Введите корректную почту!</p>}
        </label>
        <label htmlFor='password' className='form-label'>
          Ваш пароль
          <input
            placeholder='Пароль'
            className='form-password'
            type='password'
            {...register('password', {
              onChange: (e) => setPass(e.target.value),
              required: true,
              pattern: regularExpressionPassword,
              minLength: 8,
              maxLength: 20,
            })}
          />
          {errors.password?.type === 'required' && <p className='form-alert'>Пароль обязателен к заполнению!</p>}
          {errors.password?.type === 'minLength' && <p className='form-alert'>Минимальная длина пароля 8 символов!</p>}
          {errors.password?.type === 'pattern' && <p className='form-alert'>Введите надежный пароль!</p>}
          {errors.password?.type === 'maxLength' && (
            <p className='form-alert'>Максимальная длина пароля 20 символов!</p>
          )}
        </label>
        <button type='submit' disabled={!isValid} className='form-button' onClick={() => handleClick(email, pass)}>
          {title}
        </button>
      </form>
    </div>
  );
};

export { Form };
