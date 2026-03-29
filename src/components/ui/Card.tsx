"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className, href }: CardProps) {
  const classes = cn(
    "bg-[#111c2e] border border-white/[0.06] rounded-xl p-7",
    className
  );

  const motionDiv = (
    <motion.div
      className={classes}
      whileHover={{ y: -3, borderColor: "rgba(30,184,84,0.2)" }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{motionDiv}</Link>;
  }

  return motionDiv;
}
