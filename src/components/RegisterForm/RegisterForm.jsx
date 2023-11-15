import './RegisterForm.css';
import React, {useState} from 'react';
import { send } from 'emailjs-com';
import MyInput from '../UI/MyInput/MyInput';
import { SERVICE_ID, USER_ID, TEMPLATE_ID } from '../../utils/constants';

function RegisterForm({ onRef }) {
  const [toSend, setToSend] = useState({
    name: '',
    number: '',
    social: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      SERVICE_ID,
      TEMPLATE_ID,
      toSend,
      USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='register-block' id='register-block' ref={onRef}>
      <div className='register-block__card'>
        <h3 className='register-block__title'>Оставьте заявку</h3>
        <form action="#" className='register-block__form' id='register-form' onSubmit={onSubmit}>
          <MyInput 
            name='name'
            id='name-input'
            form='register-form'
            required
            placeholder="Введите имя"
            onChange={handleChange}
            value={toSend.name}
          />
          <MyInput 
            type='text'
            name='social'
            id='social-input'
            form='register-form'
            required
            placeholder='Ваш телеграмм'
            onChange={handleChange}
            value={toSend.social}
          />
          <MyInput 
            type='text'
            name='number'
            id='number-input'
            form='register-form'
            required
            placeholder="Ваш номер телефона"
            onChange={handleChange}
            value={toSend.number}
          />
        <button className='register-block__btn' type='submit'>Оставить заявку</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;