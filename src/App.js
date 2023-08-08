import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {

  return (
    <div >
      <section className='hero  is-small is-primary'>
        <div className='hero-body'>
          <p className='title'>
          Personal Digital Asistants
          </p>
          <p class="subtitle">
      For outstanding experience
      </p>
        </div>
      </section>
      
      <div >
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-3'>
              <ProfileCard title="Alexa" handle= "@alexa99" image ={AlexaImage} description ='Alexa was created by amazon and helps to buy things.'/>
              </div>
              <div className='column is-3'>
              <ProfileCard title="Siri" handle= "@siri01" image ={CortanaImage} description ='Cortana was created by microsoft  and helps to search.'/>
              </div>
              <div className='column is-3'>
              <ProfileCard title="Cortana" handle= "@cortana" image ={SiriImage} description ='Siri was created by apple and is being phased out  '/>
              </div>


            </div>
          </div>
        </div>
        
      
      
      
      
      
      </div>
    </div>
  );
}

export default App;
