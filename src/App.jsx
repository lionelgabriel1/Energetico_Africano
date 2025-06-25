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

  useEffect(() => {
    const scriptId = "scr_685957f96c98bfb37d92bc54";
    if (document.getElementById(scriptId)) {
      return;
    }
    const s = document.createElement("script");
    s.id = scriptId;
    s.src = "https://scripts.converteai.net/41939c78-647d-4f47-9c71-eff775da484f/players/685957f96c98bfb37d92bc54/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Saúde Masculina - Método Revolucionário para Aumentar Tamanho</title>
        <meta name="description" content="Descubra o truque caseiro que sexóloga mostra para angolanos aumentar tamanho e grossura do P4U +9CM em 21 dias!" />
      </Helmet>

      <div className="min-h-screen bg-black text-white pb-16">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-red-500 py-3 text-center font-bold text-white shadow-lg"
        >
          <span className="text-lg tracking-wider">SAÚDE MASCULINA</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gray-100 text-black py-4 text-center"
        >
          <p className="text-sm font-medium">
            Hoje <span className="font-bold text-red-600">{currentDate}</span> é o último dia para ver esse vídeo.
          </p>
        </motion.div>

        <main className="container mx-auto px-4 py-8 max-w-4xl flex flex-col items-center text-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              <span className="bg-red-600 text-white px-3 py-1 inline-block mb-2">
                SEXOLOGA
              </span>
              <br />
              <span className="text-white">MOSTRA PARA ANGOLANOS</span>
              <br />
              <span className="text-white">O TRUQUE CASEIRO QUE AUMENTA TAMANHO</span>
              <br />
              <span className="text-white">E GROSSUR4 DO P4U</span>
              <br />
              <span className="text-yellow-400 font-extrabold">+9CM EM 21 DIAS!</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="w-full max-w-2xl"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <div id="vid_685957f96c98bfb37d92bc54" style={{position: 'relative', width: '100%', padding: '178.21782178217822% 0 0'}}>
                <img 
                  id="thumb_685957f96c98bfb37d92bc54" 
                  src="https://images.converteai.net/41939c78-647d-4f47-9c71-eff775da484f/players/685957f96c98bfb37d92bc54/thumbnail.jpg" 
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} 
                  alt="Vídeo sobre saúde masculina" 
                />
                <div 
                  id="backdrop_685957f96c98bfb37d92bc54" 
                  style={{WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%'}}
                ></div>
              </div>
            </div>
          </motion.div>
        </main>

        <footer className="fixed bottom-0 left-0 w-full bg-black border-t-2 border-red-600 py-2 z-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center justify-center space-x-2 text-sm"
            >
              <span className="text-white">Pessoas assistindo nesse momento:</span>
              <span className="text-red-500 font-bold">{viewerCount}</span>
            </motion.div>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;