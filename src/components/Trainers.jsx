import React from 'react'
import { trainerData } from '../data/Data'
import './styles/trainers.css'
const Trainers = () => {
  return (
    <section className='trainers reveal' id='trainers'>
      <h2 className='section-title'>Meet our Trainers</h2>
      <div className='trainers-grid'>
        {
          trainerData.map((trainer , id)=>(
            <div className='trainer-card' key={id}>
              <img src={trainer.img} alt="" />
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>

            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Trainers