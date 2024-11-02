import { listSpeakers } from "../../../service/speaker/listSpeaker";
import SpeakerPage from "./speaker-page";

export const dynamic = "force-dynamic";

export default async function Speaker() {
  const response = await listSpeakers(0);
  const data = await response.json();

  return <SpeakerPage speakers={data.data} />;
}
