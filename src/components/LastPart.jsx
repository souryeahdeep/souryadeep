import { Tooltip } from "./ui/tooltip-card";
export default function EducationContact() {
  const TooltipCard = () => {
    return (
      <div className="">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyOWRmYndlNnVxOGtyYzUzcW9maGl6djZ3bmZ5bjNpOTNnd2JteGpyZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vSkXRfZ9mjNQY/200.gif"
          alt="Tyler Durden"
          className="aspect-auto  w-full rounded-sm"
        />
       
      </div>
    );
  };
  return (
    <div
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center p-8"
    >
      <div className="max-w-4xl w-full space-y-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Education Background
          </h2>
          <p className="text-2xl md:text-2xl leading-relaxed">
            Pursuing B.Tech in Computer Science and Technology from JIS College
            of Engineering.{" "}
            <Tooltip
              containerClassName="text-neutral-600 dark:text-neutral-400"
              content={<TooltipCard />}
            >
              {" "}
              <span className="cursor-pointer font-serif text-4xl text-red-800">
                Expecting
              </span>
            </Tooltip>{" "}
            to graduate in 2028.
          </p>
        </div>

        <div>
          <h2 className="text-5xl md:text-4xl font-bold mb-8">
            Feel free to talk{" "}
            <span className="text-xl font-extralight font-serif">
              {" "}
              (coz i'm available 19*7)
            </span>
          </h2>
          <div className="flex flex-wrap gap-8 text-2xl md:text-2xl font-bold">
            <a
              href="https://www.linkedin.com/in/souryadeep-ganguly-b46054240/"
              className="hover:text-blue-500 transition-normal duration-400"
            >
              LinkedIN
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=souryadeep05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-normal duration-400"
            >
              Mail Me
            </a>
            <a
              href="https://github.com/souryeahdeep"
              className="hover:text-blue-950 transition-normal duration-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
