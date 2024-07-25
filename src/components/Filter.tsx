
import ReactSelect from 'react-select'
import { OptionType } from '../utils/types';
import { useSearchParams } from 'react-router-dom';

type Props = {
  options: OptionType[];
name: string;
};


const Filter = ({options, name}:Props) => {

  const [params, setParams] = useSearchParams();

  const handleChange = (e:OptionType | null)=> {
    
params.set(name, e?.value as string);


setParams(params);
  }
// urlden parametreyi alıp select bileşenin istediği formata çevir
const selected = {
  label: params.get(name) || options[0].label,
  value: params.get(name) || options[0].value,
};
  return (
    <div className='text-black'>
      <ReactSelect 
      
      defaultValue={selected}
      onChange={handleChange} 
      options={options} 
      className='min-w-[100px]'/>
    </div>
  )
}

export default Filter
