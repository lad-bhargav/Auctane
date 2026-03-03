'use client'
import { useCurrentUser } from '@/hooks/UserHook';
import { Product } from '@/types/product';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'

// 🛍️ Component for creating new products
const NewProduct = () => {
    // 📋 Form setup with react-hook-form
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Product>();

  // 🧭 Router for navigation
  const router = useRouter();

  // 👤 Get current user email
  const {email} = useCurrentUser();

  // 📤 Submit handler for form submission
  const onSubmit = async(data: Product) => {
     try {
        // 🌐 POST request to create new product
        const res = await axios.post("http://localhost:8080/seller/new",{
            ...data,
            email
        });
        if(!res){
            console.log("no response");
            throw new Error("No response from server");
        }
        // ✅ Redirect to dashboard on success
        router.push("/seller/dashboard");
     } catch (error) {
        // ❌ Log error if submission fails
        console.log(error)
     }
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* 🏷️ Product title input */}
            <input placeholder='title' {...register("title", { required: true })} />
            {errors.title && <span>This field is required</span>}

            {/* 💰 Minimum price input */}
            <input placeholder='minimum price' {...register("min_price", { required: true })} />
            {errors.min_price && <span>This field is required</span>}

            {/* 📝 Product description input */}
            <input placeholder='description' {...register("description", { required: true })} />
            {errors.description && <span>This field is required</span>}

            {/* 🖼️ Product image URL input */}
            <input placeholder='image url' {...register("img", { required: true })} />
            {errors.img && <span>This field is required</span>}

            {/* ⬆️ Submit button */}
            <input type="submit" />
    </form>
    </div>
  )
}

export default NewProduct