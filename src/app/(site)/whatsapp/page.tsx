import { type Metadata } from "next";
import WhatsappPage from "~/components/sections/whatsapp-page";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "WhatsApp messaging for businesses | Spirality Solutions",
  description:
    "Spirality Solutions provides Bizdaptive, a customer messaging workspace. Each client connects their own WhatsApp Business Account, Facebook Page, and Instagram account.",
  path: ROUTES.whatsapp,
});

export default function Page() {
  return <WhatsappPage />;
}
