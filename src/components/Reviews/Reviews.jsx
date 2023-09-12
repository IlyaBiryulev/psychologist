import './Reviews.css';
import SectionMainTitle from '../SectionMainTitle/SectionMainTitle';
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
                    <h3 className='reviews__title'>#1 Имя1</h3>
                    <p className='reviews__text'>"Я просто не могу описать, насколько я благодарен психологу за его профессионализм и внимание во время консультации. 
                        Он смог раскроить мои проблемы и предложил практические решения. После этой встречи у меня появилось чувство, что я на правильном пути к улучшению своего психического состояния."
                    </p>
                </motion.div>
                <motion.div className='reviews__card' variants={reviewsAnimRight} custom={2}>
                    <h3 className='reviews__title'>#2 Имя2</h3>
                    <p className='reviews__text'>"Я просто не могу описать, насколько я благодарен психологу за его профессионализм и внимание во время консультации. 
                        Он смог раскроить мои проблемы и предложил практические решения. После этой встречи у меня появилось чувство, что я на правильном пути к улучшению своего психического состояния."
                    </p>
                </motion.div>
                <motion.div className='reviews__card' variants={reviewsAnimLeft} custom={3}>
                    <h3 className='reviews__title'>#3 Имя3</h3>
                    <p className='reviews__text'>"Я просто не могу описать, насколько я благодарен психологу за его профессионализм и внимание во время консультации. 
                        Он смог раскроить мои проблемы и предложил практические решения. После этой встречи у меня появилось чувство, что я на правильном пути к улучшению своего психического состояния."
                    </p>
                </motion.div>
            </div>  
        </motion.div>
    )
}

export default Reviews;
