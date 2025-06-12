import { SubmitHandler, useForm } from 'react-hook-form'
import { SignUpForm } from '../types/SignUpForm';
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import Input from '../components/Input';

const SigUpForm = z.object({
  name: z.string({ message: "Deve ser uma string" }).min(2, { message: 'Deve ter no mínimo 2 caracteres' }).max(20),
  lastName: z.string({ message: 'Deve ser uma string' }).min(2, { message: 'Deve ter no mínimo 2 caracteres' }).optional(),
  age: z.number({ message: 'Deve ser uma string' }).min(18, { message: 'Deve ser maior de 18' })
})


const Home = () => {
  const {
    control,
    handleSubmit,
  } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="container mx-auto">
        
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            control={control}
            name='name'
            rules={{ required: true, minLength: 3, maxLength: 20 }}
          />

          <Input
            control={control}
            name='lastName'
          />

          <Input
            control={control}
            name='age'
            rules={{ required: true, min: 18, max: 120 }}
          />

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