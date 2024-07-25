import Image from "next/image";
import Head from "next/head";
import Button from "./components/button";
import ImageOverlay from "./components/image-overlay";

export default function Home() {


  return (
    <>
   <header className="flex flex-col items-center font-sans">
   <div className="container mx-auto p-4">
          <nav className="flex justify-center items-center">
          <Image src="icons/Group.svg" alt="Logo da Ong TinieBird Cats" width={60} height={60} />
            <div className="font-extrabold mx-4" style={{fontSize: '22px'}}>
            <p>Ong</p>
               <span className="text-pink-400">Tinie</span>
              <span className="text-blue-400 ">Bird</span> 
              <p> Cats</p>
            </div>
            <div className="flex items-center ml-48">
              <ul className="flex ml-10 space-x-4">
                <li><a href="#" className="hover:text-blue-500">Home</a></li>
                <li><a href="#" className="hover:text-blue-500">
                  <span className="text-pink-400 font-sans font-bold" style={{ fontSize: '22px' }}>
                    Sobre 
                    <Image src="icons/Black.svg"
                     className="ml-2" alt="Logo da Ong TinieBird Cats" width={12} height={12}/> 
                    </span>
                    </a>
                </li>
                <li><a href="#" className="hover:text-blue-500">Quero Ajudar</a></li>
                <li><a href="#" className="hover:text-blue-500">Notícias</a></li>
                <li><a href="#" className="hover:text-blue-500">Contato</a></li>
              </ul>
            </div>
            <a href="#" className="flex ml-11 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
              Quero adotar <Image src="icons/Black.svg" className="ml-2" alt="Logo da Ong TinieBird Cats" width={12} height={12} ></Image> </a>
          </nav>
        </div>
       </header>

      
    <main className="w-screen h-screen">
    {/* <div  className="flex justify-center items-center " style={{
      backgroundImage: 'url(/image-1.png)',
      height: '100%', // Defina a altura conforme necessário
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>*/}
      
      {/* <Image src="/cat.png" alt="Gato para adoção" width={600} height={600} /> */}
       

    <ImageOverlay />
    {/* </div> */}


    <session className="flex justify-center items-center ">

      

    </session>
    
 
   </main>
   </>
  );
}
