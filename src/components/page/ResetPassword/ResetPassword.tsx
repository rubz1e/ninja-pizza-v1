import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import './ResetPassword.scss';
import '../../common/Form/Form.scss';
import { Link, useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    navigate(-1);
  };

  return (
    <div className='reset'>
      <div className='reset-wrapper'>
        <div className='reset-content'>
          <label htmlFor='text' className='form-label'>
            Введите вашу почту для сброса пароля
            <input
              className='form-password'
              placeholder='example@gmail.com'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button className='form-button' type='button' onClick={triggerResetEmail}>
            Сбросить пароль
          </button>
          <hr className='reset-divider' />
          <Link to='/login' className='form-button'>
            Авторизоваться
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
