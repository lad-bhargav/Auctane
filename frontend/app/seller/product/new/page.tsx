'use client'
import { useCurrentUser } from '@/hooks/UserHook';
import { Product } from '@/types/product';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'

const NewProduct = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Product>();

  const router = useRouter();

  const {email} = useCurrentUser();

  const onSubmit = async(data: Product) => {
     try {
        const res = await axios.post("http://localhost:8080/seller/new",{
            ...data,
            email
        });
        if(!res){
            console.log("no response");
            throw new Error("No response from server");
        }
        router.push("/seller/dashboard");
     } catch (error) {
        console.log(error)
     }
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input placeholder='title' {...register("title", { required: true })} />
            {errors.title && <span>This field is required</span>}

            <input placeholder='minimum price' {...register("min_price", { required: true })} />
            {errors.min_price && <span>This field is required</span>}

            <input placeholder='description' {...register("description", { required: true })} />
            {errors.description && <span>This field is required</span>}

            <input placeholder='image url' {...register("img", { required: true })} />
            {errors.img && <span>This field is required</span>}

            <input type="submit" />
    </form>
    </div>
  )
}

export default NewProduct