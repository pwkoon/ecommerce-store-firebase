"use client";

import Link from "next/link";

function UserDashboard() {
  return (
    <>
      <p>UserDashboard</p>
      <Link href={"/sign-in"}>Sign in</Link>
      <Link href={"/sign-up"}>Sign up</Link>
    </>
  );
}

export default UserDashboard;
