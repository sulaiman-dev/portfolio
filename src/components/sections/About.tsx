"use client"

import React from "react"
import { motion } from "framer-motion"

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Replace with your actual image */}
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-primary-100 dark:bg-primary-800">
              <div className="absolute inset-0 flex items-center justify-center text-primary-400 dark:text-primary-300">
                Your Image Here
                {/* Uncomment and use your actual image
                <Image
                  src="/images/profile.jpg"
                  alt="Sulaiman Shinwari"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-100 dark:bg-primary-800 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
            <p className="text-primary-600 dark:text-primary-300 mb-6">
              I&apos;m a passionate Full Stack Developer with expertise in
              building modern web applications. With a strong foundation in both
              frontend and backend technologies, I create seamless,
              user-friendly experiences that solve real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-primary-600 dark:text-primary-300">
                  Sulaiman Shinwari
                </p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-primary-600 dark:text-primary-300">
                  sulaimanshinwari830@gmail.com
                </p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-primary-600 dark:text-primary-300">
                  Pakistan
                </p>
              </div>
              <div>
                <p className="font-medium">Availability:</p>
                <p className="text-primary-600 dark:text-primary-300">
                  Full-time
                </p>
              </div>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
