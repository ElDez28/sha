const ShaItem = ({ letter, rest }) => {
  return (
    <div>
      <p className="flex flex-col items-center">
        <span className="text:md md:text-6xl font-bold text-primary">
          {letter}
        </span>
        {rest.split("").map((l, i) => {
          return (
            <span
              key={i}
              className="text-sm text-gray-200 font-bold md:text-xl"
            >
              {l}
            </span>
          );
        })}
      </p>
    </div>
  );
};

const Sha = () => {
  return (
    <div className="flex flex-col justify-center py-5 gap-10 absolute top-40 left-10 ">
      <ShaItem letter={"S"} rest={"EIT"}></ShaItem>
      <ShaItem letter={"H"} rest={"EUTE"}></ShaItem>
      <ShaItem letter={"A"} rest={"NDERS"}></ShaItem>
    </div>
  );
};

export default Sha;
