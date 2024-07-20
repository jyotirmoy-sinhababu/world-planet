const PlantList = ({ data }) => {
  return (
    <div>
      <img
        className='w-[310px] h-[250px]'
        src={data?.default_image?.small_url}
        alt='plant photos'
      />
    </div>
  );
};

export default PlantList;
