"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

enum currencyEnum {
  USD = "$",
  EUR = "€",
  MAD = "MAD",
  FR = "Fr",
}

interface PFormInput {
  firstname: String;
  lastname: String;
  goal: Number;
  salary: Number;
  devise: currencyEnum;
  pictureURL: String;
}

export default function App() {
  const { register, handleSubmit } = useForm<PFormInput>();
  const router = useRouter();

  const createPlayer = async (data: PFormInput) => {
    try {
      const response = await fetch("/api/players", {
        method: "POST",
        body: JSON.stringify({
          firstname: data.firstname,
          lastname: data.lastname,
          goal: Number(data.goal),
          salary: Number(data.salary),
          devise: data.devise,
          pictureURL: data.pictureURL || "",
        }),
      });

      if (response.status === 200) router.push("/");
      
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<PFormInput> = (data) => {
    createPlayer(data)
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
          required
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
          required
        />
      </div>
      <div className="flex justify-between mb-4">
        <div className="w-40">
          <input
            {...register("salary")}
            id="salary"
            name="salary"
            type="number"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Salaire Annuel"
            required
          />
        </div>
        <div className="">
          <select
            {...register("devise")}
            id="devise"
            name="devise"
            className="w-40 p-2 border border-gray-300 rounded-md"
            required
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
          required
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
