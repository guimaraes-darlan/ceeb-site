import { SpeakerModel } from "./speaker";

export type LectureCalendarModel = {
  id?: string | null;
  date: Date;
  speakerId: string;
  speaker?: SpeakerModel;
}

export type LectureCalendarsModel = LectureCalendarModel[];