import BizdaptiveShell from "~/components/sections/bizdaptive-shell";

export default function BizdaptiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BizdaptiveShell>{children}</BizdaptiveShell>;
}
