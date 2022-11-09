export const SOUND_HIT = "../sounds/shot.mp3";
export const SOUND_MISS = "../sounds/Miss.mp3";
export const SOUND_SUNK = "../sounds/DestroyOfShip.mp3";

export function playSound(soundName) {
  const audio = new Audio(soundName);
  audio.play();
}
