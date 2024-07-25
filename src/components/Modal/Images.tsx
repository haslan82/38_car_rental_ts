import GenerateImage from "../../utils/generateImages"
import { CarType } from "../../utils/types"


const Images = ({car} : {car:CarType}) => {

  return (
    <div className="flex-1 flex-col gap-3">
{/* Büyük Resim Alanı */}

     <div className="w-full h-40 bg-pattern bg-center">
        <img className="h-full mx-auto object-contain" src={} alt="" />
     </div>


     {/* Küçük Resim Alanı */}

     <div className="flex gap-3 my-3">


        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
            <img src="/hero.png" className="h-full mx-auto object-contain min-w-[146px]" alt="" />
        </div>

        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
            <img src="/hero.png" className="h-full mx-auto object-contain min-w-[146px]" alt="" />
        </div>

        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
            <img src="/hero.png" className="h-full mx-auto object-contain min-w-[146px]" alt="" />
        </div>

     </div>
      
    </div>
  )
}

export default Images
