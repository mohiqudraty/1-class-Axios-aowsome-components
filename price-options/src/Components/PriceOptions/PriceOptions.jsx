import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Standard Membership",
      price: 50.0,
      features: [
        "Access to basic gym facilities",
        "Group fitness classes",
        "Locker access",
        "Dietary consultation",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 80.0,
      features: [
        "Access to all gym facilities",
        "Unlimited group fitness classes",
        "Personal trainer sessions",
        "Sauna and spa access",
        "Nutrition planning",
      ],
    },
    {
      id: 3,
      name: "Student Membership",
      price: 30.0,
      features: [
        "Access to basic gym facilities",
        "Discounted group fitness classes",
        "Locker access",
        "Student-friendly training programs",
      ],
    },
  ];

  return (
    <div className="mt-10 container mx-auto">
      <h2 className="text-5xl font-bold text-center mb-5">
        Best Gym Package in The World!
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
