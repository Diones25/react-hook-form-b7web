import { SubmitHandler, useForm } from 'react-hook-form'
import { SignUpForm } from '../types/SignUpForm';


const Home = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="container mx-auto">
        
        <form onSubmit={handleSubmit(handleFormSubmit)}>

          <div className='my-3'>
            <input
              {...register('name', { required: true, minLength: 3, maxLength: 20 })}
              className={`border ${errors.name ? 'border-red-600' : 'border-white'} p-3 text-black`}
              placeholder='Digite seu nome'
            />
            {errors.name?.type === 'required' &&
              <p
                className='text-red-600 text-sm'
              >
                Item obrigatório
              </p>
            }
            {errors.name?.type === 'minLength' &&
              <p
                className='text-red-600 text-sm'
              >
                Precisar ter 3 caracteres
              </p>
            }
            {errors.name?.type === 'maxLength' &&
              <p
                className='text-red-600 text-sm'
              >
                Precisar ter no máximo 20 caracteres
              </p>
            }
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
              {...register('age', { required: 'campo idade obrigatório', min: 18, max: 120 })}
              className='border border-white p-3 text-black'
              placeholder='Digite sua idade'
            />
            {errors.age &&
              <p
                className='text-red-600 text-sm'
              >
                {errors.age.message}
              </p>
            }
            {errors.age?.type === 'min' &&
              <p
                className='text-red-600 text-sm'
              >
                Idade precisa ser maior que 18
              </p>
            }
            {errors.age?.type === 'max' &&
              <p
                className='text-red-600 text-sm'
              >
                Idade precisa ser menor que 120
              </p>
            }
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