import './Reviews.css';
import SectionMainTitle from '../UI/SectionMainTitle/SectionMainTitle';
import { motion } from 'framer-motion';
import { reviewsAnimLeft } from '../../utils/constants';
import { reviewsAnimRight } from '../../utils/constants';

function Reviews() {
    return(
        <motion.div 
            className='reviews' 
            id='reviews'
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.3, once: true}}
        >
            <SectionMainTitle title={'Отзывы клиентов'} />
            <div className='reviews__card-wrapper'>
                <motion.div className='reviews__card' variants={reviewsAnimLeft} custom={1}> 
                    <h3 className='reviews__title'>#1 Екатерина</h3>
                    <p className='reviews__text'>&laquo;Пишу свои впечатления от нашей работы.
                        Мне было очень комфортно и безопасно (это для меня первично)
                        Я открылась насколько я могу при первой встрече
                        Мне понравилось как вы помогали раскладывать мне свою внутреннюю кашу по тарелкам , я смогла посмотреть под другим углом на свой запрос увидев вторичную выгоду в своем положении.
                        Эта мини сессия была ещё одним шагом к решению моего главного на сегодня запроса.
                        Во время всей сессии , я с была в ресурсе, энергия не падала, я не чувствовала внутреннее сопротивление.
                        Благодарю!&raquo;
                    </p>
                </motion.div>
                <motion.div className='reviews__card' variants={reviewsAnimRight} custom={2}>
                    <h3 className='reviews__title'>#2 Дина</h3>
                    <p className='reviews__text'>&laquo;Я с Юлией проработала 2 сессии и уже после первой открыла сама в себе ресурс на перемены в жизни, 
                        смогла посмотреть на ситуацию под другим углом. После второй узнала себя больше и получила практические советы как самому с собой подружиться и
                        услышать внутренние потребности и принять переживаемые эмоции. Мне очень отозвался ее подход как специалиста, чувствуется высокий уровень эмпатии. 
                        Теперь я знаю к кому обратиться за психологической помощью.&raquo;
                    </p>
                </motion.div>
                <motion.div className='reviews__card' variants={reviewsAnimLeft} custom={3}>
                    <h3 className='reviews__title'>#3 Наталья</h3>
                    <p className='reviews__text'>&laquo;Я просто не могу описать, насколько я благодарна Юле за её профессионализм и внимание во время консультации. 
                        После этой встречи у меня появилось чувство, что я на правильном пути к улучшению своего ментального состояния.&raquo;
                    </p>
                </motion.div>
            </div>  
        </motion.div>
    )
}

export default Reviews;
