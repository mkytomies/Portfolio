import './styles/Home.css';

const Home = () => {
    return(
        <>
            <div className='mainContainer'>
                <h1>Moona Kytömies</h1>
                <p className="title">Software Engineer</p>

                <h2>Profile</h2>
                <p className='bodyText'>
                    I am a soon-to-graduate software engineering student with a passion for web development. 
                    I have a background in media studies and work experience in creating websites, which has strengthened 
                    both my visual and technical skills. I enjoy building practical digital solutions and learning new tools.
                </p>

                <h2>Education</h2>
                <p className='bolded'>Tampere University of Sciences | 2021 - Current </p>
                <p className='bodyText'>Software Engineering </p>

                <p className='bolded'>Tomas Bata University, Zlín, Czech Republic | 2024 </p>
                <p className='bodyText'>Software Engineering, Erasmus Program</p>


                <h2>Work Experience</h2>
                <p className='bolded'>TAMK, Tampere | 05 / 2025 - 06 / 2025 </p>
                <p className='bodyText'>Intern</p>
                <ul>
                    <li>Created Google Forms → Google Sheets workflow to collect event data to be shared between organizations</li>
                    <li>Built a Google App Script validation to restrict submissions to approved users</li>
                </ul>

                <p className='bolded'>Design Kumina, Lahti | 11 / 2018 - 05 / 2023 </p>
                <p className='bodyText'>Media-Assistant, Intern & Part-time </p>
                <ul>
                    <li>Moved from graphic design into WordPress development (Divi) </li>
                    <li>Gained hands-on experience creating and maintaining websites, working in close collaboration with the designer</li>
                </ul>
            </div>
        </>
    )
}

export default Home;