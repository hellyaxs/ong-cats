import Image from 'next/image';

const ImageOverlay = () => {
  
  return (
 
<div className="container w-full mx-auto flex justify-center items-center">
        <div>
        <h1 className="font-sf-new-republic ml-11 font-extrabold text-blue pb-7 text-4xl">
             Doe Amor, <br/>
             doe o seu lar!<br/>
             Adote um gatinho
        </h1>
        <button class="flex ml-11 px-6 w-auto justify-center items-center py-8  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-350 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
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
        <div className="relative w-1/2 h-full p-8 py-60 right-12">
        <Image 
          layout="fill"
          objectFit="cover" // Garante que a imagem cubra o espaço sem deformação
          className="absolute top-0 left-0 w-full h-full object-cover" 
          src="/images/background/cat.png"
          alt="Gato propaganda"
        />
  </div>
  <div class="flex text-start invisible lg:visible xl:relative xl:left-24">
      <div class="h-16 w-16 rounded-full bg-green-700 flex items-center justify-center">
              <svg name="whatsapp" width="30" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.8834 22.2069C26.8109 22.1724 24.1142 20.8436 23.6352 20.6721C23.4352 20.5895 23.2225 20.5424 23.0065 20.5327C22.8214 20.536 22.6404 20.5873 22.4812 20.6816C22.3219 20.7758 22.1899 20.9098 22.098 21.0705C21.8285 21.4712 21.0133 22.4246 20.7611 22.709C20.7278 22.747 20.6828 22.7919 20.6564 22.7919C20.6299 22.7919 20.2154 22.6203 20.0887 22.5616C17.9094 21.456 16.0524 19.8065 14.6976 17.7727C14.6758 17.7403 14.6605 17.7039 14.6527 17.6656C14.6963 17.5963 14.7494 17.5335 14.8105 17.4791C14.9578 17.334 15.1167 17.1417 15.271 16.9563C15.3436 16.8688 15.4173 16.7802 15.4887 16.6973C15.6668 16.4888 15.8145 16.2562 15.9274 16.0064L15.9872 15.8855C16.0788 15.7003 16.1233 15.4955 16.1169 15.289C16.1105 15.0826 16.0533 14.8809 15.9504 14.7018C15.8871 14.574 14.7471 11.8232 14.6262 11.5365C14.3349 10.8398 13.9503 10.5151 13.4161 10.5151C13.3665 10.5151 13.4161 10.5151 13.2076 10.5243C12.4314 10.5797 11.6716 10.7747 10.9646 11.1001C10.3732 11.5756 9.90583 12.1874 9.60262 12.883C9.2994 13.5787 9.16936 14.3375 9.22363 15.0944C9.35345 16.8263 10.0041 18.4785 11.0901 19.8338C11.1039 19.8522 11.1293 19.8902 11.1673 19.9489C12.9942 22.8123 15.6119 25.0849 18.7035 26.4915C20.1315 27.1694 21.6771 27.5647 23.2552 27.6556C23.5026 27.6539 23.7497 27.6393 23.9956 27.6118L24.128 27.5992C24.8244 27.4769 25.485 27.2017 26.0624 26.7936C26.6398 26.3854 27.1195 25.8544 27.4672 25.2387C27.8145 24.4674 27.8896 23.6011 27.6802 22.7815C27.4768 22.5159 27.1997 22.316 26.8834 22.2069Z" fill="white"/>
                  <path d="M18.8278 6.51204e-05C14.028 -0.0124944 9.41908 1.87939 6.01232 5.26068C2.60557 8.64196 0.679145 13.2365 0.655681 18.0364C0.653944 21.2449 1.51454 24.395 3.14742 27.157L0.0258391 36.3686C-0.00297413 36.4528 -0.00779736 36.5434 0.0119083 36.6302C0.0316139 36.7171 0.0750722 36.7967 0.137428 36.8602C0.199784 36.9238 0.278581 36.9688 0.365017 36.9901C0.451452 37.0115 0.542122 37.0084 0.626895 36.9811L10.2277 33.931C12.9885 35.4049 16.0827 36.1421 19.2116 36.0713C22.3404 36.0005 25.3982 35.1241 28.0895 33.5268C30.7808 31.9294 33.0147 29.6651 34.5756 26.9524C36.1365 24.2398 36.9715 21.1705 37 18.041C36.9781 13.2402 35.0523 8.64431 31.6453 5.26197C28.2384 1.87963 23.6286 -0.0127953 18.8278 6.51204e-05ZM18.8278 32.3132C16.0135 32.3173 13.2596 31.4962 10.907 29.9515C10.8474 29.9123 10.7797 29.8869 10.709 29.8772C10.6383 29.8674 10.5663 29.8736 10.4983 29.8951L5.68981 31.4242L7.24197 26.8438C7.26659 26.7708 7.27327 26.6929 7.26145 26.6167C7.24962 26.5406 7.21964 26.4684 7.17403 26.4062C5.38918 23.981 4.42871 21.0476 4.43358 18.0364C4.41077 15.1849 5.23548 12.3909 6.80309 10.0088C8.37069 7.62681 10.6105 5.7641 13.2384 4.65705C15.8663 3.54999 18.7639 3.24848 21.5634 3.79077C24.3629 4.33306 26.9383 5.69471 28.9627 7.70296C30.9872 9.71121 32.3695 12.2755 32.9342 15.0706C33.499 17.8657 33.2208 20.7656 32.1348 23.4023C31.0489 26.039 29.2043 28.2937 26.8349 29.8804C24.4655 31.4671 21.6783 32.3142 18.8267 32.3143L18.8278 32.3132Z" fill="white"/>
              </svg>
      </div>
               
  </div>



  </div>
 
 
  );
};

export default ImageOverlay;