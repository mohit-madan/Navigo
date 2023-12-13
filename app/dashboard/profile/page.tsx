import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { getUserProfileData } from "@/services/profile.service";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { lusitana } from '@/app/ui/fonts';

const Profile: NextPage = withPageAuthRequired(
  async () => {
    const user = await getUserProfileData();

    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Profile
        </h1>
        <div>
          <div>
              <Image
                src={user.picture}
                alt="Profile"
                width={36}
                height={36}
              />
              <div>
                <h2>{user.name}</h2>
                <span>{user.email}</span>
              </div>
          </div>
        </div>
      </main>
    );
  },
  { returnTo: "/profile" },
);

export default Profile;