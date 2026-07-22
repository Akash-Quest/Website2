  "use client";
  import React, { useState, useEffect, useRef, useCallback } from 'react';
  import { motion, AnimatePresence, cubicBezier } from 'framer-motion';
  import Button from '../ui/Button';


  interface HeroSlide {
    label: string;
    title: React.ReactNode;
    description: string;
    buttonText: string;
    backgroundImage?: string;
    videoUrl?: string;
  }

  const heroSlides: HeroSlide[] = [
    {
      label: 'An Integrated Strategy, Technology & Impact Consulting Firm',
      title: (
        <>
          Shaping Strategy,<br />Technology & Impact for<br />{' '}
          <em >Tomorrow's Leaders.</em>
        </>
      ),
      description:
        'We help organisations grow, transform digitally, and build sustainable impact through integrated consulting solutions across strategy, technology, research, and social development.',
      buttonText: 'Speak To Partner',
      videoUrl: '/Hero/Slide1.mp4',
    },
    {
      label: 'Agriculture & Sustainability',
      title: (
        <>
          Feeding the Future with<br />
          Precision, Technology <br />
           <em >& Playfair Display</em>
        </>
      ),
      description:
        'From AI-powered crop monitoring and seed systems transformation to climate-smart agriculture and farmer advisory we help governments and agribusinesses drive food security at scale.',
      buttonText: 'Explore Services',
    
      backgroundImage: '/Hero/slide-2-bg.jpg',
    },
    {
      label: 'Digital Transformation',
      title: (
        <>
          Building Intelligent< br />
Systems for Governments<br />
 <em className="italic font-playfair">& Institutions at Scale.</em>
        </>
      ),
      description:
        'From digital public infrastructure and AI enablement to geospatial intelligence and enterprise automation we build technology that delivers measurable programme impact across sectors.',
      buttonText: 'Explore Digital Practise',
      backgroundImage: '/Hero/slide-3-bg.jpg',
    },

    {
      label: 'Social Impact · Foundations · Government & Development Institutions',
      title: (
        <>
          Building Scalable Solutions<br /> for Communities,<br />
{' '}
          <em >Citizens & Impact.</em>
        </>
      ),
      description:
        'We partner with NGOs, foundations, governments, and development institutions to design impactful programmes, build digital ecosystems, drive policy innovation, and measure real-world outcomes helping missions scale sustainably across India, Africa, and the Global South.',
      buttonText: 'Explore Services',
   
      backgroundImage: '/Hero/slide-4-bg.jpg',
    },
    
    
  ];

  /* ── animation variants ─────────────────────────────────────────── */
  const contentVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: i * 0.12, ease: cubicBezier(0.22, 1, 0.36, 1) },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // ✅ FIX: Backgrounds cross-fade simultaneously — no black flash
  const imageVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.9, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
    },
    gone: {
      opacity: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
    },
  };

  /* ── component ──────────────────────────────────────────────────── */
  const Heroslider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);

    const goToSlide = useCallback(
      (index: number) => {
        setCurrentSlide((index + heroSlides.length) % heroSlides.length);
      },
      []
    );

    const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
    const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

    useEffect(() => {
      if (autoTimer.current) clearInterval(autoTimer.current);
      autoTimer.current = setInterval(nextSlide, 8000);
      return () => {
        if (autoTimer.current) clearInterval(autoTimer.current);
      };
    }, [nextSlide]);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') nextSlide();
        else if (e.key === 'ArrowLeft') prevSlide();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const slide = heroSlides[currentSlide];

    return (
      <div className="hero-wrapper w-full">
        
        <div className="hero-inner relative w-full h-[100svh] overflow-hidden bg-neutral-900">

          {/* ── Background images & videos ───────────────────────────────── */}
          {/*
            ✅ FIX: Changed AnimatePresence mode from "wait" to "sync".
            "wait" exits the old element BEFORE entering the new one → causes flash.
            "sync" runs exit and enter simultaneously → smooth cross-fade, no gap.
          */}
          <AnimatePresence mode="sync" initial={false}>
            {slide.videoUrl ? (
              <motion.video
                key={`video-${currentSlide}`}
                variants={imageVariants}
                initial="hidden"
                animate="show"
                exit="gone"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={slide.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            ) : (
              <motion.div
                key={`bg-${currentSlide}`}
                variants={imageVariants}
                initial="hidden"
                animate="show"
                exit="gone"
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                }}
              />
            )}
          </AnimatePresence>

          {/* ── Slide content ───────────────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              className="
                absolute inset-0 z-20 flex flex-col justify-center items-start pb-28
                px-5 pt-16
                sm:justify-center sm:pb-0
                sm:left-24 sm:px-16 sm:pt-12
              "
            >
              {/* Label */}
              <motion.p
                custom={0}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-white/80  text-body-sm"
              >
                {slide.label}
              </motion.p>

              {/* Heading */}
              <motion.h1
                custom={1}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="font-bold text-white max-w-md sm:max-w-2xl 2xl:max-w-5xl  ]"
              >
                {slide.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                custom={2}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-white/80 max-w-sm sm:max-w-xl 2xl:max-w-3xl mb-4 2xl:mb-5 text-body-lg"
              >
                {slide.description}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                custom={3}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-wrap gap-3"
              >
                {/* Primary */}
                <Button variant="primary" iconSize={16}>
                  {slide.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* ── Nav arrows ──────────────────────────────────────── */}

          {/* ── Progress bars ────────────────────────────────────── */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-10 sm:translate-x-0 flex gap-2 z-30">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="relative w-16 sm:w-28 h-0.5 bg-white/30 overflow-hidden"
              >
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 8, ease: 'linear' }}
                    key={`bar-${currentSlide}`}
                  />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>
    );
  };

  export default Heroslider;