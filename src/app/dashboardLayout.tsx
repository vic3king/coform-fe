import NavBar from "@/components/NavBar"
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div>
      <NavBar />
      <Toaster />
      <main>{children}</main>
    </div>
  )
}