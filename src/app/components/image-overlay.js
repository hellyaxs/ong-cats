import Image from 'next/image';

const ImageOverlay = () => {
  
  return (
    
  <div   style={{msOverflowX:'hidden', position: 'relative', width: '100%', height: '700px' }}>
      {/* Imagem de fundo */}
      <Image
       style={{msOverflowX:'hidden', position: 'relative',top: '59%', left: '52%', transform: 'translate(-49%, -50%) rotate(1deg)' }}
          src="/image.png"
          width={1725}
          height={1600}
          objectFit="cover"
          alt="Elemento decorativo inferior"
        />
      <Image style={{msOverflowX:'hidden',}}
        src="/image-1.png" // Caminho relativo no projeto
        layout="fill"
        objectFit="cover"
        alt="Fundo geométrico"
      />
    
      {/* Imagem principal do gato, centralizada */}

      <Image style={{msOverflowX:'hidden', position: 'absolute', top: '51%', left: '7%', transform: 'translate(-50%, -50%) rotate(20deg)' }}
        src="/icons/image-curve.svg"
        width={310}
        height={310}
        alt="curve"
      />
      
      <div 
       style={{ position: 'absolute', top: '51%', left: '23%', transform: 'translate(-50%, -50%)' }}>
        <h1 className="flex ml-11 font-extrabold text-blue break-all max-w-xs pb-7" style={{fontSize: '36px'}}>
             Doe Amor, <br/>
             doe o seu lar!<br/>
             Adote um gatinho
        </h1>
        <button class="flex ml-11 items-center py-8 px-16 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-350 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <span class="mx-1">Quero adotar </span>
            <svg width="14" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.21739 0.162988C3.20998 0.693556 2.8003 2.52704 3.39803 3.8501C3.78756 4.71647 4.73452 5.11943 5.65462 4.80378C6.49413 4.51499 6.82322 3.46729 6.54114 1.98975C6.37324 1.11667 6.05759 0.532371 5.55388 0.189853C5.19122 -0.0519252 4.65393 -0.0653572 4.21739 0.162988Z" fill="white"/>
              <path d="M8.58284 0.143313C7.90452 0.499263 7.44112 1.62084 7.4344 2.93719C7.42768 4.20652 7.87766 4.81097 8.88507 4.89156C10.1208 4.9923 10.9402 4.05206 10.9402 2.52751C10.9402 1.38578 10.5171 0.512696 9.78502 0.136597C9.45593 -0.0313044 8.90522 -0.0245886 8.58284 0.143313Z" fill="white"/>
              <path d="M0.866133 3.17179C0.624355 3.26581 0.335565 3.56132 0.181096 3.87026C0.00647845 4.19935 -0.053966 4.95154 0.0534908 5.44182C0.221392 6.24103 0.805689 7.08053 1.36984 7.33574C1.69221 7.48349 2.22949 7.49693 2.59887 7.36932C3.7809 6.95293 3.89507 5.73732 2.9011 4.22621C2.29665 3.31283 1.52431 2.90986 0.866133 3.17179Z" fill="white"/>
              <path d="M12.1089 3.29288C11.2895 3.76972 10.4634 5.16665 10.4701 6.08004C10.4768 7.03372 11.538 7.69189 12.5655 7.38295C13.5662 7.08744 14.352 5.30769 14.0028 4.14581C13.7207 3.22572 12.8879 2.84962 12.1089 3.29288Z" fill="white"/>
              <path d="M6.40687 5.36811C5.97033 5.57631 5.74198 5.81137 5.08381 6.7449C4.63383 7.37621 4.17714 7.90677 3.47196 8.61868C2.29665 9.80742 2.04815 10.2037 2.04815 10.9491C2.04144 11.6006 2.22277 12.0506 2.64588 12.4737C2.90781 12.7356 3.08914 12.8498 3.35107 12.9304C3.89507 13.0916 4.79502 13.0647 5.63453 12.8699C6.60835 12.6416 7.46801 12.6416 8.47542 12.8767C9.10001 13.0177 9.3485 13.0446 9.9328 13.0244C10.5372 13.0043 10.6917 12.9707 10.9805 12.8162C11.632 12.4804 12.0148 11.8021 12.0148 10.9693C12.0148 10.2104 11.7999 9.86115 10.5574 8.57838C9.85221 7.85976 9.32835 7.2486 8.99927 6.77176C8.16648 5.55616 7.85754 5.31438 7.11206 5.26737C6.78297 5.24722 6.60835 5.27408 6.40687 5.36811Z" fill="white"/>
            </svg>

        </button>
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