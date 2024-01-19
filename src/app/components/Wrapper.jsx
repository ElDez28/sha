const Wrapper = ({ children }) => {
  return (
    <section className="mt-24 border-b pb-24">
      <div className="mx-auto max-w-[90rem] px-4 text-center text-gray-700 lg:px-8 ">
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
