import Image from "next/image";

export default function Fotter() {

    return (
        <section class="bg-rose-450 pt-8 dark:bg-gray-900 z-0">
        <div class="container px-6 py-6  mx-auto text-center">

        <h3 class="font-sf-new-republic text-xl font-medium text-white lg:text-3xl dark:text-white">Ainda tem duvidas?</h3>

                <div class="font-roboto grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    
                    <div class="flex flex-col px-3 justify-center items-center dark:bg-gray-900">
                        <svg name="email" width="35" height="28" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.875 34.2H9.375C7.88316 34.2 6.45242 33.5995 5.39752 32.5305C4.34263 31.4615 3.75 30.0117 3.75 28.5V13.3C3.75 12.7961 3.55246 12.3128 3.20083 11.9565C2.84919 11.6002 2.37228 11.4 1.875 11.4C1.37772 11.4 0.900806 11.6002 0.549175 11.9565C0.197544 12.3128 0 12.7961 0 13.3L0 28.5C0 31.0196 0.98772 33.4359 2.74587 35.2175C4.50403 36.9991 6.8886 38 9.375 38H31.875C32.3723 38 32.8492 37.7998 33.2008 37.4435C33.5525 37.0872 33.75 36.6039 33.75 36.1C33.75 35.5961 33.5525 35.1128 33.2008 34.7565C32.8492 34.4002 32.3723 34.2 31.875 34.2ZM39.375 0H13.125C11.6332 0 10.2024 0.600534 9.14752 1.66949C8.09263 2.73845 7.5 4.18827 7.5 5.7V24.7C7.5 26.2117 8.09263 27.6616 9.14752 28.7305C10.2024 29.7995 11.6332 30.4 13.125 30.4H39.375C40.8668 30.4 42.2976 29.7995 43.3525 28.7305C44.4074 27.6616 45 26.2117 45 24.7V5.7C45 4.18827 44.4074 2.73845 43.3525 1.66949C42.2976 0.600534 40.8668 0 39.375 0ZM38.6063 3.8L27.5812 14.972C27.4069 15.1501 27.1996 15.2914 26.9711 15.3879C26.7426 15.4844 26.4975 15.534 26.25 15.534C26.0025 15.534 25.7574 15.4844 25.5289 15.3879C25.3004 15.2914 25.0931 15.1501 24.9188 14.972L13.8937 3.8H38.6063ZM41.25 24.7C41.25 25.2039 41.0525 25.6872 40.7008 26.0435C40.3492 26.3998 39.8723 26.6 39.375 26.6H13.125C12.6277 26.6 12.1508 26.3998 11.7992 26.0435C11.4475 25.6872 11.25 25.2039 11.25 24.7V6.403L22.275 17.575C23.3297 18.6424 24.7594 19.242 26.25 19.242C27.7406 19.242 29.1703 18.6424 30.225 17.575L41.25 6.403V24.7Z" fill="white"/>
                        </svg>
                        <p class="mt-6 text-xl font-semibold  text-white dark:text-white">
                                Por e-mail
                            </p>
                        <div class="mx-4">
                            <p class="text-sm text-center text-white dark:text-gray-200">Envie a sua mensagem <br/> e responderemos em até 2 dias úteis</p>
                        </div>
                        <p class="inline-block mt-4 text-white underline hover:text-blue-400 cursor-pointer">contato@ongtiniebirdcats.com.br</p>
                    </div>
           

         
                    <div class="flex flex-col p-2 py-12 bg-blue-700 rounded-md justify-center items-center dark:bg-gray-900">
                        <svg name="whatsapp" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.8834 22.2069C26.8109 22.1724 24.1142 20.8436 23.6352 20.6721C23.4352 20.5895 23.2225 20.5424 23.0065 20.5327C22.8214 20.536 22.6404 20.5873 22.4812 20.6816C22.3219 20.7758 22.1899 20.9098 22.098 21.0705C21.8285 21.4712 21.0133 22.4246 20.7611 22.709C20.7278 22.747 20.6828 22.7919 20.6564 22.7919C20.6299 22.7919 20.2154 22.6203 20.0887 22.5616C17.9094 21.456 16.0524 19.8065 14.6976 17.7727C14.6758 17.7403 14.6605 17.7039 14.6527 17.6656C14.6963 17.5963 14.7494 17.5335 14.8105 17.4791C14.9578 17.334 15.1167 17.1417 15.271 16.9563C15.3436 16.8688 15.4173 16.7802 15.4887 16.6973C15.6668 16.4888 15.8145 16.2562 15.9274 16.0064L15.9872 15.8855C16.0788 15.7003 16.1233 15.4955 16.1169 15.289C16.1105 15.0826 16.0533 14.8809 15.9504 14.7018C15.8871 14.574 14.7471 11.8232 14.6262 11.5365C14.3349 10.8398 13.9503 10.5151 13.4161 10.5151C13.3665 10.5151 13.4161 10.5151 13.2076 10.5243C12.4314 10.5797 11.6716 10.7747 10.9646 11.1001C10.3732 11.5756 9.90583 12.1874 9.60262 12.883C9.2994 13.5787 9.16936 14.3375 9.22363 15.0944C9.35345 16.8263 10.0041 18.4785 11.0901 19.8338C11.1039 19.8522 11.1293 19.8902 11.1673 19.9489C12.9942 22.8123 15.6119 25.0849 18.7035 26.4915C20.1315 27.1694 21.6771 27.5647 23.2552 27.6556C23.5026 27.6539 23.7497 27.6393 23.9956 27.6118L24.128 27.5992C24.8244 27.4769 25.485 27.2017 26.0624 26.7936C26.6398 26.3854 27.1195 25.8544 27.4672 25.2387C27.8145 24.4674 27.8896 23.6011 27.6802 22.7815C27.4768 22.5159 27.1997 22.316 26.8834 22.2069Z" fill="white"/>
                            <path d="M18.8278 6.51204e-05C14.028 -0.0124944 9.41908 1.87939 6.01232 5.26068C2.60557 8.64196 0.679145 13.2365 0.655681 18.0364C0.653944 21.2449 1.51454 24.395 3.14742 27.157L0.0258391 36.3686C-0.00297413 36.4528 -0.00779736 36.5434 0.0119083 36.6302C0.0316139 36.7171 0.0750722 36.7967 0.137428 36.8602C0.199784 36.9238 0.278581 36.9688 0.365017 36.9901C0.451452 37.0115 0.542122 37.0084 0.626895 36.9811L10.2277 33.931C12.9885 35.4049 16.0827 36.1421 19.2116 36.0713C22.3404 36.0005 25.3982 35.1241 28.0895 33.5268C30.7808 31.9294 33.0147 29.6651 34.5756 26.9524C36.1365 24.2398 36.9715 21.1705 37 18.041C36.9781 13.2402 35.0523 8.64431 31.6453 5.26197C28.2384 1.87963 23.6286 -0.0127953 18.8278 6.51204e-05ZM18.8278 32.3132C16.0135 32.3173 13.2596 31.4962 10.907 29.9515C10.8474 29.9123 10.7797 29.8869 10.709 29.8772C10.6383 29.8674 10.5663 29.8736 10.4983 29.8951L5.68981 31.4242L7.24197 26.8438C7.26659 26.7708 7.27327 26.6929 7.26145 26.6167C7.24962 26.5406 7.21964 26.4684 7.17403 26.4062C5.38918 23.981 4.42871 21.0476 4.43358 18.0364C4.41077 15.1849 5.23548 12.3909 6.80309 10.0088C8.37069 7.62681 10.6105 5.7641 13.2384 4.65705C15.8663 3.54999 18.7639 3.24848 21.5634 3.79077C24.3629 4.33306 26.9383 5.69471 28.9627 7.70296C30.9872 9.71121 32.3695 12.2755 32.9342 15.0706C33.499 17.8657 33.2208 20.7656 32.1348 23.4023C31.0489 26.039 29.2043 28.2937 26.8349 29.8804C24.4655 31.4671 21.6783 32.3142 18.8267 32.3143L18.8278 32.3132Z" fill="white"/>
                        </svg>
                        <p class="mt-6 text-xl font-semibold  text-white dark:text-white">Por Whatsapp</p>
                        <p class="inline-block mt-4 text-white underline hover:text-blue-400 cursor-pointer">Chame no  (13) 91234-5678</p>
                    </div>

                <div class="flex flex-col px-3 justify-center items-center dark:bg-gray-900">
                <svg width="37" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_203_234)">
                    <path d="M39.64 9.58324C37.6082 7.54622 34.915 6.30295 32.0468 6.07799C29.1785 5.85303 26.3244 6.66122 24 8.35658C21.5613 6.54272 18.5259 5.72022 15.5051 6.05473C12.4843 6.38924 9.70247 7.8559 7.71974 10.1594C5.73701 12.4628 4.7007 15.432 4.81949 18.4689C4.93829 21.5059 6.20336 24.385 8.35996 26.5266L20.2625 38.4482C21.2592 39.4292 22.6015 39.9789 24 39.9789C25.3984 39.9789 26.7408 39.4292 27.7375 38.4482L39.64 26.5266C41.8778 24.275 43.1339 21.2294 43.1339 18.0549C43.1339 14.8804 41.8778 11.8348 39.64 9.58324ZM36.9375 23.8816L25.035 35.7841C24.8995 35.9208 24.7383 36.0294 24.5607 36.1035C24.383 36.1776 24.1924 36.2157 24 36.2157C23.8075 36.2157 23.6169 36.1776 23.4393 36.1035C23.2616 36.0294 23.1004 35.9208 22.965 35.7841L11.0625 23.8241C9.55933 22.2876 8.71763 20.2236 8.71763 18.0741C8.71763 15.9246 9.55933 13.8606 11.0625 12.3241C12.5942 10.8118 14.66 9.96383 16.8125 9.96383C18.9649 9.96383 21.0307 10.8118 22.5625 12.3241C22.7406 12.5037 22.9526 12.6463 23.1862 12.7436C23.4198 12.8409 23.6703 12.891 23.9233 12.891C24.1763 12.891 24.4268 12.8409 24.6604 12.7436C24.894 12.6463 25.1059 12.5037 25.2841 12.3241C26.8158 10.8118 28.8817 9.96383 31.0341 9.96383C33.1866 9.96383 35.2524 10.8118 36.7841 12.3241C38.3079 13.8404 39.1772 15.8933 39.2059 18.0428C39.2346 20.1923 38.4203 22.2676 36.9375 23.8241V23.8816Z" fill="white"/>
                    </g>
                    </svg>
                        <p class="mt-3 text-xl font-semibold  text-white dark:text-white">
                               Redes Sociais
                            </p>
                        <div class="mx-4">
                            <p class="text-sm text-center text-white dark:text-gray-200">Utilize nossas redes para entrar em <br /> contato conosco! </p>
                        </div>
                        <div class="flex gap-2 my-2 mt-4text-white underline cursor-pointer">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="white"/>
                                <path d="M24.5 14.9019C26.5 16.0566 26.5 18.9434 24.5 20.0981L16.25 24.8612C14.25 26.0159 11.75 24.5725 11.75 22.2631L11.75 12.7369C11.75 10.4275 14.25 8.98408 16.25 10.1388L24.5 14.9019Z" fill="#E6807D"/>
                            </svg>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7396 9.20196C17.4356 9.60327 16.4619 10.5807 16.0626 11.8893C15.9421 12.2838 15.8582 13.158 15.8582 14.0158V15.4724H14.6012C13.814 15.4724 13.2802 15.5355 13.1728 15.6414C12.9803 15.8313 12.9311 18.6667 13.1154 18.9527C13.1842 19.0595 13.7026 19.1382 14.5059 19.164L15.7867 19.2052L15.8582 23.0788L15.9296 26.9524L17.6233 26.9922C18.75 27.0187 19.3837 26.9776 19.5159 26.8692C19.6768 26.7377 19.7148 25.9833 19.7148 22.9207V19.1347H21.1993C22.4213 19.1347 22.6991 19.0953 22.7705 18.9119C22.9348 18.4899 22.8656 15.8188 22.6858 15.6414C22.5758 15.533 22.0129 15.4724 21.1146 15.4724H19.7148V14.2751C19.7148 12.6462 19.8482 12.5144 21.4952 12.5144C22.5444 12.5144 22.7239 12.4783 22.8522 12.242C23.0622 11.8549 23.0432 9.37353 22.8286 9.16196C22.5891 8.92574 19.5405 8.95546 18.7396 9.20196Z" fill="#E6807D"/>
                            </svg>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6892 9.14903C11.3127 9.48386 10.0073 10.5778 9.37547 11.9257L9 12.7267V18.0001V23.2735L9.37547 24.0745C9.85444 25.0965 10.8333 26.0754 11.8553 26.5543L12.6562 26.9298H17.9297H23.2031L24.0041 26.5543C25.026 26.0754 26.0049 25.0965 26.4839 24.0745L26.8594 23.2735V18.0001V12.7267L26.4839 11.9257C26.0049 10.9037 25.026 9.92486 24.0041 9.44589L23.2031 9.07042L18.2109 9.04539C15.4652 9.03161 12.9805 9.07815 12.6892 9.14903ZM23.7752 11.456C24.3586 11.6997 24.7454 12.4591 24.607 13.0891C24.4742 13.6932 23.7897 14.2032 23.1112 14.2032C21.9364 14.2032 21.291 12.8262 22.0272 11.8902C22.5269 11.255 23.0082 11.1355 23.7752 11.456ZM22.794 12.6036C22.7419 12.7393 22.785 12.9314 22.8918 13.038C23.1607 13.307 23.5796 13.113 23.527 12.744C23.473 12.3658 22.9254 12.2609 22.794 12.6036ZM20.09 13.6208C21.1463 14.1407 21.8935 14.9114 22.4107 16.0145C22.7202 16.6746 22.7812 17.0022 22.7812 18.0031C22.7812 19.0715 22.7316 19.3022 22.3228 20.1324C21.7894 21.2162 21.027 21.9598 19.9153 22.4811C19.2556 22.7904 18.9273 22.8517 17.9297 22.8517C16.9321 22.8517 16.6037 22.7904 15.9441 22.4811C14.8324 21.9598 14.07 21.2162 13.5366 20.1324C13.1278 19.3022 13.0781 19.0715 13.0781 18.0031C13.0781 17.0062 13.1396 16.6737 13.4439 16.0249C14.6656 13.4202 17.5576 12.374 20.09 13.6208ZM17.2749 14.2146C13.536 14.9189 12.9535 19.9864 16.4348 21.5229C18.9017 22.6115 21.7547 20.7223 21.7547 18.0001C21.7547 15.6562 19.5431 13.7874 17.2749 14.2146Z" fill="#E6807D"/>
                            </svg>
                        </div>
                    </div>
           
        </div>
    </div>
    <div class="font-roboto text-center container px-6 py-8 mx-auto mb-8">
    <hr class="my-4 border-rose-300 dark:border-gray-200" />
            
        <h5 class="text-md font-semibold text-white capitalize lg:text-xl dark:text-white">Newsletter</h5>
        <p className="text-white">Quer receber nossas dicas e novidades? Cadastre-se agora</p>      
        
            <div class="flex flex-col mt-4 sm:flex-row sm:items-center w-2/3 mx-auto">
           
            <div class="w-full relative flex justify-center  items-center mt-2">
                <button class="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto">
                <svg class="w-6 h-6 mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                </svg>

                </button>
                <input type="email" placeholder="Digite seu e-mail" class="block w-full py-2 text-white placeholder-white bg-transparent border border-gray-200 rounded-md pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
        </div>
    </div>

      <div className="mx-auto bg-white">
          <nav className="flex mx-auto justify-center relative left-24 lg:left-0 items-center w-1/2  ">
            <Image className="relative bottom-10  "src="/icons/logo.svg" alt="Logo" width={75} height={75} />
            <div className="font-sf-new-republic font-extrabold mx-2 text-xl" >
                <p>
                Ong 
                <span className="text-rose-250 ml-1">Tinie</span>
                <span className="text-blue-350 mr-1">Bird</span> 
                Cats
                </p>
               
            </div>
            <div className="font-roboto flex items-center ml-40 invisible lg:visible ">
                <ul className="flex ml-10 space-x-4 font-medium">
                    <li><a href="#" className="hover:text-blue-350">Home</a></li>
                    <li><a href="#" className="hover:text-blue-350">Sobre</a></li>
                    <li><a href="#" className="hover:text-blue-350">Quero Ajudar</a></li>
                    <li><a href="#" className="hover:text-blue-350">Notícias</a></li>
                    <li><a href="#" className="hover:text-blue-350">Contato</a></li>
                </ul>
            </div>
          </nav>
        </div>




</section>
    );

    
}