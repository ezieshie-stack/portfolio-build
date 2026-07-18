import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata = { title: "Contact | David Ezieshi" };

type Search = Promise<{ project?: string }>;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Search;
}) {
  const params = await searchParams;
  return <ContactPageContent projectSlug={params.project} />;
}
