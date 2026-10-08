import { type FormEvent } from "react";

const NewsletterBox = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="my-16 px-4 text-center">
      <h2 className="text-2xl font-bold text-black sm:text-3xl">
        Subscribe now & get 20% off
      </h2>
      <p className="mt-3 text-sm text-gray-500">
        Sign up for our newsletter and be the first to know about new
        collections, exclusive offers, and special updates.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="min-w-0 flex-1 border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          className="bg-black px-6 py-3 text-sm text-white transition hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterBox;