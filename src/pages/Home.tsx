import { useForm } from 'react-hook-form'
import { Inputs } from '../types/Inputs';


const Home = () => {
  const { handleSubmit, register } = useForm<Inputs>();

  return (
    <>
      <div className="container mx-auto">
        
        <form>

          <div className='my-3'>
            <input
              {...register('name')}
              className='border border-white p-3 text-black'
              placeholder='Digite seu nome'
            />
          </div>

          <div className='my-3'>
            <input
              {...register('lastName')}
              className='border border-white p-3 text-black'
              placeholder='Digite seu sonrenome'
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