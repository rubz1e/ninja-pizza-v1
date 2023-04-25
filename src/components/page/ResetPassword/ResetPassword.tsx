import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import './ResetPassword.scss';
import '../../common/Form/Form.scss';
import { useNavigate } from 'react-router-dom';
import AuthModal from '../AuthModal/AuthModal';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);

  const handleLoginClick = () => {
    setIsShowModal(true);
  };

  const handleClose = () => {
    setIsShowModal(false);
  };
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

          <button onClick={handleLoginClick} className='reset-button__login'>
            Авторизоваться
          </button>
          {isShowModal && <AuthModal onClose={handleClose} />}
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
