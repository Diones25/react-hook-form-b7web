import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs } from '../types/Inputs';


const Home = () => {
  const { handleSubmit, register } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="container mx-auto">
        
        <form onSubmit={handleSubmit(handleFormSubmit)}>

          <div className='my-3'>
            <input
              {...register('name', { required: true, minLength: 3, maxLength: 20 })}
              className='border border-white p-3 text-black'
              placeholder='Digite seu nome'
            />
          </div>

          <div className='my-3'>
            <input
              {...register('lastName', { pattern: /^[A-Za-z]+$/ })}
              className='border border-white p-3 text-black'
              placeholder='Digite seu sonrenome'
            />
          </div>

          <div className='my-3'>
            <input
            type='number'
              {...register('age', { min: 18, max: 120 })}
              className='border border-white p-3 text-black'
              placeholder='Digite sua idade'
            />
          </div>

          <input
            type="submit"
            value="Enviar"
            className='bg-blue-400 px-3 py-1 text-white cursor-pointer'
          />
        </form>

      </div>
    </>
  )
}

export default Home