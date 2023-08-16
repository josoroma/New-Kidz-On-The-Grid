import ScrollMe from "@/components/scrollMe";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="customPage">
      <h2>Listing Page ID: {id}</h2>
      <ScrollMe />
    </div>
  );
}
