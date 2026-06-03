import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
const desktopVideo = { url: "/media/video-desktop.mp4" };
const mobileVideo = { url: "/media/video-mobile.mp4" };

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Preload when near viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || shouldLoad) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad]);

  // Play / pause based on visibility — mobile-friendly thresholds
  useEffect(() => {
    const el = sectionRef.current;
    const video = videoRef.current;
    if (!el || !video || !shouldLoad) return;

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          // Retry muted (some mobile browsers need an extra nudge)
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.15) {
            tryPlay();
          } else {
            video.pause();
          }
        });
      },
      { threshold: [0, 0.15, 0.5, 0.9] }
    );
    io.observe(el);

    const onLoaded = () => tryPlay();
    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("canplay", onLoaded);

    const onVisibility = () => {
      if (document.hidden) video.pause();
      else tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("canplay", onLoaded);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [shouldLoad]);

  const src = isMobile ? mobileVideo.url : desktopVideo.url;

  // Scroll-driven cinematic transforms
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1, 1.12]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["6%", "0%", "-6%"]);
  // 3D-like cinematic transforms driven by scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 6]);
  const perspectiveBlur = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["blur(8px)", "blur(2px)", "blur(0px)", "blur(2px)", "blur(8px)"]
  );
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.85, 0.25, 0.1, 0.25, 0.85]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.65, 0.9],
    [0, 1, 1, 0]
  );
  const contentY = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [40, 0, -40]);

  return (
    <section
      ref={sectionRef}
      aria-label="Vídeo institucional Souza Serviços"
      className="relative w-full h-[100svh] overflow-hidden bg-steel-900"
      style={{ perspective: "1400px" }}
    >
      {shouldLoad && (
        <motion.video
          ref={videoRef}
          key={src}
          src={src}
          muted
          loop
          autoPlay
          playsInline
          {...({ "webkit-playsinline": "true", "x5-playsinline": "true" } as Record<string, string>)}
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          style={
            prefersReducedMotion
              ? undefined
              : {
                  scale,
                  y,
                  rotateX,
                  rotateY,
                  filter: perspectiveBlur,
                  transformPerspective: 1400,
                  transformStyle: "preserve-3d",
                }
          }
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none will-change-transform"
        />
      )}

      {/* Cinematic vignette that opens as you enter and closes as you leave */}
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { opacity: overlayOpacity }}
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]"
      />

      {/* Subtle film-grain / industrial grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.06] grid-lines"
      />

      {/* Cinematic light sweep — adds dimensional realism */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40 bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.18)_50%,transparent_60%)]"
      />

      {/* Edge vignette for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none shadow-[inset_0_0_220px_60px_rgba(0,0,0,0.85)]"
      />

      {/* Foreground caption that fades in mid-scroll */}
      <motion.div
        style={prefersReducedMotion ? undefined : { opacity: contentOpacity, y: contentY }}
        className="absolute inset-x-0 bottom-10 md:bottom-16 flex flex-col items-center text-center px-6"
      >
        <h2 className="font-display text-3xl md:text-5xl text-white tracking-tight max-w-3xl text-balance">
          Aço, precisão e execução de verdade.
        </h2>
      </motion.div>
    </section>
  );
}
