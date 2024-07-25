import Image from "next/image";


export default function Card({src, alt}) {

    return (
        <a href="#" class="block">
        <Image
            alt={alt}
            width={600}
            height={500}
            src={src}
            class="h-64 w-full object-cover sm:h-80 lg:h-96"
        />
        <div className="flex text-start">
            <div style={{position: 'relative', top: '60%', left: '15%', transform: 'translate(-50%, -70%)' }}
            className="w-12 h-16 flex items-center mt-4 bg-blue-600 rounded-lg"/>
            <div className="ml-12">
            <h3 class="mt-2 text-lg font-bold text-gray-900 sm:text-xl">Milk</h3>
            <p class="max-w-sm text-gray-700">Macho / filhote</p>
            <p class="max-w-sm text-gray-700">Tiete, São Paulo SP</p>
            </div>
        </div>

        </a>

    );

}