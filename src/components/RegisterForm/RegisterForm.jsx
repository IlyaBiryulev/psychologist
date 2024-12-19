import './RegisterForm.css';
import React, {useState} from 'react';
import {send} from 'emailjs-com';
import MyInput from '../UI/MyInput/MyInput';
import {SERVICE_ID, USER_ID, TEMPLATE_ID} from '../../utils/constants';
import Validation from '../../hooks/Validation/Validation';
import ModalToolTip from '../UI/ModalToolTip/ModalToolTip';

function RegisterForm({onRef}) {
    const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSucces, setIsSucces] = useState(false);

    const {values, errors, isValid, onChange} = Validation();

    //yuliyaftimoshenko@mail.ru
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            SERVICE_ID,
            TEMPLATE_ID,
            values,
            USER_ID
        )
            .then((response) => {
                setIsInfoToolTipOpen(true);
                setIsSucces(true);
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                setIsInfoToolTipOpen(true);
                setIsError(true);
                console.log('FAILED...', err);
            });
    };

    const handleCloseToolTip = () => {
        setIsInfoToolTipOpen(false);
    }

    return (
        <div className='register-block' id='register-block' ref={onRef}>
            <div className='register-block__card'>
                <h3 className='register-block__title'>Оставьте заявку</h3>
                <form action="#" className='register-block__form' id='register-form' onSubmit={onSubmit}>
                    <label className='register-block__label'>Имя</label>
                    <MyInput
                        name='name'
                        id='name-input'
                        form='register-form'
                        required
                        placeholder="Введите имя"
                        onChange={onChange}
                        value={values.name || ''}
                    />
                    <span
                        className={`register-block__error ${errors.name ? 'register-block__error_active' : ''}`}>{errors.name}</span>
                    <label className='register-block__label'>ТГ/ВК</label>
                    <MyInput
                        type='text'
                        name='social'
                        id='social-input'
                        form='register-form'
                        required
                        placeholder='Ваш телеграмм/вк'
                        onChange={onChange}
                        value={values.social || ''}
                    />
                    <span
                        className={`register-block__error ${errors.social ? 'register-block__error' : ''}`}>{errors.social}</span>
                    <label className='register-block__label'>Почта</label>
                    <MyInput
                        type='text'
                        name='email'
                        id='email-input'
                        form='register-form'
                        required
                        placeholder='Почта'
                        onChange={onChange}
                        value={values.email || ''}
                    />
                    <span
                        className={`register-block__error ${errors.email ? 'register-block__error_active' : ''}`}>{errors.email}</span>
                    <label className='register-block__label'>Номер телефона</label>
                    <MyInput
                        type='text'
                        name='number'
                        id='number-input'
                        form='register-form'
                        required
                        placeholder="Ваш номер телефона"
                        onChange={onChange}
                        value={values.number || ''}
                    />
                    <span
                        className={`register-block__error ${errors.number ? 'register-block__error_active' : ''}`}>{errors.number}</span>
                    <button className={`register-block__btn ${!isValid ? 'register-block__btn_disable' : ''}`}
                            type='submit' disabled={!isValid}>Оставить заявку
                    </button>
                </form>
                <ModalToolTip
                    isOpen={isInfoToolTipOpen}
                    onClose={handleCloseToolTip}
                    isSucces={isSucces}
                    isError={isError}
                    textSucces={'Заявка отправлена!'}
                    textError={'Что-то пошло не так... Попробуйте снова!'}
                />
            </div>
        </div>
    );
}

export default RegisterForm;