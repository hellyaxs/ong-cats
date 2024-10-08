import Image from "next/image";
import caramelo from "../../../public/images/cats/cat_transparan.png";

export default function Contato() {

    return (

       
    <section className="flex bg-wave-contato h-auto bg-cover bg-center bg-no-repeat mx-auto justify-start ">

    <div className="w-full xl:w-1/2 xl:mx-0 relative xl:top-20 mx-14  justify-end items-center  mt-2 xl:left-24">

        <div class="w-full my-10 relative  top-80 sm:flex-row items-center justify-center">

        <h3  className="mx-auto my-5 font-sf-new-republic xl:w-1/2 text-white text-5xl" >Fale conosco <br/> agora Mesmo</h3>
           
           <div class="xl:w-1/2 mx-auto w-72 mt-2">
               <input type="text" placeholder="Nome: " class="block w-full py-3 text-white placeholder-white bg-transparent  border border-gray-200 rounded-md pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
           </div>
           <div class="xl:w-1/2 mx-auto mt-2">
               <input type="email" placeholder="E-mail:" class="block w-full py-3 text-white placeholder-white bg-transparent border border-gray-200 rounded-md pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
           </div>
           <div class="xl:w-1/2 mx-auto mt-2">
               <input type="tel" placeholder="Celular:" class="block w-full py-3 text-white placeholder-white bg-transparent border border-gray-200 rounded-md pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
           </div>
           <div class="xl:w-1/2 mx-auto mt-2">
               <input type="text" placeholder="Menssagem:" class="block w-full py-3 pb-16 text-white placeholder-white bg-transparent border border-gray-200 rounded-sm pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
           </div>

           <button class="flex xl:w-1/2 mx-auto justify-center  px-10 py-4 my-7 items-center font-medium tracking-wide text-white transition-colors duration-300  bg-blue-900 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              <span class="mx-3">Enviar Menssagem </span>
            <svg width="14" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.21739 0.162988C3.20998 0.693556 2.8003 2.52704 3.39803 3.8501C3.78756 4.71647 4.73452 5.11943 5.65462 4.80378C6.49413 4.51499 6.82322 3.46729 6.54114 1.98975C6.37324 1.11667 6.05759 0.532371 5.55388 0.189853C5.19122 -0.0519252 4.65393 -0.0653572 4.21739 0.162988Z" fill="white"/>
              <path d="M8.58284 0.143313C7.90452 0.499263 7.44112 1.62084 7.4344 2.93719C7.42768 4.20652 7.87766 4.81097 8.88507 4.89156C10.1208 4.9923 10.9402 4.05206 10.9402 2.52751C10.9402 1.38578 10.5171 0.512696 9.78502 0.136597C9.45593 -0.0313044 8.90522 -0.0245886 8.58284 0.143313Z" fill="white"/>
              <path d="M0.866133 3.17179C0.624355 3.26581 0.335565 3.56132 0.181096 3.87026C0.00647845 4.19935 -0.053966 4.95154 0.0534908 5.44182C0.221392 6.24103 0.805689 7.08053 1.36984 7.33574C1.69221 7.48349 2.22949 7.49693 2.59887 7.36932C3.7809 6.95293 3.89507 5.73732 2.9011 4.22621C2.29665 3.31283 1.52431 2.90986 0.866133 3.17179Z" fill="white"/>
              <path d="M12.1089 3.29288C11.2895 3.76972 10.4634 5.16665 10.4701 6.08004C10.4768 7.03372 11.538 7.69189 12.5655 7.38295C13.5662 7.08744 14.352 5.30769 14.0028 4.14581C13.7207 3.22572 12.8879 2.84962 12.1089 3.29288Z" fill="white"/>
              <path d="M6.40687 5.36811C5.97033 5.57631 5.74198 5.81137 5.08381 6.7449C4.63383 7.37621 4.17714 7.90677 3.47196 8.61868C2.29665 9.80742 2.04815 10.2037 2.04815 10.9491C2.04144 11.3506 2.22277 12.0506 2.64588 12.4737C2.90781 12.7356 3.08914 12.8498 3.35107 12.9304C3.89507 13.0916 4.79502 13.0647 5.63453 12.8699C6.60835 12.6416 7.46801 12.6416 8.47542 12.8767C9.10001 13.0177 9.3485 13.0446 9.9328 13.0244C10.5372 13.0043 10.6917 12.9707 10.9805 12.8162C11.632 12.4804 12.0148 11.8021 12.0148 10.9693C12.0148 10.2104 11.7999 9.86115 10.5574 8.57838C9.85221 7.85976 9.32835 7.2486 8.99927 6.77176C8.16648 5.55616 7.85754 5.31438 7.11206 5.26737C6.78297 5.24722 6.60835 5.27408 6.40687 5.36811Z" fill="white"/>
            </svg>
        </button>
           
         </div>
  
      </div>
            <div className="w-1/2 mx-auto bg-top bg-seta-contato invisible lg:visible" style={{backgroundPosition: "99% 9%"}}>
                <Image className="mx-auto h-screen w-screen relative top-24 right-32 z-10"
                src={caramelo}
                width={700}
                height={300}
                alt="gato caramelo sentado"
                />
            </div>

            

    </section>



        
    );
    
}