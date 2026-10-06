import React, { useState, useEffect, useRef } from "react";

/**
 * ReactBits - DecryptedText Component
 * Scrambles and decrypts characters in real-time on load or hover.
 */
export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=~<>?",
  className = "",
  parentClassName = "",
  encryptedClassName = "text-sky-400 dark:text-sky-300 font-mono opacity-80",
  animateOn = "hover", // 'hover' | 'view' | 'both'
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let intervalId;
    let iteration = 0;

    if (isScrambling) {
      intervalId = setInterval(() => {
        setDisplayText(() => {
          return text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (sequential) {
                if (index < iteration) {
                  return text[index];
                }
              } else {
                if (Math.random() < iteration / maxIterations) {
                  return text[index];
                }
              }
              const randChar = characters[Math.floor(Math.random() * characters.length)];
              return randChar;
            })
            .join("");
        });

        iteration += 1;

        if (iteration > (sequential ? text.length + 3 : maxIterations)) {
          clearInterval(intervalId);
          setDisplayText(text);
          setIsScrambling(false);
        }
      }, speed);
    }

    return () => clearInterval(intervalId);
  }, [isScrambling, text, speed, maxIterations, sequential, characters]);

  const triggerAnimation = () => {
    if (!isScrambling) {
      setIsScrambling(true);
    }
  };

  useEffect(() => {
    if (animateOn === "view" || animateOn === "both") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerAnimation();
            }
          });
        },
        { threshold: 0.2 }
      );
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      return () => observer.disconnect();
    }
  }, [animateOn]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (animateOn === "hover" || animateOn === "both") {
      triggerAnimation();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-default ${parentClassName}`}
      {...props}
    >
      <span className={isScrambling ? encryptedClassName : className}>
        {displayText}
      </span>
    </span>
  );
}
