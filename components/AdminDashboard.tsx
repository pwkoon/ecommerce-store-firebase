"use client";

import Link from "next/link";

function AdminDashboard() {
  return (
    <>
      <div>AdminDashboard</div>
      <Link href={"/sign-in"}>Sign in</Link>
      <Link href={"/sign-up"}>Sign up</Link>
    </>
  );
}

export default AdminDashboard;
