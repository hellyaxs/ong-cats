"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';

export default function Perguntas() {

    const perguntas= ["Como posso adotar um gatinho?",
        "Os gatos para adoção são castrados?",
        "O que preciso saber antes de adotar um gato?",
        "Como fazer a adaptação em casa de um gato adotado?"];

    return (
    <section className="bg-rose-100">
        <div className="container mx-auto py-8">
            <Image className="mx-auto mb-2"
            width={30}
            height={30}
            src="/quest.svg"
            alt="Logo da Ong TinieBird Cats"
            />
            <h1 className="font-sf-new-republic mb-5 text-2xl font-semibold text-gray-800 text-center lg:text-4xl">
                Perguntas Frequentes</h1>
        
            <div class="w-1/2 mx-auto space-y-4">
            { perguntas.map((pergunta) => (
             
              
                    <details key={pergunta}
                     class="group rounded-lg bg-white p-6" close>
                    
                    <summary class="flex group-open:bg-rose-200 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
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
    </section>     
    );

    
}