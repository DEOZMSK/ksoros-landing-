"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const orbitVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 28,
      ease: "linear",
      repeat: Infinity
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2 + index * 0.15,
      ease: "easeOut"
    }
  })
};

const cards = [
  {
    title: "Технология и интуиция — вместе",
    description:
      "Структура данных, которую собирает AI, встречается с ведическими принципами и даёт чистую картину." 
  },
  {
    title: "Анти-воронка: путь без манипуляций",
    description:
      "Мы не продаём иллюзий. Вместо давления — спокойная навигация по твоим паттернам и траекториям." 
  },
  {
    title: "AI-система, которая слушает, а не продаёт",
    description:
      "Диалог с ботом — это исследование. Он фиксирует инсайты и строит карту, чтобы ты видел свой код." 
  }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-orbital-gradient opacity-80" />
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10"
        variants={orbitVariants}
        animate="animate"
      />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-32 sm:px-10">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div className="max-w-2xl space-y-6">
            <motion.h1
              className="text-4xl font-semibold leading-tight sm:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Za7️⃣You — для тех, кто устал верить, но не разучился искать.
            </motion.h1>
            <motion.p
              className="text-lg leading-relaxed text-white/80 sm:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              Это не воронка, не курс и не эзотерический проект. Это система, где AI и ведическая философия
              помогают увидеть, как устроен твой код — без манипуляций, без обещаний, без лишнего шума.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            >
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-medium text-white shadow-lg backdrop-blur transition hover:bg-white/20"
              >
                Посмотреть, как устроен твой код
                <span aria-hidden className="text-lg">→</span>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="relative hidden h-80 items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur lg:flex"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative h-full w-full">
              <motion.div
                className="absolute inset-0 rounded-2xl border border-white/10"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(34,211,238,0.25)",
                    "0 0 40px rgba(236,72,153,0.18)",
                    "0 0 40px rgba(34,211,238,0.25)"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <div className="absolute inset-6 flex flex-col justify-between text-sm text-white/70">
                <p>
                  «Мы не ищем совпадений. Мы выстраиваем орбиту твоих решений, чтобы ты видел связь между тем,
                  что чувствуешь, и тем, что делаешь».
                </p>
                <p className="text-right text-white/60">— Команда Za7️⃣You</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{card.description}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
