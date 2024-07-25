import Image from 'next/image';

const ImageOverlay = () => {
  return (
    
    <div   style={{ position: 'relative', width: '100%', height: '700px' }}>
      {/* Imagem de fundo */}
      <Image  className="w-screen h-screen"
       style={{ position: 'absolute', width: '100%', top: '57%', left: '50%', transform: 'translate(-49%, -50%) rotate(2deg)' }}
          src="/image.png"
          layout="fill"
          objectFit="cover"
          alt="Elemento decorativo inferior"
        />
      <Image
        src="/image-1.png" // Caminho relativo no projeto
        layout="fill"
        objectFit="cover"
        alt="Fundo geométrico"
      />
    
      {/* Imagem principal do gato, centralizada */}

      <Image style={{ position: 'absolute', top: '51%', left: '7%', transform: 'translate(-50%, -50%) rotate(20deg)' }}
        src="/icons/image-curve.svg"
        width={310}
        height={310}
        alt="curve"
      />
      
      <div 
       style={{fontSize: '36px', position: 'absolute', top: '51%', left: '23%', transform: 'translate(-50%, -50%)' }}>
        <h1 className="flex ml-11 font-extrabold text-blue break-all max-w-xs pb-7">
             Doe Amor, <br/>
             doe o seu lar!<br/>
             Adote um gatinho
        </h1>
        <a href="#" className="flex ml-11 bg-blue-500 font-extrabold text-white p-7 rounded-lg shadow hover:bg-blue-600">
            Quero adotar
        <Image src="icons/Black.svg" className="ml-2" alt="Logo da Ong TinieBird Cats" width={24} height={24} />
        </a>
      </div>

        <Image style={{position: 'absolute', top: '51%', left: '58%', transform: 'translate(-50%, -50%)' }}
          src="/cat.png"
          width={1030}
          height={500}
          alt="Gato"
        />

      {/* Outras imagens geométricas sobrepostas */}
      <div  className="z-0" style={{ position: 'absolute', top: -3, left: 0 }}>
        <Image
          src="/forma-branca.png"
          width={1712}
          height={86}
          alt="Elemento decorativo superior"
        />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 100 }}>
        <Image
          src="/Group 136176.png"
          width={1712}
          height={86}
          alt="Elemento decorativo superior"
        />
      </div>
     
    </div>
  );
};

export default ImageOverlay;