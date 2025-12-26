import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [viewerCount, setViewerCount] = useState(570);

  useEffect(() => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);

    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        const newCount = prev + change;
        return Math.max(550, Math.min(600, newCount));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Saúde Masculina - Método Revolucionário</title>
        <meta name="description" content="Descubra o truque caseiro mostrado por ator porn0." />
      </Helmet>

      {/* Removido min-h-screen para o vídeo subir */}
      <div className="bg-black text-white selection:bg-red-500">
        
        {/* Header Alerta */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-700 to-red-600 py-2 text-center font-bold text-white shadow-md"
        >
          <span className="text-sm tracking-widest uppercase">Atenção: Conteúdo Exclusivo</span>
        </motion.div>

        {/* Barra de Data */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white text-black py-2 text-center"
        >
          <p className="text-xs md:text-sm font-medium">
            Vídeo disponível apenas até hoje: <span className="font-bold text-red-600">{currentDate}</span>
          </p>
        </motion.div>

        {/* Headline Principal */}
        <main className="container mx-auto px-4 pt-8 pb-4 max-w-4xl flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-red-600 text-white px-3 py-1 inline-block mb-3 rounded-sm text-xl md:text-2xl uppercase">
                ATOR PORN0
              </span>
              <br />
              <span className="text-white">MOSTRA PARA ANGOLANOS</span>
              <br />
              <span className="text-white">O TRUQUE CASEIRO QUE AUMENTA TAMANHO</span>
              <br />
              <span className="text-white">E GROSSUR4 DO P4U</span>
              <br />
              <span className="text-yellow-400 font-black">+9CM EM 21 DIAS!</span>
            </h1>
          </motion.div>
        </main>

        {/* Footer com Contador Vivo */}
        <footer className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-md border-t border-red-700 py-3 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <div className="flex space-x-1 items-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
                <span className="text-gray-300">Pessoas assistindo agora:</span>
              </div>
              <span className="text-red-500 font-bold tabular-nums">{viewerCount}</span>
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;
