import { assets } from "../assets/frontend_assets/assets";

const policies = [
  {
    image: assets.exchange_icon,
    title: "Easy Exchange Policy",
    description: "We offer hassle-free exchanges for a smooth shopping experience.",
  },
  {
    image: assets.quality_icon,
    title: "Quality Assurance",
    description: "Every product is carefully selected to meet our quality standards.",
  },
  {
    image: assets.support_img,
    title: "Dedicated Customer Support",
    description: "Our support team is here to help you with any questions.",
  },
];

const OurPolicy = () => {
  return (
    <section className="my-16 px-4">
      <h2 className="mb-10 text-center text-2xl font-medium text-gray-700">
        Our Policies
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
        {policies.map((policy) => (
          <div key={policy.title} className="flex flex-col items-center gap-3">
            <img
              src={policy.image}
              alt=""
              aria-hidden="true"
              className="h-12 w-12 object-contain"
            />
            <h3 className="font-medium text-gray-700">{policy.title}</h3>
            <p className="max-w-xs text-sm text-gray-500">
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;