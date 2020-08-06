import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (  
    <article className="teacher-item">
    <header>
        <img src="https://avatars2.githubusercontent.com/u/61628827?s=460&u=ef6370d2f1945cb6f14e1b3b124ca5a5775a1662&v=4" alt="Sheila Schlickmann"/>
        <div>
            <strong>Sheila Schlickmann</strong>
            <span>Filosofia</span>
        </div>
    </header>

    <p>
        A vida é muito curta, viva!
    </p>
 <footer>
     <p>
         <strong>RS 90,00</strong>
     </p>
     <button type="button">
     <img src={whatsappIcon} alt="whatsapp"/>
     Entrar em contato

     </button>

 </footer>

</article>
);

}
export default TeacherItem;