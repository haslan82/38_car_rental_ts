// High Order Components (HOC)
// normal componentlerden farklı olarak hem açılış hem kapanış etiketleri olur ve içerisinde yazılan değeri otamatik olarak children prop u olarak gönderir

type Props = {
    children :string;

};


const Warning = ({children} : Props) => {


  return (
    <div>
      {children}
    </div>
  )
}

export default Warning;
