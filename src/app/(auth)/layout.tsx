import { redirect } from "next/navigation";
import { verifyToken } from "../actions";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const user = await verifyToken()
    if(user) redirect("/")

  return children
}