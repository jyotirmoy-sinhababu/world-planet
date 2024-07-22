import { BsSearch } from 'react-icons/bs';

const InputForm = () => {
  return (
    <div className='flex justify-center items-center sm:mt-[4%] mt-[2%]'>
      <form className='flex gap-[12px] border border-stone-900 rounded-md h-[41px] px-[8px]'>
        <input
          type='text'
          placeholder='search for plants'
          className='w-[221px]'
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default InputForm;
