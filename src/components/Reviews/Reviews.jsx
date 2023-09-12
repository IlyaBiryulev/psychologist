import './Reviews.css';
import SectionMainTitle from '../SectionMainTitle/SectionMainTitle';

function Reviews() {
    return(
        <div className='reviews' id='reviews'>
            <SectionMainTitle title={'Отзывы клиентов'} />
            <div className='reviews__card-wrapper'>
                <div className='reviews__card'>
                    <h3 className='reviews__title'>#1 Имя1</h3>
                    <p className='reviews__text'>"Я просто не могу описать, насколько я благодарен психологу за его профессионализм и внимание во время консультации. 
                        Он смог раскроить мои проблемы и предложил практические решения. После этой встречи у меня появилось чувство, что я на правильном пути к улучшению своего психического состояния."
                    </p>
                </div>
                <div className='reviews__card'>
                    <h3 className='reviews__title'>#2 Имя2</h3>
                    <p className='reviews__text'>"Я просто не могу описать, насколько я благодарен психологу за его профессионализм и внимание во время консультации. 
                        Он смог раскроить мои проблемы и предложил практические решения. После этой встречи у меня появилось чувство, что я на правильном пути к улучшению своего психического состояния."
                    </p>
                </div>
                <div className='reviews__card'>
                    <h3 className='reviews__title'>#3 Имя3</h3>
                    <p className='reviews__text'>"Я просто не могу описать, насколько я благодарен психологу за его профессионализм и внимание во время консультации. 
                        Он смог раскроить мои проблемы и предложил практические решения. После этой встречи у меня появилось чувство, что я на правильном пути к улучшению своего психического состояния."
                    </p>
                </div>
            </div>  
        </div>
    )
}

export default Reviews;
