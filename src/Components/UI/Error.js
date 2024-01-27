import error from "../../assets/img/error.png";
const Error = () => {
  return (
    <section>
      <div className="flex justify-center items-center pt-20">
        <div className="text-center">
          <img className="w-[450px] mx-auto" src={error} alt="error" />
          <div className="my-6">
            <h6 className="font-bold text-xl mb-1 text-gray-700"></h6>
            <p className="text-gray-500 text-sm"></p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Error;
