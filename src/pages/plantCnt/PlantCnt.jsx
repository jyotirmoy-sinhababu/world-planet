import { useContext } from 'react';
import { apiContext } from '../../mycontext/MyContext';
import PlantList from '../../components/plantList/PlantList';

const PlantCnt = () => {
  const { apiData } = useContext(apiContext);
  return (
    <>
      {apiData ? (
        apiData?.map((item) => {
          return (
            <div key={item.id} className='sm:mt-[4%] mt-[2%]'>
              <PlantList data={item} />
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </>
  );
};

export default PlantCnt;
