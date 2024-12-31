import { motion } from 'framer-motion';

export function Testimonial({ quote, author, handle, avatar }) {
  const words = quote.split(' ');

  return (
    <div className="max-w-xl p-6">
      <div className="space-y-4">
        <div className="text-2xl font-medium leading-relaxed">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: index * 0.03,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: words.length * 0.03 }}
        >
          <img src={avatar} alt={author} className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="font-medium">{author}</span>
            <span className="text-sm text-muted-foreground">@{handle}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
