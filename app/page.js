import dynamic from 'next/dynamic'
 
const Home = dynamic(() => import('@/app/home'), {
  loading: () => <p style={{background:'#E9A2A0', height:'100vh', textAlign:'center', fontSize:'210%'}}><img style={{maxHeight:'50vh', marginLeft:'0%', marginBottom:'-3%', mixBlendMode:'luminosity', opacity:'0%', transition:"opacity 0.3s"}} src='https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720591024185-8463CB42-CBB2-43F4-844E-1AC986DB9984.png'></img><br></br>...Loading</p>,
  ssr: false
})
  export default function EHome() {
    return(<Home></Home>)
  }