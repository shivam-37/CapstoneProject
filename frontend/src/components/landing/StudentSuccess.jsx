import React from 'react';
import { motion } from 'framer-motion';

const StudentSuccess = () => {
  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-center text-foreground mb-20"
        >
          Built Around Your Career Goals
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            { num: '01', title: 'DISCOVER', desc: 'Find the right career path based on your unique skills and interests.' },
            { num: '02', title: 'DEVELOP', desc: 'Build the exact skills employers actually need right now.' },
            { num: '03', title: 'GET HIRED', desc: 'Connect your preparation directly with real opportunities.' },
          ].map((item, i) => (
            <motion.div 
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary/20 to-transparent mb-6 select-none group-hover:from-primary/40 transition-all duration-300">
                {item.num}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;
