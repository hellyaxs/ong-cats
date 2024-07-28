"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';

export default function Perguntas() {

    const perguntas= ["Como posso adotar um gatinho?",
        "Os gatos para adoção são castrados?",
        "O que preciso saber antes de adotar um gato?",
        "Como fazer a adaptação em casa de um gato adotado?"];

    return (
    <section className="flex bg-rose-100">
        <div className="container mx-auto py-12 xl:relative xl:left-52">
            <Image className="mx-auto mb-2"
            width={30}
            height={30}
            src="/quest.svg"
            alt="Logo da Ong TinieBird Cats"
            />
            <h1 className="font-sf-new-republic mb-7 text-2xl font-medium text-gray-800 text-center lg:text-3xl">
                Perguntas Frequentes</h1>
        
            <div class="w-1/2 mx-auto space-y-4">
            { perguntas.map((pergunta) => (
             
              
                    <details key={pergunta}
                     class="group rounded-lg bg-white p-6" close>
                    
                    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h3 class="font-medium">{pergunta}</h3>

                    <svg
                        className="size-6 bg-rose-100 text-rose-500 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                
                    </summary>
                    <p class="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec pharetra tellus ut erat consequat auctor integer nulla nunc
                    dolor sit amet, consectetur adipiscing elit. Donec
                    </p>
                    
                </details>
            
             
                  
                ))}
            
            </div>
        </div>

        <div className="relative top-2 overflow-hidden">
               <svg 
                width="540" height="614" viewBox="0 0 540 654" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M86.2497 284.476C81.8816 323.456 126.216 370.608 175.493 379.169C207.724 384.828 237.532 365.633 246.336 333.299C254.347 303.783 230.851 274.132 183.279 253.585C155.144 241.478 132.382 239.171 112.874 246.901C98.9654 252.561 88.1872 267.615 86.2497 284.476Z" fill="white"/>
                    <path d="M170.145 159.661C167.167 185.883 190.17 220.792 227.561 246.452C263.611 271.202 289.546 270.071 311.335 242.915C338.115 209.641 327.168 168.095 283.713 138.598C251.17 116.508 218.097 111.676 193.213 125.265C182.061 131.397 171.597 147.224 170.145 159.661Z" fill="white"/>
                    <path d="M107.171 438.214C105.174 446.925 108.009 460.874 113.826 471.254C119.828 482.599 140.099 498.875 156.152 505.298C182.181 515.975 217.415 515.563 235.604 504.421C246.053 498.091 256.831 483.036 260.341 470.038C271.342 428.29 238.902 401.516 176.598 400.611C138.869 400.168 112.44 414.386 107.171 438.214Z" fill="white"/>
                    <path d="M328.143 120.1C325.882 152.681 349.717 203.255 375.882 220.735C403.195 238.996 442.486 221.484 453.561 186.217C464.499 151.977 428.973 95.1448 389.099 82.6194C357.415 72.8576 330.582 89.3183 328.143 120.1Z" fill="white"/>
                    <path d="M276.975 322.777C274.464 339.249 276.746 350.305 290.62 387.127C299.909 412.168 306.196 435.45 312.844 469.325C323.987 525.825 330.474 540.574 351.723 554.998C370.162 567.793 386.496 571.331 406.743 567.457C419.276 565.059 426.039 562.099 433.404 556.193C448.523 543.805 465.17 517.634 475.861 489.937C488.194 457.761 504.826 433.258 531.018 409.091C547.122 394.017 552.696 387.453 563.426 370.409C574.547 352.79 576.578 347.738 577.763 336.518C580.796 311.452 568.868 287.416 545.13 271.303C523.499 256.62 509.386 255.989 448.783 266.585C414.656 272.781 387.101 275.888 367.142 276.043C316.38 276.261 303.511 280.389 287.748 300.728C280.806 309.718 278.194 315.215 276.975 322.777Z" fill="white"/>
                </svg>  
        </div>
        

    </section>     
    );

    
}