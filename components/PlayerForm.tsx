"use client";

import { useForm, SubmitHandler } from "react-hook-form";

enum currencyEnum {
  USD = "$",
  EUR = "€",
  MAD = "MAD",
  FR = "Fr",
}

interface IFormInput {
  firstname: String;
  lastname: String;
  goal: Number;
  salary: Number;
  devise: currencyEnum;
  pictureURL: String;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          {...register("firstname")}
          id="firstname"
          name="firstname"
          type="text"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Nom"
        />
      </div>
      <div className="mb-4">
        <input
          {...register("lastname")}
          id="firstname"
          name="lastname"
          type="text"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Prénom"
        />
      </div>
      <div className="flex justify-between mb-4">
        <div className="w-40">
          <input
            {...register("salary")}
            id="salary"
            name="salary"
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Salaire Annuel"
          />
        </div>
        <div className="">
          <select
            {...register("devise")}
            id="devise"
            name="devise"
            className="w-40 p-2 border border-gray-300 rounded-md"
          >
            {[currencyEnum.USD, currencyEnum.EUR, currencyEnum.MAD, currencyEnum.FR].map(
              (currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              )
            )}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <input
          {...register("goal")}
          id="goal"
          name="goal"
          type="number"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Nombre de buts"
        />
      </div>
      <button
        type="submit"
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Submit
      </button>
    </form>
  );
}
