import { motion } from 'framer-motion';
import './TitleCard.css';

export default function TitleCardComponent({ name, location, flag, year }) {
  return (
    <>
      
    <motion.svg
      width="1060"
      height="405"
      viewBox="0 0 1060 405"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="title-card-svg"
      initial={{ opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Static SVG paths from your new graphic */}
      <motion.path
        d="M95 88.9921L192.947 9H980.191V311.43L938.813 345.223H569.023L516.644 388H147.378L95 345.223V88.9921Z"
        stroke="white"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
      <motion.path
        d="M998 86.2476L980.191 50.9211V277.637L998 242.31V86.2476Z"
        fill="white"
        stroke="white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      />
      <motion.path
        d="M84 86.5L187.5 1H113L3 85L84 86.5Z"
        stroke="white"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.path
        d="M540.5 403.5L578 371.5H957L1009.5 332H1056.5L957 403.5H540.5Z"
        stroke="white"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.path
        d="M196.167 29C196.167 31.9455 198.554 34.3333 201.5 34.3333C204.446 34.3333 206.833 31.9455 206.833 29C206.833 26.0545 204.446 23.6667 201.5 23.6667C198.554 23.6667 196.167 26.0545 196.167 29ZM965.5 29H966.5V28H965.5V29ZM964.5 302C964.5 302.552 964.948 303 965.5 303C966.052 303 966.5 302.552 966.5 302H964.5ZM201.5 30H965.5V28H201.5V30ZM964.5 29V302H966.5V29H964.5Z"
        fill="white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      />

      {/* Your custom text overlays */}
      <motion.text
        x="150"
        y="110"
        fill="white"
        className="text-name"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.text>

      <motion.text
        x="150"
        y="150"
        fill="white"
        className="text-location"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        {location}
      </motion.text>

      <motion.text
        x="300"
        y="120"
        fontSize="30"
        className="flag"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        {flag}
      </motion.text>

      <motion.text
        x="650"
        y="300"
        fill="white"
        className="est"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        Est.
      </motion.text>

      <motion.text
        x="750"
        y="300"
        fill="white"
        className="text-year"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        {year}
      </motion.text>
    </motion.svg>
    </>
  );
}
