import Image from "next/image";

export default function Timeline() {

    return (    
    <session>
        <div class="px-6 py-8 mx-auto text-center">
        <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
            Conheça a ONG TinieBird Cats</h2>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-96 dark:text-gray-400">
        Existem muitos gatos a espera de um lar e com muito amor para oferecer. Nós fazemos essa ponte para que você adote um amigo e faça a diferença na vida de um animal carente.
        </p>
       
        </div>

       
        <div class="flex w-full">
            <Image  className="w-1/2"
            src={"/images/gato-5.png"}
            width={600}
            height={200}
            alt="uyi"
            />
        <div class="flex flex-col items-center justify-center w-1/2">
          <div class="max-w-6xl mx-auto px-4 md:px-6 ">
            <div class="flex flex-col justify-center divide-y divide-slate-200 ">

            <div class="w-full max-w-3xl mx-auto">
                <div class="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
               
                <div class="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group is-active">
                           
                            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                </svg>
                            </div>
                            <div class="w-[calc(100%-5rem)] md:w-[calc(50%-2.5rem)]  p-4">
                                <div class="space-x-2 mb-1">
                                    <time class="text-3xl font-bold text-indigo-500">2016</time>
                                </div>
                                <svg width="31" height="42" viewBox="0 0 31 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.16201 0.845821C4.51541 1.51366 2.06668 3.41822 1.00309 5.66907C-0.2089 8.21673 0.0879147 12.0506 1.67093 14.1036L2.28929 14.8951L1.7946 16.0081C0.335261 19.2978 0.904156 25.432 3.67443 36.2163C4.83696 40.718 5.25744 41.7321 5.95001 41.6084C6.71679 41.46 6.96413 40.3222 7.23621 35.9689C7.6567 29.1422 8.05245 27.4355 9.19024 27.4355C10.2291 27.4355 10.6743 28.4249 11.0701 31.6404C12.1337 40.2975 12.4057 41.5342 13.1725 41.5342C13.7661 41.5342 14.1619 40.3717 14.9039 36.34C15.7449 31.6899 16.1901 30.6757 17.3279 30.5768C18.6389 30.4531 18.8862 31.3683 18.812 36.5626C18.7378 40.2233 18.7873 40.9653 19.1336 41.2869C20.1724 42.3257 21.1123 40.4706 22.5469 34.6085C23.0911 32.2835 23.8579 29.1422 24.2289 27.6087L24.9214 24.8136L26.3808 24.22C28.6316 23.3048 30.2641 21.4003 30.833 19.0505C31.0556 18.16 31.0556 13.3615 30.833 11.4075L30.6599 9.94815L28.9532 11.6548L27.2712 13.3368H24.2783H21.3102L20.1477 11.5559C19.5046 10.5665 18.9109 9.75027 18.812 9.75027C18.4162 9.75027 17.3774 12.4958 17.1053 14.1778C16.4375 18.5805 17.9958 22.3649 21.1618 23.9727L22.448 24.6405L21.4586 24.4921C17.6 23.9232 15.0029 21.8702 14.0382 18.5805C13.5683 17.0222 13.5683 14.0541 14.0135 12.1495L14.335 10.7397L12.9746 10.3439C10.9464 9.75027 8.67082 9.97289 6.88993 10.9375L5.50479 11.6796L5.10904 10.9375C4.83696 10.3934 4.73802 9.72554 4.81222 8.71142C4.93589 6.93053 5.85107 5.52066 7.5825 4.45707C8.59661 3.81397 8.99237 3.71503 10.427 3.73977C12.3315 3.7645 13.4446 4.16026 15.0523 5.39699C15.6954 5.89168 16.3633 6.28743 16.5364 6.28743C17.0064 6.28743 17.4269 5.37225 17.229 4.72915C16.9322 3.73977 15.4728 2.20623 14.1372 1.46419C12.9499 0.821087 12.5294 0.722149 10.4517 0.67268C9.16551 0.647945 7.68143 0.722149 7.16201 0.845821Z" fill="#1268AE"/>
                                </svg>
                                <div class="text-slate-500">
                
                                    <p>Primeira adoção Independente</p></div>
                            </div>
                        </div>
                        
                
                        <div class="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group is-active">
                        
                            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                </svg>
                            </div>
                        
                            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-slate-900">Order Shipped</div>
                                    <time class="text-xs font-medium text-indigo-500">09/06/2023</time>
                                </div>
                                <div class="text-slate-500">Pretium lectus quam id s risus.</div>
                            </div>
                        </div>
                        
{/*                     
                        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        
                            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                </svg>
                            </div>
                        
                            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-slate-900">In Transit</div>
                                    <time class="text-xs font-medium text-indigo-500">2016</time>
                                </div>
                                <div class="text-slate-500">Pretium lectus quam id leo. Urna et ps.</div>
                            </div>
                        </div> */}
                        
                    
                        {/* <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        
                            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                </svg>
                            </div>
                        
                            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-slate-900">Out of Delivery</div>
                                    <time class="text-xs font-medium text-indigo-500">12/06/2023</time>
                                </div>
                                <div class="text-slate-500">Pretium lectus qua.</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</session>
  
);

}