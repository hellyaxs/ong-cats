import Image from "next/image";
export default function Depoimentos() {

    return (
        <section class="bg-white dark:bg-gray-900">
        
    <div class="pt-28 mx-auto">
   
        
        <div class="w-full xl:flex justify-end xl:items-center ">
            <div class="xl:w-1/3 relative bottom-12">
            <Image src="/icons/quote.svg" width={300} height={300} alt="Quote" />
            </div>
            
            <div class="xl:w-1/3 xl:mr-4 relative right-32">
                <h1 class="font-sf-new-republic text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Depoimentos</h1>

                <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Donec pharetra tellus ut erat consequat auctor integer nulla nunc.
                </p>
            </div>

            <div class="grid grid-cols-1 relative right-24 gap-8 mt-8 xl:mt-0  xl:w-1/2 md:grid-cols-2">
                <div className="text-center w-60 justify-center items-center shadow px-2">
               
                <div class="relative bottom-9 mx-auto h-16 w-16 rounded-full bg-rose-250 flex items-center justify-center">
                    <Image 
                    src="/avatar-1.png" 
                    width={48}
                    height={48}
                    alt=""/>
                </div>
                 <div className="relative bottom-7"> 
                    <h1 class=" text-xl font-semibold text-gray-700 capitalize dark:text-white">Laura</h1>

                    <p class="mt-2 text-sm text-gray-500 capitalize dark:text-gray-300">Tutora da Paçoca</p>
                    <p class="mt-2 text-sm text-gray-500 capitalize dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Donec pharetra tellus ut erat consequat auctor integer nulla nunc.
                    </p>
                    </div>
                </div>

                <div>
                    {/* <img class="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""> */}

                    <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Mia</h1>

                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">Graphic Designer</p>
                </div>
            </div>
        </div>
    </div>
</section>
    );
    
}