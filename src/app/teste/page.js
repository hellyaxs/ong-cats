// pages/index.js
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Ong TinieBird Cats</title>
      </Head>
      <header className="bg-pink-100 text-gray-800">
        <div className="container mx-auto p-5">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo.svg" alt="Logo da Ong TinieBird Cats" className="h-8" />
              <ul className="flex ml-10 space-x-4">
                <li><a href="#" className="hover:text-blue-500">Home</a></li>
                <li><a href="#" className="hover:text-blue-500">Sobre</a></li>
                <li><a href="#" className="hover:text-blue-500">Quero Ajudar</a></li>
                <li><a href="#" className="hover:text-blue-500">Notícias</a></li>
                <li><a href="#" className="hover:text-blue-500">Contato</a></li>
              </ul>
            </div>
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">Quero adotar 🐾</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-5">
        <section className="text-center p-10">
          <h1 className="text-4xl font-bold mb-3">Doe amor, doe o seu lar! Adote um gatinho</h1>
          <p className="text-xl mb-5">Ajude a encontrar um lar amoroso para nossos amigos felinos.</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">Quero adotar</button>
        </section>
        <section>
          <img src="/gato-destaque.png" alt="Gato para adoção" className="w-full h-auto" />
        </section>
      </main>
      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>© 2024 Ong TinieBird Cats. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
