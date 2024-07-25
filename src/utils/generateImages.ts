import { colors } from "./constants";
import { CarType } from "./types";


const GenerateImage = (car: CarType, angle?: string) : string=> {
    const url = new URL("https://cdn.imagin.studio/getimage");

    url.searchParams.append("customer" , "hrjavascript-mastery")
    url.searchParams.append("make", car.make);
    url.searchParams.append("modelFamily", car.model as string);
    url.searchParams.append("zoomType", "fullscreen");

 // açı parametresi geldiyse url'e ekle
 if (angle) {
    url.searchParams.append("angle", angle);
  }
  
// colors dizisinin uzunluğuna göre rastgele bir sayı oluştur

const i = Math.round(Math.random()* colors.length);

// rastgele secilen rengi url e ekle
url.searchParams.append("paintId", colors[i])
 //! console.log(url.href)
return url.href;

};


export default GenerateImage;
