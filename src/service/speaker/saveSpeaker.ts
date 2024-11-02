import { SpeakerModel } from "../../models/speaker";

export const saveSpeaker = async (speaker: SpeakerModel, method: string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}speaker/api`, {
    body: JSON.stringify(speaker),
    method,
    headers: { 'Content-Type': 'application/json' },
  });
}