import { getSpeaker } from "../../../../../service/speaker/getSpeaker";
import SpeakerFormPage from "../speaker-form-page";

export default async function SpeakerEditForm({
  params,
}: {
  params: { id: string };
}) {
  const response = await getSpeaker(params.id);
  const data = await response.json();

  return <SpeakerFormPage speaker={data.data} />;
}
