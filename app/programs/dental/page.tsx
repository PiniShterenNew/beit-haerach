import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BranchPage } from "@/components/sections/BranchPage";
import { ClinicDirectory } from "@/components/sections/ClinicDirectory";
import { getBranch } from "@/lib/content/site";

const branch = getBranch("dental");

export const metadata: Metadata = {
  title: branch?.name,
  description: branch?.summary,
};

export default function Page() {
  if (!branch) notFound();
  return (
    <BranchPage branch={branch}>
      <ClinicDirectory />
    </BranchPage>
  );
}
