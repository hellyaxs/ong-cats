import Image from 'next/image'

export default function Parceiros() {

    return (
    <div class="py-8 text-center">
        {/* <div className="overflow-hidden relative top-24">
        <svg 
        width="1820" height="580" viewBox="0 0 1920 590" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
            <g opacity="0.5">
            <path d="M345.331 551.305C345.331 551.305 270.084 550.177 297.31 517.397C324.537 484.617 403.668 440.525 337.64 411.743C271.61 382.939 313.735 346.075 318.716 320.116C325.625 284.074 281.142 235.546 191.361 261.31C101.579 287.074 113.482 341.499 23.7212 367.239C-66.0174 392.977 -111.692 316.034 -127.54 279.638C-143.389 243.219 -122.605 185.502 -80.1559 155.986C-37.7064 126.469 3.77574 184.276 -37.881 197.882C-79.5156 211.487 -159.925 160.376 -144.395 102.361C-128.886 44.37 -44.1179 -14.6293 -24.6826 94.877" stroke="black" stroke-width="1.26" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <line opacity="0.5" x1="344.547" y1="551.5" x2="1994.55" y2="551.5" stroke="black"/>
            </g>
        </svg>

        </div> */}
      
             <div class="max-w-5xl mx-auto">
             <h1 class="font-sf-new-republic text-3xl font-semibold text-gray-800  lg:text-4xl">
                Nosso Parceiros</h1>

        
                <div class="mx-auto my-20">
                    <div class="grid grid-cols-2 gap-12  md:grid-cols-6 lg:grid-cols-5">
                        <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            <Image className=" mt-1 text-gray-500 fill-current dark:text-gray-300"
                            src="/images/image 4.png"
                            alt="Parceiro 1"
                            width={500}
                            height={200} />
                        </div>

               <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
               
                <Image className=" mt-1 text-gray-500 fill-current dark:text-gray-300"
                 src="/images/image 5.png"
                 alt="Parceiro 1"
                 width={500}
                 height={200} /> 
                  </div>

               <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
               
                <Image className=" mt-1 text-gray-500 fill-current dark:text-gray-300"
                 src="/images/image 6.png"
                 alt="Parceiro 1"
                 width={500}
                 height={200} />     
                 </div>

               <div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                
                 <Image className=" mt-1 text-gray-500 fill-current dark:text-gray-300"
                 src="/images/image 7.png"
                 alt="Parceiro 1"
                 width={500}
                 height={200} />
               </div>

               <div class="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                 
                  <Image className=" mt-1 text-gray-500 fill-current dark:text-gray-300"
                 src="/images/image 8.png"
                 alt="Parceiro 1"
                 width={500}
                 height={400} />
                </div>
           </div>
       </div>

 </div>
</div>


       


);

}







