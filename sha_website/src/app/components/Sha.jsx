const ShaItem = ({ letter, rest }) => {
  return (
    <div>
      <p>
        <span className="text:md md:text-6xl font-bold text-primary">
          {letter}
        </span>
        <span className="text-sm md:text-xl">{rest}</span>
      </p>
    </div>
  );
};

const Sha = () => {
  return (
    <div className="flex justify-center py-5 gap-10">
      <ShaItem letter={"S"} rest={"eit"}></ShaItem>
      <ShaItem letter={"H"} rest={"eute"}></ShaItem>
      <ShaItem letter={"A"} rest={"nders"}></ShaItem>
    </div>
  );
};

export default Sha;
