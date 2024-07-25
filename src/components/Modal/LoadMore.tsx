import Button from "../Button"
type Props = {
    limit: number;
    handleClick: () => void;
  };

const LoadMore = ({limit, handleClick}: Props) => {
   //! console.log(limit)
  return (
    <div className="w-full flex-center my-10">
     {limit < 30 && <Button handleClick={handleClick} title="Daha Fazla"/>}
      
    </div>
  )
}

export default LoadMore
