import { plansData } from "../../data/plansData";
import { GiCheckMark } from "react-icons/gi";

function Plans() {
  return (
    <div
      className="w-full h-full flex flex-col gap-12 bg-zinc-700 p-10 py-12"
      id="plans"
    >
      <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
        <span className="font-bold text-5xl max-sm:text-3xl">
          Choose The Best Plan
        </span>
        <span className="font-light text-xl max-sm:text-base">
          Choose a plan that&apos;s right for your growing team. Simple pricing
          and no hidden changes.
        </span>
      </div>
      <div className="w-full h-auto grid grid-cols-3 justify-items-center max-sm:overflow-x-auto max-sm:flex max-sm:gap-8">
        {plansData.map((plan, i) => (
          <div
            className={`w-96 flex flex-col justify-center items-center gap-8  ${
              i % 2 === 1
                ? "bg-gradient-to-tr from-orange-500 to-red-500 h-full"
                : "bg-zinc-500 my-5 h-auto max-sm:m-0"
            } rounded-lg p-6`}
            key={i}
          >
            <span className="font-bold text-2xl max-sm:text-xl">
              {plan.title}
            </span>
            <span className="font-bold text-5xl max-sm:text-3xl">
              ${plan.price}
            </span>
            <div className="flex flex-col items-start gap-2">
              {plan.features.map((feature, i) => (
                <div className="flex items-center gap-2" key={i}>
                  <GiCheckMark className="text-white w-4 h-4" />
                  <span className="font-extralight text-xl max-sm:text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <button
              className={`w-48 h-12 py-3 px-8 mb-3 ${
                i % 2 === 1
                  ? "bg-white text-orange-500 font-bold"
                  : "border-2 border-zinc-300"
              } rounded-full`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
