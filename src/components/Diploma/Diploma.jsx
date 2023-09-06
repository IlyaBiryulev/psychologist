import './Diploma.css';
import { DiplomData } from '../../utils/DiplomData'


function Diploma() {
  return (
    <article className='diploma'>
        <h2 className='diploma__titile'>Дипломы и сертификаты</h2>
        <div className='diploma__content'>
            {
                DiplomData.map((item) =>
                    <div>
                        <img className='diploma__img' src={item.img} alt="диплом" />
                        <p>{item.title}</p> 
                    </div>
                )
            }
        </div>
    </article>
  );
}

export default Diploma;