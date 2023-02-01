import React from 'react'
import vg from '../assets/2.webp';

const Home = () => {
  return (
    <>
      <div className='home'>
      <main>
        <h1>HOME PAGE</h1>
        <p>This is a paragraph tag for HOME page</p>
      </main>
      </div>
   
    <div className='home2'>
      <img src={vg} alt= "graphics"/>

      <div>
        <p>
          We are your one and only solution to the tech problems you face everyday. We are leading the tech team whose aim is to increase the problem solving ability in children.
        </p>
      </div>

    </div>

    <div className='home3'>
      <div>
        <h1>Who we are?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
    </>
  )
}

export default Home