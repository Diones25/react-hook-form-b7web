import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpFormSchema = z.object({
  name: z.string({ message: "Deve ser uma string" }).min(2, { message: 'Deve ter no mínimo 2 caracteres' }).max(20),
  lastName: z.string({ message: 'Deve ser uma string' }).optional(),
  age: z.number({ message: 'Deve ser uma numero' }).min(18, { message: 'Deve ser maior de 18' })
})


const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema)
  });

  const handleFormSubmit: SubmitHandler<z.infer<typeof SignUpFormSchema>> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="container mx-auto">

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className='my-2'>
            <input
              {...register('name')}
              className={`border-2 ${errors.name ? 'border-red-600' : 'border-white'} p-3 text-black focus:outline-none`}
            />
            {errors.name &&
              <p className='text-red-600 text-sm'>{errors.name.message}</p>
            }
          </div>

          <div className='my-2'>
            <input
              {...register('lastName')}
              className={`border-2 ${errors.lastName ? 'border-red-600' : 'border-white'} p-3 text-black focus:outline-none`}
            />
            {errors.lastName &&
              <p className='text-red-600 text-sm'>{errors.lastName.message}</p>
            }
          </div>


          <div className='my-2'>
            <input
              type='number'
              {...register('age', { valueAsNumber: true })}
              className={`border-2 ${errors.age ? 'border-red-600' : 'border-white'} p-3 text-black focus:outline-none`}
            />
            {errors.age &&
              <p className='text-red-600 text-sm'>{errors.age.message}</p>
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