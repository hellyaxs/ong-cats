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
            <h1 className="font-sf-new-republic mb-5 text-3xl font-semibold text-gray-800 text-center lg:text-4xl">
                Perguntas Frequentes</h1>
        
            <div class="w-1/2 mx-auto space-y-4">
            { perguntas.map((pergunta) => (
                    <details key={pergunta}
                     class="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden " close>
                    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 group-open:bg-rose-300">
                    <h3 class="font-medium">{pergunta}</h3>

                    <svg
                        className="size-5 text-rose-500 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                
                    </summary>
                    <p class="mt-4 leading-relaxed text-gray-700  group-open:bg-rose-300">
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