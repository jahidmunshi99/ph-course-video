import { useEffect, useState } from "react";
import LogInModal from "../LogInModal";

// The main App component which renders the header, hero section, and a footer.
const Home = ({ onLogin, showLogIn, onClose }) => {
  // State and phrases for the typing effect.
  const [typedText, setTypedText] = useState("");
  const phrases = [
    "WellCome To Proghive Academy.",
    "Unlock your Course",
    "Become a Professional Book Layout Designer.",
  ];

  // useEffect hook to handle the typing animation.
  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    // The core function for the typing animation.
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      setTypedText(currentPhrase.substring(0, currentCharIndex));

      if (!isDeleting && currentCharIndex < currentPhrase.length) {
        // Typing forward.
        currentCharIndex++;
      } else if (isDeleting && currentCharIndex > 0) {
        // Deleting backward.
        currentCharIndex--;
      } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause after typing, then start deleting.
        isDeleting = true;
        setTimeout(handleTyping, 1000);
        return;
      } else if (isDeleting && currentCharIndex === 0) {
        // Finished deleting, move to the next phrase.
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }

      // Adjust typing speed based on whether we are typing or deleting.
      const typingSpeed = isDeleting ? 50 : 100;
      setTimeout(handleTyping, typingSpeed);
    };

    // Start the typing animation after a short delay.
    const typingTimeout = setTimeout(handleTyping, 100);

    // Cleanup function to clear the timeout when the component unmounts.
    return () => clearTimeout(typingTimeout);
  }, []); // Empty dependency array means this effect runs once on mount.

  return (
    <>
      {showLogIn ? (
        <LogInModal onClose={onClose} />
      ) : (
        <main className="flex-grow flex flex-col items-center justify-center p-4 bg-gray-900 text-white min-h-screen">
          <div className="text-center px-4 max-w-4xl w-[90%]">
            {/* Typing text display */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-10 min-h-[4rem] md:min-h-[5rem]">
              {typedText}
              {/* Blinking cursor */}
              <span className="inline-block w-1.5 h-10 bg-white ml-2 animate-blink md:h-12"></span>
            </h1>

            {/* Sign In button */}
            <button
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                onLogin();
              }}
            >
              Sign In to Start
            </button>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
