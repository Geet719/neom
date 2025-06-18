import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

module.exports function ClientForm() {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    console.log("form Submitted data", data);
  }

  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 items-center bg-gray-300 w-[500px] h-[500px] justify-center "
      >
        <div className="flex flex-col">
          <label className="w-[280px]" htmlFor="name">
            UserName{" "}
          </label>
          <input
            className="bg-white w-[280px] h-[30px] rounded-[8px]"
            name="name"
            {...register("name",{
                required:{
                    value:true,
                    message:"UserName Required"
                }
            })}
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>     
        </div>


        <div className="flex flex-col">
          <label className="w-[280px]" htmlFor="email">
            Email{" "}
          </label>
          <input
            className="bg-white w-[280px] h-[30px] rounded-[8px]"
            name="email"
            {...register("email",{
                required:"Email is required",
                pattern:{
                    value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:"fill the email in correct format"
                }
            })}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>


        <div className="flex flex-col">
          <label className="w-[280px]" htmlFor="mobile">
            Mobile Number{" "}
          </label>
          <input
            className="bg-white w-[280px] h-[30px] rounded-[8px]"
            name="mobile"
            {...register("mobile",{
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/, 
                  message: "Invalid mobile number (must be 10 digits)",
                },
            })}
          />
          <p className="text-red-500 text-sm">{errors.mobile?.message}</p>
        </div>


        <button className="mt-3 px-5 py-2 rounded-[8px] bg-white">
          Submit Now
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
