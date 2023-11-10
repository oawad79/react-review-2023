import { useForm } from "react-hook-form";

type AddHouseInputs = {
  address: string;
  country: string;
  description: string;
  price: number;
  image: string;
};

const AddHouse = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddHouseInputs>();

  const onSubmit = (data: AddHouseInputs) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/5">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="address"
          >
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            {...register("address", { required: true })}
          />
          {errors.address?.type === "required" && (
            <p role="alert">Address is required</p>
          )}
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/5">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="country"
          >
            Country
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("country", { required: true })}
          />
          {errors.country?.type === "required" && (
            <p role="alert">Country is required</p>
          )}
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/5">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="description"
          >
            Description
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            cols={10}
            rows={10}
            {...register("description", { required: true })}
          />

          {errors.description?.type === "required" && (
            <p role="alert">Description is required</p>
          )}
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/5">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="price"
          >
            Price
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && (
            <p role="alert">Price is required</p>
          )}
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/5">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="image"
          >
            Image
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("image", { required: true })}
          />
          {errors.image?.type === "required" && (
            <p role="alert">Image is required</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-400 px-6 py-2 rounded text-white w-1/5"
      >
        Submit
      </button>
    </form>
  );
};

export default AddHouse;
