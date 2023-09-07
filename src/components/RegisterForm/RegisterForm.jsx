import './RegisterForm.css';

function RegisterForm() {
  return (
    <div className='register-block'>
        <div className='register-block__card'>
          <h3 className='register-block__title'>Оставьте заявку</h3>
          <form action="#" className='register-block__form' id='register-form'>
          <input
              type='text'
              className = 'register-block__input'
              name='name'
              id='name-input'
              form='register-form'
              required
              placeholder="Введите имя"
              minLength="2"
              maxLength="40"
            />
          <input
              type='text'
              className = 'register-block__input'
              name='number'
              id='number-input'
              form='register-form'
              required
              placeholder="Ваш номер телефона"
              minLength="11"
              maxLength="11"
            />
          <input
              type='text'
              className = 'register-block__input'
              name='social'
              id='social-input'
              form='register-form'
              required
              placeholder='Ваш номер телефона'
              minLength='11'
              maxLength='11'
            />
          <button className='register-block__btn' type='submit'>ЗАПИСАТЬСЯ</button>
          </form>
        </div>
    </div>
  );
}

export default RegisterForm;