import { BsSearch } from 'react-icons/bs';

const InputForm = () => {
  return (
    <div>
      <form className='flex gap-[12px]'>
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
