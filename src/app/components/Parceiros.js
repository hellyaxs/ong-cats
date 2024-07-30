import Image from 'next/image'
import whiskas from '../../../public/images/parceiros/image 4.png';
import royal from '../../../public/images/parceiros/image 5.png';
import golden from '../../../public/images/parceiros/image 6.png';
import premier from '../../../public/images/parceiros/image 7.png';
import petlov from '../../../public/images/parceiros/image 8.png';
import linhaParceirso from '../../../public/images/background/linha-parceiros.svg';

export default function Parceiros() {

    return (
        <>
            <div className="h-20 w-full">

            <Image className="relative w-full xl:bottom-80"
            width={500}
            height={200}
            src={linhaParceirso} alt="Gato"  />
            </div>
        

    <div class="pt-8 text-center">
        
      
             <div class="max-w-5xl mx-auto px-9 xl:px-0">
             <h2 class="font-sf-new-republic text-xl font-medium text-gray-800  lg:text-3xl">
                Nosso Parceiros</h2>

        
                <div class="mx-auto my-20">
                    <div class="grid grid-cols-2 gap-12 sm:px-14  md:grid-cols-6 md:px-16 lg:grid-cols-5">
                        <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            <Image className=" mt-1 text-gray-500 fill-current dark:text-gray-300"
                            src={petlov}
                            alt="Parceiro 1"
                            width={500}
                            height={200} />
                        </div>

               <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
               
                <Image className=" mt-1 text-gray-500 fill-current dark:text-gray-300"
                 src={golden}
                 alt="Parceiro 1"
                 width={500}
                 height={200} /> 
                  </div>

               <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
               
                <Image className=" mt-1 text-gray-500 fill-current dark:text-gray-300"
                 src={whiskas}
                 alt="Parceiro 1"
                 width={500}
                 height={200} />     
                 </div>

               <div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                
                 <Image className=" mt-1 text-gray-500 fill-current dark:text-gray-300"
                 src={royal}
                 alt="Parceiro 1"
                 width={500}
                 height={200} />
               </div>

               <div class="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                 
                  <Image className=" mt-1 text-gray-500 fill-current dark:text-gray-300"
                 src={premier}
                 alt="Parceiro 1"
                 width={500}
                 height={400} />
                </div>
           </div>
       </div>

 </div>
</div>
</>

       


);

}







