import { SubmitHandler, useForm } from 'react-hook-form'
import { SignUpForm } from '../types/SignUpForm';
import Input from '../components/Input';


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