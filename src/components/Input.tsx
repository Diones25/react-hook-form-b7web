import { useController, UseControllerProps } from "react-hook-form"
import { SignUpForm } from "../types/SignUpForm";

const Input = (props: UseControllerProps<SignUpForm>) => {
  const { field, fieldState } = useController(props);

  return (
    <div className="my-3">
      <input
        {...field}
        placeholder={props.name}
        className={`border-2 ${fieldState.invalid ? 'border-red-600' : 'border-white'} p-3 text-black focus:outline-none`}
      />
      {fieldState.error?.type === 'required' &&
        <p
          className='text-red-600 text-sm'
        >
          Campo obrigatório
        </p>
      }
      {fieldState.error?.type === 'minLength' &&
        <p
          className='text-red-600 text-sm'
        >
          Precisar ter 3 caracteres
        </p>
      }
      {fieldState.error?.type === 'maxLength' &&
        <p
          className='text-red-600 text-sm'
        >
          Precisar ter no máximo 20 caracteres
        </p>
      }
      {fieldState.error?.type === 'min' &&
        <p
          className='text-red-600 text-sm'
        >
          Idade precisa ser maior que 18
        </p>
      }
      {fieldState.error?.type === 'max' &&
        <p
          className='text-red-600 text-sm'
        >
          Idade precisa ser menor que 120
        </p>
      }
    </div>
  )
}

export default Input
