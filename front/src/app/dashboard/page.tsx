import DashNavbar from "@/components/dashboard/DashNavbar";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);

  return (
    <div>
      <DashNavbar name={session?.user?.name} image={session?.user?.image ?? undefined} />
    </div>
  );
}
