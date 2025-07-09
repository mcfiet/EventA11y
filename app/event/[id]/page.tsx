import EventDetailPage from "@/components/EventDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <EventDetailPage eventId={id} />;
}
