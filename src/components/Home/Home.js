import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div className="d-flex m-5 justify-content-between">
                <div>
                    <h4>Since 2009</h4>
                    <h2 className="text-danger">Dance Steps</h2>
                    <p style={{ textAlign: 'justify', }} className="me-5">CYS offers lots of fun programs for beginners to learn how to dance the fun way. Colourform is for all ages and both males and females, while The Gentleman's Guide has been designed especially for guys aged 25+. Both programs are guaranteed to give you more confidence on the dance floor.The intensity depends on the type of dance you choose. Fast-moving dance styles like hip hop and salsa are more intense than slower dances like the tango or waltz. All of them will use your whole body and will challenge your brain as you learn the choreography and form.
                    </p>
                    <NavLink to='/classes' className="bg-danger px-4 py-2 text-decoration-none fs-5 text-light rounded ">Learn To Dance</NavLink>
                </div>

                <div>
                    <img src="https://cf.ltkcdn.net/dance/images/orig/53559-384x313-BoleroDance.jpg" alt="" />
                </div>
            </div>
        </div >
    );
};

export default Home;