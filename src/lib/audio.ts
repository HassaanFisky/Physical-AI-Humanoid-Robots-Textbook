// src/lib/audio.ts
// Subtle "thinking" sound effect using Web Audio API

let audioContext: AudioContext | null = null;

export function playThinkingSound() {
  if (typeof window === "undefined") return;

  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }

    // Create a subtle, pleasant "thinking" tone
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Subtle sine wave at a calming frequency
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(520, audioContext.currentTime); // C5 note

    // Very low volume for subtlety
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      0.03,
      audioContext.currentTime + 0.05
    );
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.15);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  } catch (error) {
    console.warn("Audio playback not supported:", error);
  }
}
